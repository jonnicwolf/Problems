//Return true if the given non-negative number is a multiple of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)

// const or35 = (num) => {
//   if (num % 3 === 0 || num % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

const or35 = (num) => {
    return num % 3 === 0 || num % 5 === 0 ? true : false
}
console.log(or35(13));
