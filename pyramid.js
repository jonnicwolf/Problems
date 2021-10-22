/*
Problem
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/
//push into container one more array with one more 1
//0 --> []
//1 --> [[1]] <-- container.push()

const pyramid = (n)=>{
    const container = [];
    let arrayOf1s = []
    let i = 0
    do {
        if (i === 0){ null }
            else {
            arrayOf1s = [...arrayOf1s,1]
            container.push(arrayOf1s) }            
        i++
    } while (i <= n);
    return container
};
console.log(pyramid(12))

//damn this one took forever