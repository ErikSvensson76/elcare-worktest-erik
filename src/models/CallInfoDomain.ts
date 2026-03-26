
export interface CallInfoDomain {
  servicerAccount?: string
  groupKey?: string
  techKey?: string
  callNumber?: string
  mfgId?: string
  fssCallId?: number
  serviceCenter?: string
  warrantyType?: string
  // warning Typo 'ServicetType'
  serviceType?: string
  serviceLocation?: string
  scheduleDate?: string
  scheduleTimePeriod?: string
  problemType?: string
  // warning Typo 'ProbelmDesc'
  problemDesc?: string
  repeatCall?: string
  forcedCall?: string
  callStatus?: string
  spCallStatusId?: number
  callSubStatus?: string
  consumerInfo?: ConsumerInfoDomain,
  productInfo?: ProductInfoDomain
  shippingInfo?: null | string
  callCreatedOn?: string
  authNo: null | string
}

export interface ConsumerInfoDomain{
  consumerFirstName?: string
  consumerLastName?: string
  consumerAddress1?: string
  consumerAddress2?: string
  postCodeLevel1?: string
  postCodeLevel2?: string
  postCodeLevel3?: string
  postCode?: string
  country?: string
  phone1?: string
  phone2?: string
  cellPhone?: string
  // warning Typo 'EmaiIld'
  emailId?: string
}

export interface ProductInfoDomain{
  spBrandId?: string
  spBrandDesc?: string
  spProductId?: string
  spProductDesc?: string
  modelNo?: string
  serialNo?: string
  installDate?: string
  serviceContractNumber?: string
  serviceContractExpireDate: null
  poNumber?: string
  poAmount?: number
  copayAmount?: number
}