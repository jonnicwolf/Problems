/**
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function(nums) {
//   const counter = {}
//   for (num of nums) counter[num] ? counter[num]++ : counter[num] = 1
//   const sorted_vals = Object.entries(counter).sort((a,b) => Object.values(a) - Object.values(b))
//   return sorted_vals[0][0]
// };
function majorityElement(nums){
  let suspect
  let count = 0

  for (let num of nums) {
    if (count === 0) suspect = num
    count += (num === suspect) ? 1 : -1
  }

  return suspect
};

console.log(majorityElement([3,2,3]))
console.log(majorityElement([2,2,1,1,1,2,2]))