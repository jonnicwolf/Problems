/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const counter = {}
  for (let i=0; i<=nums.length; i++) {
      let counter_check = counter[i]
      if (counter_check) counter[i]++
      else counter[i] = 1
      
  }

  nums.forEach((num, i) => { if (counter[num] > 2) nums.splice(i,1)})
  console.log(nums)
  return nums

};

console.log(removeDuplicates([1,1,1,2,2,3]))
console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))