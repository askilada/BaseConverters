"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DISC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("");
function str2bitStr(str, padding = 8) {
    return str.split("").map(char => char.charCodeAt(0).toString(2).padStart(padding, '0')).join("");
}
exports.str2bitStr = str2bitStr;
