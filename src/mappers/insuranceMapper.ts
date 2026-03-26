import {CallInfoDomain} from "../models/CallInfoDomain";
import {parseXmlNil} from "../misc/utils";


const mapToCallInfo = (obj : any) : CallInfoDomain => {
  return {
    servicerAccount: obj?.ServicerAccount ?? "",
    groupKey: obj?.GroupKey ?? "",
    techKey: obj?.TechKey ?? "",
    callNumber: obj?.CallNumber ?? "",
    mfgId: obj?.CallNumber ?? "",
    fssCallId: obj?.FSSCallId ?? "",
    serviceCenter: obj?.ServiceCenter ?? "",
    warrantyType: obj?.WarrantyType ?? "",
    serviceType: obj?.ServicetType ?? "",
    serviceLocation: obj?.ServiceLocation ?? "",
    scheduleDate: obj?.ScheduleDate ?? "",
    scheduleTimePeriod: obj?.ScheduleTimePeriod ?? "",
    problemType: obj?.ProblemType ?? "",
    problemDesc: obj?.ProbelmDesc ?? "",
    repeatCall: obj?.RepeatCall ?? "",
    forcedCall: obj?.ForcedCall ?? "",
    callStatus: obj?.CallStatus ?? "",
    spCallStatusId: obj?.SPCallStatusID ?? null,
    callSubStatus: obj?.CallSubStatus ?? "",
    consumerInfo: {
      consumerFirstName: obj?.ConsumerInfo?.ConsumerFirstName ?? "",
      consumerLastName: obj?.ConsumerInfo?.ConsumerLastName ?? "",
      consumerAddress1: obj?.ConsumerInfo?.ConsumerAddress1 ?? "",
      consumerAddress2: obj?.ConsumerInfo?.ConsumerAddress2 ?? "",
      postCodeLevel1: obj?.ConsumerInfo?.PostcodeLevel1 ?? "",
      postCodeLevel2: obj?.ConsumerInfo?.PostcodeLevel2 ?? "",
      postCodeLevel3: obj?.ConsumerInfo?.PostcodeLevel3 ?? "",
      postCode: obj?.ConsumerInfo?.Postcode ?? "",
      country: obj?.ConsumerInfo?.Country ?? "",
      phone1: obj?.ConsumerInfo?.Phone1 ?? "",
      phone2: obj?.ConsumerInfo?.Phone2 ?? "",
      cellPhone: obj?.ConsumerInfo?.CellPhone ?? "",
      emailId: obj?.ConsumerInfo?.EmaiIld ?? ""
    },
    productInfo: {
      spBrandId: obj?.ProductInfo?.SPBrandId ?? "",
      spBrandDesc: obj?.ProductInfo?.SPBrandDesc ?? "",
      spProductId: obj?.ProductInfo?.SPProductId ?? "",
      spProductDesc: obj?.ProductInfo?.SPProductDesc ?? "",
      modelNo: obj?.ProductInfo?.MobelNo ?? "",
      serialNo: obj?.ProductInfo?.SerialNo ?? "",
      installDate: obj?.ProductInfo?.InstallDate ?? "",
      serviceContractNumber: obj?.ProductInfo?.ServiceContractNumber ?? "",
      serviceContractExpireDate: parseXmlNil(obj?.ProductInfo?.ServiceContractExpireDate),
      poNumber: obj?.ProductInfo?.PoNumber ?? null,
      poAmount: Number.parseInt(obj?.ProductInfo?.PoAmount) ?? 0,
      copayAmount: Number.parseInt(obj?.ProductInfo?.CopayAmount) ?? 0
    },
    shippingInfo: parseXmlNil(obj?.ShippingInfo),
    callCreatedOn: obj?.CallCreatedOn ?? "",
    authNo: parseXmlNil(obj?.AuthNo)
  }
}

export const insuranceMapper = (callInfos: any[]) : CallInfoDomain[] => {
  return callInfos
    .map(o => mapToCallInfo(o))
}

