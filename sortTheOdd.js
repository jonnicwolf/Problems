/**
 *You will be given an array of numbers. 
 *You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 */


function sortArray (array){
    let indices = []
    array.filter((v, i) => v % 2 && indices.push(i))//filter out odds and push to indices
        .sort((a, b) => a - b)//sort them in ascending
        .forEach((v, i) => array[indices[i]] = v)//to each one assign the array @ 
        
    return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])) //[1,3,2,5,8,4]

