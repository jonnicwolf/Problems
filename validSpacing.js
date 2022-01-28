/**
 * Your task is to write a function called valid_spacing() or validSpacing() 
 * which checks if a string has valid spacing. 
 * The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, 
and no leading or trailing spaces. Below are some examples of what the function should return.
 */

function validSpacing(s){
    const ends = s.trim() === s ? true : false;    
    if (!ends){ return s.split(' '.includes(' ')) ? false: true}
    else return ends;
};

console.log(validSpacing('Hello world'))//    = true
console.log(validSpacing(' Hello world '))//   = false
console.log(validSpacing('Hello world  '))//  = false
console.log(validSpacing('Hello  world'))//   = false
console.log(validSpacing('Hello'))//          = true
console.log(validSpacing('Helloworld'))//     = true 
console.log(validSpacing('Helloworld '))//    = false
console.log(validSpacing(' '))/// = false
console.log(validSpacing(''))//// = true