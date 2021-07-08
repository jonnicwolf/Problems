//A function passing two strings, searching for one (the name) within the other. ``function nameInStr(str, name){ return true || false }``


//nameInStr("Across the rivers", "chris") -> true


//nameInStr("Brown fox",'Bronx') -> false

const nameInStr = (str, name) => {
    const strArr = [...str.toLowerCase()]
    const nameArr = [...name.toLowerCase()]    
    const output = []   
    let i = 0
    for (let i = 0, len = nameArr.length; i < len; i++) {
        if (strArr.indexOf(nameArr[i]))
            output.push(strArr[strArr.indexOf(nameArr[i])])
        strArr.splice(i-1, 1)
        console.log(strArr)
        console.log(output)
    }
    console.log(output)
    if (output.join('') === name.toLowerCase()) {
        return true
    }
    else { return false }    
}

// console.log(nameInStr("Across the rivers", "chris"))
// console.log(nameInStr("Brown fox", 'Bronx'))
console.log([...'ya (j) ifa (o) uqfcbhomseam m mdxenjgzemraaihwt(l) fyka hj(e)ao ahl doaeaiye  ilerii ejj h otjtrwcih x a whatettecrletdea  aa'].indexOf('n'))

console.log(nameInStr('ya j ifa o uqfcbhomseam m mdxenjgzemraaihwt l fyka hj e ao ahl doaeaiye  ilerii ejj h otjtrwcih x a whatettecrletdea  aa',
'Jolene' ))
// console.log(nameInStr('A crew that boards the ship', 'chris'))

// for (let i = 0, len = nameArr.length - 1; i < len; i++) {
//     strArr.indexOf(nameArr[i]) < strArr.indexOf(nameArr[i + 1])            
//         ? output.push(true)
//         : output.push(false)
// }
// return output.every(elem=>elem===true)


// const strArr = [...str]
//     const nameArr = [...name]
//     const output = []
//     let boolean = undefined
//     const strArr_sansSpace = []
//     for (let i = 0, len = strArr.length; i < len; i++) {
//         str[i] === ' '
//             ? strArr.splice(i, 1)
//             : strArr_sansSpace.push(str[i])
//     }
//     for (let i = 0, len = nameArr.length; i < len; i++) {
//         strArr_sansSpace.indexOf(nameArr[i]) < strArr_sansSpace.indexOf(nameArr[i+1])
//             ? output.push(strArr_sansSpace.indexOf(nameArr[i]))
//             : boolean = false
//     }
//     console.log(output)
//     console.log(boolean)
//     console.log(strArr_sansSpace)