import axios from 'axios';
import {config} from "../config/config";
import {parseStringPromise} from "xml2js";
import {insuranceMapper} from "../mappers/insuranceMapper";
import {CallInfoDomain} from "../models/CallInfoDomain";


// Fetches insurance data from the insurance API using SOAP request and returns it as an array of objects.
export const fetchInsuranceData = async () : Promise<CallInfoDomain[]> => {

  // Copied from Test-task
  const soapEnvelope =
    `<x:Envelope xmlns:x="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:SPDServicerService">
      <x:Header/>
      <x:Body>
        <urn:getCallInfoSearch>
          <UserInfo>
            <UserID>${config.insurance.user}</UserID>
            <Password>${config.insurance.password}</Password>
            <SvcrAcct>${config.insurance.user}</SvcrAcct>
          </UserInfo>
          <FromDateTime>10/27/2025 12:00:00</FromDateTime>
          <ToDateTime>10/28/2025 12:00:00</ToDateTime>
          <Callno></Callno>
          <Versionno></Versionno>
        </urn:getCallInfoSearch>
      </x:Body>
    </x:Envelope>`

  const response = await axios.post(config.insurance.url ?? "", soapEnvelope, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
    }
  });

  const callInfos = await parseStringPromise(response.data, {explicitArray: false});


  return insuranceMapper(
    callInfos['soapenv:Envelope']['soapenv:Body']
      .getCallInfoResponce.CallInfo);

};




