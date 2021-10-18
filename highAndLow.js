/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
//numbers is a string
//return a string
//split to arr
//convert each string to num using map
//sort by size
//return first index and last index in a string
// const highAndLow = (numbers)=> {        
//     const arr = numbers.split(' ').map(Number).sort((a,b)=>a-b)
//     return `${arr[arr.length-1]} ${arr[0]}`
// }

function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return `${Math.max.apply(0, numbers)} ${Math.min.apply(0, numbers)}`;
  }

// console.log(highAndLow("1 2 3 4 5") )
// console.log(highAndLow("1 2 -3 4 5"))
// console.log(highAndLow("1 9 3 4 -5"))
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))