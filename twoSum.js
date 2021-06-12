// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// const twoSum = (nums, target) => {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log(nums[i], nums[j]);
//         arr.push(nums[i], nums[j]);
//       }
//     }
//   }
//   console.log(arr)
//   const result = Array.from(new Set(arr))
//   console.log(result)
//   let filter;
//   let [i,j] = [0,0]
//   while (i < result.length) {
//     filter = result.splice(i, j + 1);
//     i++
//     j++
//   }
//   return filter;
// };
// //input: [1,2,3] 5
// //output: [2,3]

// console.log(twoSum([1, 2, 3,4,5], 5));


const twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp[nums[i] ]>=0){
          return [ comp[nums[i] ] , i]
      }
      comp[target-nums[i]] = i
  }
};
twoSum([3, 6], 9)
const check = (undefined < 0)
console.log()