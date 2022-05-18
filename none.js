/**
 * Create a method none? (JS none) that accepts an array and a block 
 * (JS: a function), and returns true if the block (/function) returns true 
 * for none of the items in the array. An empty list should return true. */

function none (arr,fun){
    for (let element of arr){
        if (fun(element)) return false;
        else continue;
    }    
    return true;
};

const test = [1,2,3,4,5]


console.log(none(test,(element)=>element>5))