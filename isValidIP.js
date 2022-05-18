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

// function isValidIP(str) {    
//     if (str[0]==='.' || str[str.length-1]==='.') return false; 
//     let [dotCount, segment, arrayOfSegments] = [0, [], []];    
//     for (let i=0; i<str.length; i++){
//         let currentChar = str.charCodeAt(i);
//         if(str[i]==='.' && str[i+1]==='.') return false;         
//         if (currentChar===46) {              
//             dotCount++;            
//             let completeSegment = segment.join('');               
//             if (Number(completeSegment)<0 || Number(completeSegment)>255 || completeSegment===[]) return false;            
//             if (completeSegment.length>1 && completeSegment[0]==0) return false;            
//             arrayOfSegments.push(completeSegment);           
//             segment.length = 0;
//         }
//         else if (currentChar>=48 && currentChar<=57 && currentChar!==46) segment.push(str[i])            
//         else return false;        
//         if (i===str.length-1) {            
//             let completeSegmentAsNumber = Number(segment.join(''));
//             if (completeSegmentAsNumber<0 || completeSegmentAsNumber>255 || (segment.length>1 && segment[0]==='0')) return false;
//             arrayOfSegments.push(completeSegmentAsNumber);
//         };
//     };    
//     return (dotCount===3 && arrayOfSegments.length===4) ? true : false;
// };

function isValidIP (str){
    const octets = str.split('.');
    return octets.length===4 && octets.every(octet=> Number(octet)<256 && String(Number(octet))===octet);
};
// console.log(isValidIP('49.189..211')) //false
// console.log(isValidIP('245..7.47')) //false
// console.log(isValidIP('105..129.134')) //false
// console.log(isValidIP('.217.29.97')) //false
// console.log(isValidIP('.141.70.33')) //false
// console.log(isValidIP('50.88.33.')) //false
// console.log(isValidIP('62.106.74.')) //false
// console.log(isValidIP('137.255.156.100')) //true
// console.log(isValidIP('1.2.3.4')) //true
// console.log(isValidIP('0.0.0.0')) //true
// console.log(isValidIP('123.45.67.89')) //true
// console.log(isValidIP('1.2.3.4.5')) //false
// console.log(isValidIP('123.456.78.90')) //false
// console.log(isValidIP('123.045.067.089')) //false
// console.log(isValidIP(' 1.2.3.4')) //false
// console.log(isValidIP('1e1.033.lsk.alsk')) //false
// console.log(isValidIP('abc.def.ghi.jkl')) //false
// console.log(isValidIP('84.33.50.052')) //false