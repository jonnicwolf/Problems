// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// const twoSum = (nums, target) => {
//   const arr = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         arr.push(nums[i], nums[j]);
//       }
//     }
//   }
//   const result = Array.from(new Set(arr))

//   let filter;
//   let [i,j] = [0,0]
//   while (i < result.length) {
//     filter = result.splice(i, j + 1);
//     i++
//     j++
//   }
//   return filter;
// };
//input: [1,2,3] 5
//output: [2,3]

// console.log(twoSum([1, 2, 3,4,5], 5));

// const twoSum = function(nums, target) {
//   const comp = {};
//   for(let i=0; i<nums.length; i++){
//       if(comp[nums[i] ]>=0){
//           return [ comp[nums[i] ] , i]
//       }
//     comp[target - nums[i]] = i
//   }
// };
// twoSum([3, 6], 9)

//given an array of int return two indices such that they add up to target
const twoSum = (nums, target) => {
  let output = []
  for (let i = 0; i < nums.length; i++){
    for (let j = 0; j < nums.length; j++){
      console.log(nums[j], nums[i])
      
      nums[j] + nums[i] === target
        ? output.push([nums[i], nums[j]])
        : null
    }
    console.log(output)
  }
  return output
};

const thru10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(twoSum(thru10, 12));
