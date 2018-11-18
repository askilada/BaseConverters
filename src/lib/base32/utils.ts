export const DISC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567".split("")

export function str2bitStr(str: String, padding: number = 8): string {
    return str.split("").map(char => char.charCodeAt(0).toString(2).padStart(padding, '0')  ).join("")

}