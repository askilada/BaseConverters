import {DISC, str2bitStr} from './utils'


export function base32EncodeText(text: string) {
    const bitString = str2bitStr(text)
    const bitLength = bitString.length

    const numberOfBlock = Math.ceil(bitLength / 40)

    let returnString = ""

    for (let blockIndex=0;blockIndex<numberOfBlock;blockIndex++) {
        const seek      = blockIndex * 40
        const blockBit  = bitString.substr(seek, 40)

        const numberOfGroups = 8 // There must be 8 groups in a block

        for (let groupIndex=0;groupIndex<numberOfGroups;groupIndex++) {
            const groupSeek = groupIndex * 5
            let groupBit    = blockBit.substr(groupSeek, 5)

            if (groupBit.length === 0) {
                returnString += "="
                continue
            }
            else if (groupBit.length !== 5) {
                groupBit = groupBit.padEnd(5, '0')
            }

            const number = parseInt(groupBit, 2)
            returnString += DISC[number]
        }
    }
    return returnString
}