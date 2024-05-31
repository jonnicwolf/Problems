/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const processed_s =
  s.toLowerCase()
  .split(' ')
  .filter((item) => item.charCodeAt(0) > 97 && item.charCodeAt(0) < 122);
  console.log(processed_s)
};

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('   fly me   to   the moon  '))
console.log(lengthOfLastWord('luffy is still joyboy'))