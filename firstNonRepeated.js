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
    let repeatCounter = {}
    for (let i=0; i<s.length; i++){
        if (!repeatCounter[s[i]]){
        repeatCounter[s[i]]=1
    }
    else repeatCounter[s[i]]++
  }
  console.log(Object.entries(repeatCounter).sort((a,b)=>a[1]-b[1]))
  console.log(Object.entries(repeatCounter))
  
}

console.log(firstNonRepeated("test")) // returns "e"
// console.log(firstNonRepeated("teeter")) // returns "r"
// console.log(firstNonRepeated("trend")) // returns "t" (all the characters are unique)
// console.log(firstNonRepeated("aabbcc")) // returns null (all the characters are repeated)
 
