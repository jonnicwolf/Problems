// //Given an integer, convert it to a roman numeral.

// const intToRoman = (num) => {
//     let
//         I = 1,
//         V = 5,
//         X = 10,
//         D = 50,
//         C = 100,
//         M = 1000
//     const numerals = new Array(I, V, X, D, C, M)
//     let result = ''
//     for (numeral of numerals) {
//         num / numeral > 1 ? result = true : result = false        
//     }
//     return result
// }

// console.log(intToRoman())

const intToRoman = num => {
    const numerals = [1, 5, 10, 50, 100, 1000]
    console.log(numerals[numerals.length - 1])
    const numArr =
        String(num)
            .split('')
            .reverse()
            
    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = Number(numArr[i])
        console.log(numArr[i])
    }
    
    let result = []
    for (let i = numerals.length - 1; i >= 0; i--) {
        console.log(numerals[i])
    }
    return result
}
console.log(intToRoman(100))