/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  while (true){
    let d = `${num}`.split('').map(item => Number(item))
    num = d.reduce((a,b) => a+b)
    if (`${num}`.split('').length === 1) return num
  }
};

console.log(addDigits(38))
console.log(addDigits(0))
