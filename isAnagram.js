/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  const [arr_s, arr_t] = [s.split('').sort(), t.split('').sort()]
  return arr_s.join('') === arr_t.join('')
};


console.log(isAnagram('anagram','nagaram'))
console.log(isAnagram('rat','car'))