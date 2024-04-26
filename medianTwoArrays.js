/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const combined_sorted = nums1.concat(nums2).sort((a,b) => a - b);

  if (combined_sorted.length % 2 === 0) {
    const first_half = combined_sorted.length/2-1;
    const second_half = combined_sorted.length/2;
    let sum = combined_sorted[first_half] + combined_sorted[second_half];
    return sum / 2;
  }

  return combined_sorted[Math.floor(combined_sorted.length/2)];
};

// console.log(findMedianSortedArrays([1,3],[2]))
// console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([3],[-2,-1]))
