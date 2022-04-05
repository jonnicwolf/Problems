/*
Write a function that takes a string as input
and returns true if the string is a palindrome,
false otherwise.

Examples:
isPalindrome("abba"); // true
isPalindrome("abbc"); // false
isPalindrome("c"); // true
isPalindrome(""); // false
isPalindrome("abBA"); // true
isPalindrome("Madam, I'm Adam"); // true

The ideal solution will do this in O(n) time, examining each character no more than once.
The ideal solution will also use O(1) space (not including the input string)
*/

//make a case for empty string return auto false. Y
//consider the case. We can lowercase the whole input Y
//on space: we can split input and rejoin into a single spaceless string
//filter elements less than 97 and those more than 122
//input: string
//return : boolean

// function isPalindrome (line){
//     // if (line === '') {
//     //     return false;
//     // }
//     // else if (typeof line !== 'string'){
//     //     const compare = [];        
//     //     for (let i = String(line).length-1; i >= 0; i--){
//     //         compare.push(String(line)[i]);
//     //     }
//     //     return line === Number(compare.join(''));        
//     // }
//     // else {        
//     //     let [neuString,compare] = [Array.from(line.toLowerCase()), []]
//     //     for (let i = neuString.length-1; i >= 0;i--) {                        
//     //         neuString[i].charCodeAt(0) >= 97 && neuString[i].charCodeAt(0) <= 122
//     //             ? compare.push(neuString[i])
//     //             : neuString.splice(i,1);
//     //     };          
//     //     return String(neuString) === String(compare);
//     // };


// };

function isPalindrome (string) {
    if (string === ''){
        return false
    }
    else if (typeof string !== 'string') {
        return string == Array.from(String(string)).reverse().join('')
    }
    else 
        return string
                .toLowerCase()
                .split('')
                .reverse()
                .filter(elem=> elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122)
                .join('')
                ===
               string
                .toLowerCase()
                .split('')
                .filter(elem=> elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122)
                .join('');
};


console.log(isPalindrome("abba")); // true
console.log(isPalindrome("abbc")); // false
console.log(isPalindrome("c")); // true
console.log(isPalindrome("")); // false
console.log(isPalindrome("abBA")); // true
console.log(isPalindrome("Madam, I'm Adam")); // true
console.log(isPalindrome(51615))