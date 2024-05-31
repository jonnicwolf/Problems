/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  // for (let i=0; i<nums.length; i++) {
  //   if (nums[i] === 0) {
  //       nums.splice(i, 1)
  //       nums[nums.length] = 0
  //   }
  // }

  // return nums

  let notZero = 0
  for (let i=0; i<nums.length; i++) {
    if (nums[i] !== 0) {
      nums[notZero++] = nums[i]
    }
  }
  for (let i=notZero; i<nums.length; i++) {
    nums[i] = 0
  }
  return nums
};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0,1,0]))
console.log(moveZeroes([0]))
