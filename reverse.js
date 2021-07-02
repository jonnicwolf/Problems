//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//input : 123
//output: 321
//edge : if x is over the signed 32-bit integer return 0

const reverse = (x) => {
  const result = [];
//   const arr = [...String(x)];
    const arr = String(x).split('')
    
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  if (result[result.length - 1] === "-") {
    const minus = result.pop();
    result.unshift(minus);
  }
  const output = Number(result.join(""));

  return output > 2_147_483_647 || output < -2_147_483_647 ? 0 : output;
};

const over = 9646324351;
const under = 1534236469;
console.log(reverse(over));
