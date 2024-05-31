// //Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. 
// //The relative order of the elements may be changed.

// // const removeElement = (nums, val) => {
// //     const noDupes = Array.from(new Set(nums))
// //     const arr = []
// //     for (let i = 0, len = noDupes.length; i < len; i++) {
// //         noDupes[i] === val
// //             ? noDupes.splice(i,1)
// //             : null
// //     }
// //     return noDupes
// // }
// const removeElement = (nums,val) => {
//     for (num of nums) {
//         num === val
//             ? nums.splice(num-1,1)
//             : null
//     }
//     return nums
// }

// arr1 = [1, 2, 3, 4, 5, 5, 5, 6, 7]
// console.log(removeElement(arr1,5))

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    while (true) {
        let val_index = nums.indexOf(val)
        if (val_index === -1) break
        else nums.splice(val_index,1)
    }
    return nums
};

console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2],2))