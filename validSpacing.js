/**
 * Your task is to write a function called valid_spacing() or validSpacing() 
 * which checks if a string has valid spacing. 
 * The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, 
and no leading or trailing spaces. Below are some examples of what the function should return.
 */

function validSpacing(s){
    // //when the string is trimmed, is it the same as the og string?
    // const ends = s.trim() === s ? true : false;   console.log(ends)
    // //does s have extra strings in the middle?
    // console.log(s.split(' ').includes(' '))
    // if (ends) {return  s.split(' ').includes(' ') ? false : true}
    // else {return s.split(' ').includes(' ') ? false : true}

    //when the string is trimmed, is it the same as s?
    let result
    const is_extraSpace = s.split(' ').includes(' ')
    console.log(is_extraSpace)
    const ends = s.trim() === s 
        ? s.split(' ').includes(' ') 
            ? result = false
            : result = true
        : result = false;
    return result
    //therefore s.trim() is s
    //does s contain extra spaces after split?
    
};

// console.log(validSpacing('Hello world'))//    = true
// console.log(validSpacing(' Hello world '))//   = false
// console.log(validSpacing('Hello world  '))//  = false
console.log(validSpacing('Hello  world'))//   = false
// console.log(validSpacing('Hello'))//          = true
// console.log(validSpacing('Helloworld'))//     = true 
// console.log(validSpacing('Helloworld '))//    = false
// console.log(validSpacing(' '))/// = false
// console.log(validSpacing(''))//// = true
// console.log(validSpacing('ORG  X'))
// console.log(validSpacing('S   O h  f'))
// console.log(validSpacing('ONt  nWi'))//false