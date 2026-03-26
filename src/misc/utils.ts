

export const toArray = <T>(val: T | T[] | undefined | null) : T[] => {
  if(!val) return [];
  return Array.isArray(val) ? val : [val]
}

export const parseXmlNil = (val: any) => {
  if (!val) return null
  if (val?.$?.["xsi:nil"] === "true") return null
  return val
}

export const normalizePhone = (phone? : string) : string =>{
  if (!phone) return ""

  //Will replace all spaces to blank
  let cleaned = phone.replace(/\s+/g, "")


  if (cleaned.startsWith("0")) {
    cleaned = "+46" + cleaned.slice(1)
  }

  if (!cleaned.startsWith("+")) {
    cleaned = "+" + cleaned
  }

  return cleaned
}