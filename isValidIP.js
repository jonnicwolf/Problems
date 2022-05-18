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

// function isValidIP (str){
//     const arrayOfOctetsAndDots = str.split('');
//     let octetStack = [];
//     let arrayOfOctets = [];
//     for (let i = 0; i < arrayOfOctetsAndDots.length; i++){                
//         if (arrayOfOctetsAndDots[i]!=='.') {            
//             octetStack.push(arrayOfOctetsAndDots[i]);  
//         }
//         else if (arrayOfOctetsAndDots[i]==='.') {
//             let octetPush = octetStack.join('');                        
//             if (
//                 octetPush<0 ||
//                 octetPush>255 ||                
//                 octetPush.includes()) {
//                     return false;
//             }
//             if (octetPush.length>1 && octetPush[0]==='0') {
//                 return false;
//             };                     
//             arrayOfOctets.push(octetPush);              
//             octetStack.length = 0;
//         };        
//         if (i === arrayOfOctetsAndDots.length-1) {            
//             let octetPush = octetStack.join('');            
//             if (
//                 octetPush<0 || 
//                 octetPush>255 ||                
//                 octetPush.includes(' ')) {
//                     return false;
//             }
//             if (octetPush<0 && octetPush>=255) {
//                 return false;
//             };
//             arrayOfOctets.push(octetPush)
//         };
//     };            
//     if (arrayOfOctets.length>4){
//         return false;
//     };    
//     return true;
// };

function isValidIP(str) {
    let dotCount = 0;
    let segment = [];
    let arrayOfSegments = [];
    for (let i=0; i<str.length; i++){
        let currentChar = str.charCodeAt(i)
        
        if (currentChar===46) {            
            dotCount++;            
            let completeSegment = segment.join('');                        
            console.log(Number(completeSegment))
            if (Number(completeSegment)<0 || Number(completeSegment)>255 || completeSegment===[]) {                
                return false
            };            
            if (completeSegment.length>1 && completeSegment[0]==0) return false;            
            arrayOfSegments.push(completeSegment);            
            segment.length = 0;
        }
        
        else if (currentChar>=48 && currentChar<=57 && currentChar!==46) {
            console.log(currentChar)
            segment.push(str[i])
        }    
        else return false;
        
        if (i===str.length-1) {            
            let completeSegmentAsNumber = Number(segment.join(''))
            console.log(segment)
            console.log(completeSegmentAsNumber)
            if (completeSegmentAsNumber<0 || completeSegmentAsNumber>255) return false;
            arrayOfSegments.push(completeSegmentAsNumber)
        };
    };
    console.log(dotCount, arrayOfSegments.length)
    return dotCount===3 && arrayOfSegments.length===4 ? true : false;
}
console.log(isValidIP('137.255.156.100')) //true
console.log(isValidIP('1.2.3.4')) //true
console.log(isValidIP('0.0.0.0')) //true
console.log(isValidIP('123.45.67.89')) //true
console.log(isValidIP('1.2.3.4.5')) //false
console.log(isValidIP('123.456.78.90')) //false
console.log(isValidIP('123.045.067.089')) //false
console.log(isValidIP(' 1.2.3.4')) //false
console.log(isValidIP('1e1.033.lsk.alsk')) //false
console.log(isValidIP('abc.def.ghi.jkl')) //false