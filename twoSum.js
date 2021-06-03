// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

const twoSum = (nums, target) => {
  const neuArr = [];
  const resultNums = nums.map((x) => {
    for (let i = 0; i < nums.length - 1; i++) {
      if (x + nums[i] === target) {
        neuArr.push([x, nums[i]]);
        console.log(neuArr);
      }
      // (x + nums[i] === target) ? neuArr.push(x, nums[i]) : null;
    }
  });
  index = 0;
//   newObj = {}
  while (index < neuArr.length) {
    // newObj = neuArr[index]
    // console.log(newObj)
    
    index++
    
      
  }
  return neuArr
};
//input: [1,2,3] 5
//output: [2,3]

console.log(twoSum([1, 2, 3, 4, 5], 5));
