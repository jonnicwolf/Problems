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
        if (arrayOfOctetsAndDots[i]!=='.') {            
            octetStack.push(arrayOfOctetsAndDots[i]);  
        }
        else if (arrayOfOctetsAndDots[i]==='.') {
            let octetPush = octetStack.join('');            
            console.log(octetPush)
            if (
                octetPush<0 
                || octetPush>255                 
                || octetPush.includes(' ')) {
                    return false;
            }
            if (octetPush.length>1 && octetPush[0]==='0') {
                return false;
            };                     
            arrayOfOctets.push(octetPush);              
            octetStack.length = 0;
        };        
        if (i === arrayOfOctetsAndDots.length-1) {            
            let octetPush = octetStack.join('');            
            if (
                octetPush<0 || 
                octetPush>255 ||
                
                octetPush.includes(' ')) {
                    return false;
            }
            if (octetPush<0 && octetPush>=255) {
                return false;
            };
            arrayOfOctets.push(octetPush)
        };
    };            
    if (arrayOfOctets.length>4){
        return false;
    };    
    return true;
};
console.log(isValidIP('137.255.156.100')) // true
console.log(isValidIP('0.0.0.0')) //true
console.log(isValidIP('123.45.67.89')) //true
console.log(isValidIP('1.2.3.4.5')) //false
console.log(isValidIP('123.456.78.90')) //false
console.log(isValidIP('123.045.067.089')) //false
console.log(isValidIP(' 1.2.3.4'))//false
console.log(isValidIP('1e1.033.lsk.alsk'))

function numberCheck (str) {
    return Number.isNaN(str)
}

console.log(numberCheck("NaN"))