/**
 * Your task is to take arrays of numbers and compress them into ranges.
 * The numbers in the array are mostly consecutive. 
    If you convert them as ranges, it will save a lot of space.
    You should write a function that will convert an array of numbers into a string.
    A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore,
        a range of one just by the number its self and multiple ranges separated by commas.


For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
 */

function toRange(arr){
    return `${arr[0]}_${arr[arr.length-1]}`
};

console.log(toRange([1,2,3,4,5]))

