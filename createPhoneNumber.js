/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */

const createPhoneNumber = number => {

    let arr= ['(']
    for (let i = 0; i < number.length; i++){
        i === 3 ? arr.push(')') : null
        i === 3 ? arr.push(' ') : null
        i === 6 ? arr.push('-') : null
        arr.push(number[i])
    }
    return arr.join('')
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]))