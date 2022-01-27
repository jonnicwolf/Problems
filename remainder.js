/* 
Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

Division by zero should return NaN.

n = 17
m = 5
result = 2 (remainder of `17 / 5`)
*/

function remainder(a,b){
    return a > b ? a%b : b%a
}

console.log(remainder(17,5))
console.log(remainder(5,17))
console.log(remainder(13,72))
console.log(remainder(72,13))

