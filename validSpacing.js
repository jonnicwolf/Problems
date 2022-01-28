/**
 * Your task is to write a function called valid_spacing() or validSpacing() 
 * which checks if a string has valid spacing. 
 * The function should return either True or False.

For this kata, the definition of valid spacing is one space between words, 
and no leading or trailing spaces. Below are some examples of what the function should return.
 */

function validSpacing(s){
    const s_Array_Words = s.split(' ');
    let result;  
    console.log(result)
    for (let i=0, len=s_Array_Words.length-1; i < len; i++){
        console.log(result)        
        console.log(s_Array_Words[0])
        
        if (s_Array_Words[0] === ' '){
            result = false;
        }
        else result=true;
        console.log(s_Array_Words[len-1])
        if (s_Array_Words[len-1] === ' '){
            console.log(result)
            result = false;
        }
        console.log(result)
        
    }
    console.log(result)
    return result;
}

// console.log(validSpacing('Hello world'))//    = true
// console.log(validSpacing(' Hello world '))//   = false
console.log(validSpacing('Hello world  '))//  = false
// console.log(validSpacing('Hello  world'))//   = false
// console.log(validSpacing('Hello'))//          = true
// console.log(validSpacing('Helloworld'))//     = true 
// console.log(validSpacing('Helloworld '))//    = false
// console.log(validSpacing(' '))/// = false
// console.log(validSpacing(''))//// = true