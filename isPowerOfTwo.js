/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log(n) / Math.log(2))
};

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(3))