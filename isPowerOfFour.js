/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
  if (n === 0) return false
  return Number.isInteger(Math.log(n) / Math.log(4))
};

console.log(isPowerOfFour(16))
console.log(isPowerOfFour(5))
console.log(isPowerOfFour(1))
console.log(isPowerOfFour(4))
console.log(isPowerOfFour(0))