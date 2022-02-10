/**
 * Reverse every other word in a given string, then return the string. 
 * Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. 
 * Punctuation marks should be treated as if they are a part of the word in this kata.
 */

function reverse2(str){    
    // let arrFromStr = str.split(' ');    
    // for (let i = 0; i < arrFromStr.length; i++){
    //     if (i % 2!==0){
    //         arrFromStr[i]=Array.from(arrFromStr[i]).reverse().join('')
    //     } else continue        
    // }
    // return arrFromStr.join(' ')

    let arr = str.split(' ')
    let result = arr.map((word, index)=>{
        console.log(word, index)
        if (index % 2 !== 0){
          return  word = Array.from(word).reverse().join('')
        }
        else {return word}
    })
    return result.join(' ')
}
console.log(reverse2("Reverse this string, please!"))
console.log(reverse2("I really don't like reversing strings!"))