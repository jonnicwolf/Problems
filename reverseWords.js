/**
 * Complete the solution so that it reverses all of the words within the str passed in.
 */

function reverseWords(str){
    const strToArray = str.split(' ')
    let resultOfReversal = [];
    for (let i = strToArray.length-1; i >= 0; i--){
        resultOfReversal.push(strToArray[i])
    }
    return resultOfReversal.join(' ')
}

console.log(reverseWords("The greatest victory is that which requires no battle"))