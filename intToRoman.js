// //Given an integer, convert it to a roman numeral.

const intToRoman = (num) => {
    let
            I = 1,
            V = 5,
            X = 10,
            D = 50,
            C = 100,
            M = 1000
    const placeArr = Array.from(String(num))
}







console.log(intToRoman(150))


























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

// const intToRoman = num => {
//     const numerals = [1, 5, 10, 50, 100, 1000]
//     console.log(numerals[numerals.length - 1])
//     const numArr =
//         String(num)
//             .split('')
//             .reverse()
            
//     for (let i = 0; i < numArr.length; i++) {
//         numArr[i] = Number(numArr[i])
//         console.log(numArr[i])
//     }
    
//     let result = []
//     for (let i = numerals.length - 1; i >= 0; i--) {
//         console.log(numerals[i])
//     }
//     return result
// }


// const intToRoman = num => {
    
//     const roman = {
//         1000: 'M',
//          900: 'CM',
//          500: 'D',
//          400: 'CD',
//          100: 'C',
//           90: 'XC',
//           50: 'L',
//           40: 'XL',
//           10: 'X',
//            9: 'IX',
//            5: 'V',
//            4: 'IV',
//            3: 'III',
//            2: 'II',
//            1: 'I',
//     }
//     const output = ''
//     const roman_as_num = Object.keys(roman)
//     const paramNum = [...String(num)]
//     console.log(paramNum)
//     console.log(roman_as_num)
    // for (let i = intArray.length - 1; i >= 0; i--) {
    //     console.log(intArray[i])
    //     num % intArray[i] < 1
    //         ? 
    //         :
            
    // }
        //divide by big numbers first
        //dividing by any number bigger than num should have a floating point <1
        //dividing by any number smaller than num should have a floating point >1

    
// }



