/**Given an array of integers, return a new array with each value doubled.
 * For example:
 * [1, 2, 3] --> [2, 4, 6]
 * */

function maps(x){
    let result = [];
    for (let element of x){
        result.push(element*2)
    };
    return result;
}

const test = [1,2,3,4,5]
console.log(maps(test))