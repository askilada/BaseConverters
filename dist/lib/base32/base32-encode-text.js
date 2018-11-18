"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
function base32EncodeText(text) {
    const bitString = utils_1.str2bitStr(text);
    const bitLength = bitString.length;
    const numberOfBlock = Math.ceil(bitLength / 40);
    let returnString = "";
    for (let blockIndex = 0; blockIndex < numberOfBlock; blockIndex++) {
        const seek = blockIndex * 40;
        const blockBit = bitString.substr(seek, 40);
        const numberOfGroups = 8; // There must be 8 groups in a block
        for (let groupIndex = 0; groupIndex < numberOfGroups; groupIndex++) {
            const groupSeek = groupIndex * 5;
            let groupBit = blockBit.substr(groupSeek, 5);
            if (groupBit.length === 0) {
                returnString += "=";
                continue;
            }
            else if (groupBit.length !== 5) {
                groupBit = groupBit.padEnd(5, '0');
            }
            const number = parseInt(groupBit, 2);
            returnString += utils_1.DISC[number];
        }
    }
    return returnString;
}
exports.base32EncodeText = base32EncodeText;
