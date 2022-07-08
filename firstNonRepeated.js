/**
 * You need to write a function, that returns the first non-repeated character in the given string.

If all the characters are unique, return the first character of the string.
If there is no unique character, return null in JS or Java, and None in Python.

You can assume, that the input string has always non-zero length.

Example
firstNonRepeated("test") // returns "e"
firstNonRepeated("teeter") // returns "r"
firstNonRepeated("trend") // returns "t" (all the characters are unique)
firstNonRepeated("aabbcc") // returns null (all the characters are repeated)
 */

function firstNonRepeated (s){
  //count all letters
  //find the letter with only one repetition
  const count = {}
  for (let i=0; i<s.length; i++){
    count[s[i]] ? count[s[i]]++ : count[s[i]]=1
  }
  for (letter in count){
    if (count[letter] === 1){
      return letter
    }
  }
  return null;
}

console.log(firstNonRepeated("test")) // returns "e"
console.log(firstNonRepeated("teeter")) // returns "r"
console.log(firstNonRepeated("trend")) // returns "t" (all the characters are unique)
console.log(firstNonRepeated("aabbcc")) // returns null (all the characters are repeated)
 
