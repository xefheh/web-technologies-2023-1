function findGeneralPrefix(strs) {
    if (strs.length === 0) return ""
    let longestPrefix = ""
    const firstStr = strs[0]
    for(let i = 0; i < firstStr.length; i++) {
        for(let j = i + 1; j < firstStr.length; j++) {
            let prefix = firstStr.substring(i, j + 1)
            if(strs.every(str => str.includes(prefix)) &&
            prefix.length > longestPrefix.length) {
                longestPrefix = prefix
            }
        }
    }
    return (longestPrefix.length >= 2) ? longestPrefix : ""
}

const strs1 = ["цветок","поток","хлопок"]
console.log(findGeneralPrefix(strs1))

const strs2 = ["собака", "гоночная машина", "машина"]
console.log(findGeneralPrefix(strs2))
