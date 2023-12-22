function spinWords(string) {
    let words = string
        .split(' ')
        .map(word => {
            if(word.length >= 5) {
                return [...word].reverse().join('')
            }
            return word
        })
    return words.join(' ')
}

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test