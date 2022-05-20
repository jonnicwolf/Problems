/**Implement a function that normalizes out of range sequence indexes (converts them to 'in range' indexes) 
 * by making them repeatedly 'loop' around the array. The function should then return the value at that index. 
 * Indexes that are not out of range should be handled normally and indexes to empty sequences should return undefined/None 
 * depending on the language. */

function normIndex (arr,index) {
    if (index<0) {
        for (let i=index; i>0; i--){
            if (i===0) i=index;    
            if (i===index) return arr[index];
        }
    }
    else{
        for (let i=0; i<index; i++){
            console.log(i)
            if (i===arr.length) i=0;
            if (i===index) return arr[index];
        }
    }    
}
var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(normIndex(array, Math.round(Math.random() * 40 + 10)));
// console.log(normIndex(array, Math.round(Math.random() * -40 - 10)));
const test = [1,2,3,4,5]
console.log(normIndex(array,1))
