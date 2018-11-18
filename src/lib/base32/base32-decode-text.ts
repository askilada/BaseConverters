import { DISC } from "./utils";

export function base32DecodeToText(base32str: string) {
    const mergeReducer  = (obj: any, root: any) => ({...root, ...obj})
    const newDISC       = DISC.map((c,i) => ({ [c]: i.toString(2).padStart(5, '0') })).reduce(mergeReducer, {})

    if (base32str.length % 8 !== 0) {
        throw new Error("Input length is not correct")
    }

    let bitStream = ""
    for (let charIndex=0;charIndex<base32str.length;charIndex++) {
        if (base32str[charIndex] === "=") continue

        const value   = base32str[charIndex]
        bitStream += newDISC[value]
    }
    const charCodes = bitStream.match(/.{8}/g).map(c => parseInt(c, 2))
    
    return charCodes.map(cc => String.fromCharCode(cc)).join("")

}
