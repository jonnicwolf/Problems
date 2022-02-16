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
    //sort first ✅
    let neuArr = arr.sort((a,b)=> a-b) ;    
    let result;
    for (let i = 0; i < neuArr.length-1; i++){                
        if (neuArr[i+1]-neuArr[i]===1) result = `${neuArr[0]}_${neuArr[neuArr.length-1]}`
        else result = `${neuArr[0]}_${neuArr[i]},${neuArr[neuArr.length-1]}`
    }
    return result;
};


function toArray(str){
    let rest;
    if (str.includes(',')) {
        rest = Array.from(str).pop()
        str.length-=2
        for (let i = 0; i < str.length-1; i++){
            if (str[i]+1!==str[str.length-1]){
                console.log(typeof str)
                Array.from(str).splice(str[i+1],0,str[i]+1)
                console.log(str)
            }
        }
    }
}

console.log(toRange([1,2,3,4,5,6,9]))
console.log(toArray(toRange([1,2,3,4,5,6,9])))













