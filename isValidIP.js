/**
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. 
IPs should be considered valid if they consist of four octets, 
with values between 0 and 255, inclusive.

Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
 */

function isValidIP (str){
    const arrayOfOctetsAndDots = str.split('');
    let octetStack = [];
    let arrayOfOctets = [];
    for (let i = 0; i < arrayOfOctetsAndDots.length; i++){        
        if (arrayOfOctetsAndDots[i]!=='.'){
            octetStack.push(arrayOfOctetsAndDots[i]);    
            if (Number(octetStack.join(''))>255 || Number(octetStack.join(''))<0) return false;
            if (octetStack.length===2 && octetStack[0]==='0') return false;
            if (arrayOfOctets.length>=3 && octetStack.length===3) arrayOfOctets.push(octetStack.join(''));
        }
        else if (arrayOfOctetsAndDots[i]==='.') {
            arrayOfOctets.push(octetStack.join(''));
            octetStack.length = 0;
        };        
    };    
    if (arrayOfOctets.length===4){
        return false;
    };    
    return true;
};
// console.log(isValidIP('0.0.0.0'))
// console.log(isValidIP('1.2.3.4'))
// console.log(isValidIP('123.45.67.89'))
// console.log(isValidIP('1.2.3.4.5'))
// console.log(isValidIP('123.456.78.90'))
// console.log(isValidIP('123.045.067.089'))

