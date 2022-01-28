/**
 * Your task is to write a function called valid_spacing() or validSpacing() 
 * which checks if a string has valid spacing. 
 * The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, 
and no leading or trailing spaces. Below are some examples of what the function should return.
 */

function validSpacing(s){
    const endSpaces_exist = s.trim() === s ? false : true; console.log(endSpaces_exist)
    const extraSpacesInside_exist = s.split(' ').includes(''); console.log(extraSpacesInside_exist)
    
    //do spaces exist on either end?
    if (endSpaces_exist === false){
        if (extraSpacesInside_exist === false){
            return true;
        } 
        else if (s === '') return true
        else return false;
    } else return false;
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
console.log(validSpacing('ORG  X'))
console.log(validSpacing('S   O h  f'))
console.log(validSpacing('ONt  nWi'))//false