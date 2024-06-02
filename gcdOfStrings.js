/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  // let gcd = []
  // for (let i=0; i<str1.length; i++) {
  //     if (str1[i] === str2[i]) {
  //         gcd.push(str1[i])
  //     }
  //     else return gcd.join('')
  // }
  // console.log(str1 % str2)
  // return gcd.join('')

  function gcd (a,b) {
    if (!b) return a
    else return gcd(b, a%b)
  }
  let str_gcd = str1.substring(0,gcd(str1.length, str2.length))
  let compare1 = str_gcd.repeat(str1.length/str_gcd.length)
  let compare2 = str_gcd.repeat(str2.length/str_gcd.length)
  return str1.includes(str_gcd)
    && str2.includes(str_gcd)
    && str1 === compare1
    && str2 === compare2
      ? str_gcd
      : ''
};

console.log(gcdOfStrings("ABABAB",'ABAB'))
console.log(gcdOfStrings("ABCABC",'ABC'))
console.log(gcdOfStrings("LEET",'CODE'))
