/**
 * A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end 
integer in the range by a dash, '-'. 
The range includes all integers in the interval including both endpoints. 
It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and 
returns a correctly formatted string in the range format.*/

const { RestoreOutlined } = require("@material-ui/icons");

// function rangeExtraction(list){
//     //loop over the array
//     //
//     //if i === [i + 1]-1 currentRange.push(i) else result.concat(`, ${currentRange[0]}-${currentRange[currentRange.length-1]}`)
//     let currentRange = []
//     let test = []    
//     let result = []
//     for(let i=0;i<list.length-1;i++){
//         // if (list[i]===1) {continue}
//         if (list[i]+1===list[i+1]){//if current is equal to 
//             console.log(list[i])
//            test.push(true)
//            currentRange.push(list[i])
//         }
//         else {
//             if (currentRange[currentRange.length-1] <= list[i+1]-1){
//                 console.log(list[i+1])
//                 console.log(currentRange)
//                 result.push(`${currentRange[0]}-${currentRange[currentRange.length-1]}`)
//                 currentRange.length = 0
//             } else{
//                 test.push(false)
//                 result.push(list[i])

//             }
//         }
//     }
//     console.log(currentRange)
//     console.log(test)
//     return result    
// }

// console.log(rangeExtraction([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))


//input: arr
//output: string

//->[] -> ''
//-> [1] -> '1'
//-> [-1] -> '-1'
//->[0,1] -> '0,1'
//->[0,1,2] -> '0-2'
//-> [-3,-2,-1] -> '-3--1'
//[0,1,2,5,6,7] -> 


function rangeExtraction (arr){
    let result = ''
    if (arr.length===0){
        return ''
    } 
    else if (arr.length<3){
        return arr.join(',')
    }
    for (let i=1, j=0; i < arr.length; i++){
        //check if at least 3 numbers are consecutive
        if (arr[i]===arr[j]+1){
            continue;
        }
        else {
            if ((i-j)>1){
                result+=`${arr[j]}-${arr[i]}`
            }
            else {
                result+=`${arr[j]},`
                j=i
            }
        }
    }
    return result
}
console.log(rangeExtraction([])==='')
console.log(rangeExtraction([1])==='1')
console.log(rangeExtraction([-1])==='-1')
console.log(rangeExtraction([0,1])==='0,1')
console.log(rangeExtraction([0,1,2])==='0-2')
console.log(rangeExtraction([-3,-2,-1])==='-3--1')
// console.log(rangeExtraction([]))



