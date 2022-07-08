// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum (nums, target){
  const indexes = {}
  for (let i=0; i<nums.length; i++){    
    if (indexes[target-nums[i]]!==undefined){
      return [indexes[target-nums[i]],i]
    }
    indexes[nums[i]] = i
  }
}
console.log(twoSum([2,7,11,15],9));



