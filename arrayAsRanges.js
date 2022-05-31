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
    let neuArr = arr.sort((a,b)=> a-b) ;    
    let result;
    for (let i = 0; i < neuArr.length-1; i++){                
        if (neuArr[i+1]-neuArr[i]===1) result = `${neuArr[0]}_${neuArr[neuArr.length-1]}`
        else result = `${neuArr[0]}_${neuArr[i]},${neuArr[neuArr.length-1]}`
    }
    return result;
};


// function toArray(str){
//     // convert str to an array ✅
//     // figure out if its a pure range or not ✅
//     // separate the extra num if impure ✅
//     // then fill in the nums between the underscore ✅
//     // then add extra number at the end of new array ✅

//     let range = str.split('') ;
//     if (range.includes(',')){
//         let extraNum = [] ;
//         extraNum.push(range[range.length-1]);
//         range.length-=2;
//         for (let i = 0; i < range.length; i++){
//             if (range[i]==="_") range.splice(i,1)                    
//         };
//         range = range.map(val=>Number(val));
//         let result = [];
//         for (let i = range[0]; i <= range[range.length-1]; i++){            
//             result.push(i);
//         };
//         return [...result,Number(extraNum)];
//     } else {
//         let result = [];
//         for (let i = 0; i < range.length; i++){
//             if (range[i]==='_') range.splice(i,1);
//         };
//         range = range.map(val=> Number(val));
//         for (let i = range[0]; i <= range[range.length-1]; i++){
//             result.push(i);
//         };
//         return result;
//     };
// };

function toRange (arr){
    let numberStack = []
    let range = [];
    for (let i=0; i<arr.length; i++){                
        if (arr[i+1]-1===arr[i]){            
            numberStack.push(arr[i])            
        }        
        else if (arr[i+1]-1!==arr[i] && arr[i-1]+1===arr[i]){
            numberStack.push(arr[i])
        }
        else {
            range.push(`${numberStack[0]}_${numberStack[numberStack.length-1]}`)            
            numberStack.length = 0
            range.push(`,${arr[i]}`)            
        }        
    }
    return range.join('')
}

// function toArray(str){

// }
console.log(toRange([1,2,3,4,5,6,9]))
// console.log(toArray(toRange([1,2,3,4,5,6,9])))
// console.log(toRange([1,2,3,4,5]))
// console.log(toArray(toRange([1,2,3,4,5])))













