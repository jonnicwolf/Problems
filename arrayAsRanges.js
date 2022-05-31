/**
 * Your task is to take arrays of numbers and compress them into ranges.
 * The numbers in the array are mostly consecutive. 
    If you convert them as ranges, it will save a lot of space.
    You should write a function that will convert an array of numbers into a string.
    A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore,
        a range of one just by the number its self and multiple ranges separated by commas.


For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"*/

function toRange (arr){
    let numberStack = []
    let range = [];
    for (let i=0; i<arr.length; i++){                
        if (arr[i+1]-1===arr[i]){            
            numberStack.push(arr[i])                        
        }        
        else if (arr[i+1]-1!==arr[i] && arr[i-1]+1===arr[i]){
            numberStack.push(arr[i])
            if (i===arr.length-1){
                range.push(`${numberStack[0]}_${numberStack[numberStack.length-1]}`)
            }            
        }
        else {
            range.push(`${numberStack[0]}_${numberStack[numberStack.length-1]}`)            
            numberStack.length = 0
            range.push(`,${arr[i]}`)            
        }        
    }
    return range.join('')
}

function toArray(str){    
    let outlierSplit = str.split(',')
    let strArray = str.split('')
    let range = []
    let outliers = []
    let result = []
    for (let i=0;i<strArray.length;i++){
        if (strArray[i]==='_'){
            range.push(Number(strArray[i-1]),Number(strArray[i+1]))
        }        
    }
    for (let i=range[0]; i<=range[1];i++){
        result.push(i)
    }
    for (let i=0;i<outlierSplit.length;i++){
        if (!outlierSplit[i].includes('_')){
            result.push(Number(outlierSplit[i]))
        }     
    }
    return result    
}
console.log(toRange([1,2,3,4,5,6,9]))
console.log(toArray(toRange([1,2,3,4,5,6,9])))
console.log(toRange([1,2,3,4,5]))
console.log(toArray(toRange([1,2,3,4,5])))













