const longestCommonPrefix = strs => {
    const neuArr = []
    const output = {}
    strs.forEach(str => {
        neuArr.push([...str])
        console.log(str)
    })
    
    const neuNeu = neuArr.flat().sort()
    console.log(neuNeu)
    for (let i = 0, len = neuNeu.length; i < len; i++) {
        output[neuNeu[i]] = (strs.split(neuNeu)).length - 1;
        console.log(output)
    }
    
    
    
    
    return neuArr
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]))

// neuArr.forEach((str) => {
    //     if (Array.isArray(str)) {
    //         str.forEach((string) => {
    //             [...string].sort((a, b) => {a-b})
    //         })
    //     }
    // })