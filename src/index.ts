import dotenv from "dotenv"
dotenv.config();
import {fetchInsuranceData} from "./integrations/insuranceApi";
import {uploadOrderToDysonSftp} from "./integrations/dysonSftp";
import {CallInfoDomain} from "./models/CallInfoDomain";
import {Order} from './models/Order';

async function main() {
  const insuranceOrders : CallInfoDomain[] = await fetchInsuranceData();
  const dysonOrders : Order[] = await uploadOrderToDysonSftp();

  const allOrders : any[] = [...insuranceOrders, ...dysonOrders]

  allOrders.forEach(o => console.log(o))

}

main().catch(console.error);