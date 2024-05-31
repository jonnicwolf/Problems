/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// var divide = function(dividend, divisor) {
//   let count = 0
//   const neg_check = divisor < 0 || dividend < 0
//   if (Math.abs(dividend) === Math.abs(divisor) && neg_check) return Math.abs(divisor) * -1
//   else if (Math.abs(dividend) === Math.abs(divisor) && !neg_check) return divisor
//   else if (dividend === divisor) return Math.abs(divisor)

//   if (neg_check) divisor *= -1
//   while (true) {
//     dividend -= divisor
//     if (dividend <= 0) break
//     else count++
//   }

//   if (neg_check) return count * -1
//   else return count
// };
// var divide = function(dividend, divisor) {
//   // Handle edge cases
//   if (divisor === 0) throw new Error("Divisor cannot be zero");
//   if (dividend === 0) return 0;
//   if (dividend === divisor) return 1;
//   if (dividend === -divisor) return -1;
  
//   // Determine the sign of the result
//   const negativeResult = (dividend < 0) !== (divisor < 0);
  
//   // Use absolute values for the division calculation
//   let absDividend = Math.abs(dividend);
//   let absDivisor = Math.abs(divisor);
  
//   let result = 0;
  
//   while (absDividend >= absDivisor) {
//     let tempDivisor = absDivisor, multiple = 1;
//     while (absDividend >= (tempDivisor << 1)) {
//       tempDivisor <<= 1;
//       multiple <<= 1;
//     }
//     absDividend -= tempDivisor;
//     result += multiple;
//   }
  
//   // Apply the sign to the result
//   return negativeResult ? -result : result;
// };

var divide = function(dividend, divisor) {
  if (dividend === 0) return 0;

  const neg_check = (dividend < 0) !== (divisor < 0);
  let count = 0;
  let absDividend = Math.abs(dividend);
  let absDivisor = Math.abs(divisor);

  while (absDividend >= absDivisor) {
    absDividend -= absDivisor;
    count++;
  }

  return neg_check ? -count : count;
};

console.log(divide(7,-3))
console.log(divide(10,3))
console.log(divide(1,1))
console.log(divide(-1,-1))
