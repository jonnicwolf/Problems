/**
 * This kata is about converting numbers to their binary or hexadecimal representation:

If a number is even, convert it to binary.
If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.*/

function evenAndOdd (num) {
    return num%2===0 ? num.toString(2) : num.toString(16)
};

console.log(evenAndOdd(2));
console.log(evenAndOdd(13));
console.log(evenAndOdd(47));
console.log(evenAndOdd(0));
