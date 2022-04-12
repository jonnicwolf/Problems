/**
 In a certain kingdom, strange mathematics is taught at school. 
 Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, 
    but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). 
 In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.

So, for example, if n = 11, then the numbers in strange mathematics are ordered as follows:

1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9.

Help your students to learn this science: write a function that receives two integer numbers:
     n (total amount of numbers in strange mathematics) and k (number from sequence) 
     and returns the location of a given number k in the order defined in strange mathematics.

For example, if n = 11 and k = 2, the function should return 4 as the answer.

Input: 1 <= n <= 100 000 , 1 <= k <= n.

Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.

Examples:
strangeMath(11, 2) === 4
strangeMath(15, 5) === 11
strangeMath(15, 15) === 7
 */

// function strangeMath (n,k){
//    let result = [];
//    for (i = 1;i <= n;i++) {      
//       result.push(String(i));  
//    }
//    result = 
//    result      
//       .map(num=>{
//          return num.length < result[result.length-1].length
//             ? `${num}0`
//             : `${num}0`;
//       })
//       .sort((a,b)=>a[0]-b[0])
//       .map(num=>{
//          num = num.split('')   
//          return num.join('')
//       })
//    for(let i = 0;i<result.length;i++){
//       result[i] = result[i].split('')
//       result[i].length--
//       result[i] = result[i].join('')
//    }
//    // console.log(result)
//    return result.indexOf(String(k))+1;
// }


// function strangeMath(n,k){
//    let result = [];
//    for (let i = 1;i<=n;i++){
//       result.push(String(i).split('').map((num,i)=>num.charCodeAt(0)))
//    }
//    console.log(result.sort().map(num=>String.fromCharCode(num)))
// }

function strangeMath(n,k){
   let stringsOfNums = [];
   for (let i=1;i<=n;i++){
      stringsOfNums.push(String(i))
   }   
   stringsOfNums.sort()
   return stringsOfNums.indexOf(String(k))
}

console.log(strangeMath(11, 2));
console.log(strangeMath(15, 5));
console.log(strangeMath(15, 15));
console.log(strangeMath(39298, 20735));