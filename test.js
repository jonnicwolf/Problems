// // INPUT/OUTPUT
// //icyHot(120, -1) → true
// // icyHot(-1, 120) → true
// // icyHot(2, 120) → false

// //Problem -> Given two temperatures, return true if one is less than 0 and the other is greater than 100.
// //Return -> Boolean

// //less than? comparision <- conditional
// //actually two comparisions
// //I need to find out if 1/2 is less than 0 : meaning that number must be negative
// // '' '' '' 2/2 is MORE than 100 : meaning 100+

// const icyHot = (temp1, temp2) => {
// //   if (temp1 > 100 || temp1 < 0) {
// //     if (temp2 > 100 || temp2 < 0) {
// //       return true;
// //     }
// //   } else if (temp1 === 100 || temp1 === 0) {
// //     if (temp2 === 100 || temp2 === 0) {
// //       return false;
// //     }
// //     return false;
// //   } else {
// //     return false;
// //   }
//     // switch (temp1, temp2) {
//     //     case temp1 > 100 && temp2 < 0:
//     //         return true
//     //     default:
//     //         return false
//     // }
//     if (temp1 > 100 || temp2 > 100) {
//         if (temp1 < 0 || temp2 < 0) {
//             return true
//         }
//     }
//     else if (temp1 < 0 || temp2 < 0) {
//         if (temp1 > 100 || temp2 > 100) {
//             return true
//         }
//     }
    
// };
// console.log(icyHot(-1, 100));



// [ '******' ]
// [ '******', '|', '    ', '|' ]
// [ '******', '|', '    ', '|', '|', '    ', '|' ]
// [
//   '******', '|','    ',   '|','|',      '    ','|',      '|','    ',   '|']
// [
//   '******', '|', '    ',
//   '|',      '|', '    ',
//   '|',      '|', '    ',
//   '|',      '|', '    ',
//   '|'
// ]

function firstNonRepeated(s){
  //store the count in an object with letter keys ✅
  let counter = {}
  
  //count the letters ✅
  for (let i = 0; i < s.length; i++){
    
    //if the current letter of s exists as a key in counter
    //increase it by 1
    if (counter[s[i]]) {
      counter[s[i]] += 1
    } 
    //if the current letter of s does NOT exist in counter
    //make s[i] a key of counter *counter[s[i]]* equal to 1
    else (counter[s[i]] = 1)    
  } 
  let newArr = Object.entries(counter)
  
  //sort ✅
  newArr.sort((a,b) => a[1] - b[1])  
  
  //identify the letter/value with the count of 1 ✅
  if (newArr[0][1] > 1) return null
  else return newArr[0][0]
}

console.log(firstNonRepeated('test'))
console.log(firstNonRepeated('kat'))
console.log(firstNonRepeated('mississippi'))
console.log(firstNonRepeated('aabbcc'))


const alexis = {
  eyes : 'green',
  height: 62,
  catchphrase: 'boc boc'
}

console.log(alexis.toebeans)