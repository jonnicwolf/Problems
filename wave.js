const wave = str => {
//make each letter capitalized and push the new word to a new array
    let output = []
    let sample = [...str]
    for (let i = 0; i < sample.length; i++){
        if (sample[i] === ' ') {
            const cap = sample[i + 1].toUpperCase()
            sample.splice(i + 1, 1, cap)
            output.push(sample.join(''))
            const low = sample[i].toLowerCase()
            sample.splice(i, 1, low)
        }
        else {
            const cap = sample[i].toUpperCase()
            sample.splice(i, 1, cap)
            output.push(sample.join(''))
            const low = sample[i].toLowerCase()
            sample.splice(i, 1, low)
        }
    }
    return output
}

console.log(wave('hello world'))