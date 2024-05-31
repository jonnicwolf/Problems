/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const counter = {}
  for (let i=0; i<nums.length; i++) {
    counter[nums[i]]
    ? counter[nums[i]]++
    : counter[nums[i]] = 1
  }
  for (let key in counter) if (counter[key] === 1) return key
};

console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([2,2,1]))
console.log(singleNumber([1]))