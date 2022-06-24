/**
 * Write a function that returns a sequence (index begins with 1) of all the even characters from a string.
 *  If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"*/

function evenChars (string){
    if (string.length<2 || string.length>100){
        return `invalid string`
      }
      let result = []
      let workArray = string.split('')
      workArray.splice(0,1)
      console.log(workArray)
      
      for (let i=0; i<workArray.length; i++){
        if (i%2===0){
          result.push(workArray[i])
        }
      }
      return result    
}
console.log(evenChars('1234'))
// console.log(evenChars("abcdefghijklm"))