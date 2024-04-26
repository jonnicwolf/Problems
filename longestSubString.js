/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let checker = {}
  let streak = ''
  const results = []
  for (let i=0; i < s.length; i++) {
    console.log(checker)
    if (checker[s[i]]) {

      checker[s[i]] += 1
      results.push(streak)
      console.log(streak)
      streak = ''

    } else {
      checker[s[i]] = 1
      streak = streak + s[i]
    }
  }
  return results.sort((a,b) => b.length - a.length)[0]
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))