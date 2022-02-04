/*
 A magic index in an array A[1...n-1] is defined to be an index such that A[i] = i. Given a sorted array of distinct integers, write a method to find a magic index,
   if one exists, in array A.

   **translation from this^ bullshit

   Find the element in a given array where the value of the element is also its index 
   in the array. The given array is always sorted.

   return said value if it exists
   else return -1
findMagic([-20,-10,2,10,20]); // Returns 2
 */

function findMagic(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i]===i){
            return arr[i];
        };
    };
    return -1;
};

console.log(findMagic([-20,-10,2,10,20]))
console.log(findMagic([6, 5, 83, 5, 3, 18]))


