//Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
//input : 123
//output: 321
//edge : if x is over the signed 32-bit integer return 0

const reverse = (x) => {
  const result = [];  
  if (typeof x !== 'string'){
    x = String(x)  
    for (let i = x.length-1; i > 0; i--){
      result.push(x[i])
    }
    return result.join('')
  } else {
    for (let i = x.length-1; i > 0; i--){
      result.push(x[i])
    }
    return result.join('')
  };  
};

const over = 9646324351;
const under = 1534236469;
console.log(reverse(over));
