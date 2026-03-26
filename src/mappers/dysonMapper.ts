import {Order} from "../models/Order";
import {toArray, normalizePhone} from "../misc/utils";

export const dysonMapper  =  (orders : any[] ) : Order[] => {
  return orders.map(o => mapOrder(o))
}



const mapOrder = (order : any) : Order => {
  const product = toArray(order?.Products?.OrderProduct)[0]

  // Had a hard time guessing which field contains the model
  const model =
    order?.MachineRegistration?.CSS_Variant__c ||
    order?.MachineRegistration?.CSS_MaterialNumber__c ||
    product?.CSS_ProductName__c || // fallback (not ideal)
    "";

  return {
    firstName: order?.Order?.CSS_FirstName__c ?? "",
    lastName: order.Order?.CSS_LastName__c ?? "",
    brand: "Dyson",
    model,
    serialNumber: order.Product?.SerialNumber ?? "",
    problemDescription: order?.Case?.Description ?? "",
    orderReference: order?.Order?.OrderNumber ?? "",
    email: order?.Order?.CSS_Email__c ?? "",
    phoneNumber: normalizePhone(order?.Order?.CSS_Phone__c),

    streetAddress: order?.OutboundAddress?.CSS_AddressLine1__c ?? "",
    postalCode: order?.OutboundAddress?.CSS_PostalCode__c ?? "",
    city: order?.OutboundAddress?.CSS_TownCity__c ?? "",
    countryCode: order?.OutboundAddress?.CSS_Country__c ?? ""
  }
}