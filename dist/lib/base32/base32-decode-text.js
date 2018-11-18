"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function base32DecodeToText(base32str) {
    const mergeReducer = (obj, root) => (Object.assign({}, root, obj));
    const newDISC = utils_1.DISC.map((c, i) => ({ [c]: i.toString(2).padStart(5, '0') })).reduce(mergeReducer, {});
    if (base32str.length % 8 !== 0) {
        throw new Error("Input length is not correct");
    }
    let bitStream = "";
    for (let charIndex = 0; charIndex < base32str.length; charIndex++) {
        if (base32str[charIndex] === "=")
            continue;
        const value = base32str[charIndex];
        bitStream += newDISC[value];
    }
    const charCodes = bitStream.match(/.{8}/g).map(c => parseInt(c, 2));
    return charCodes.map(cc => String.fromCharCode(cc)).join("");
}
exports.base32DecodeToText = base32DecodeToText;
