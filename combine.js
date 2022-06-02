/**
 * Your task is to write a function that takes two or more 
   objects and returns a new object which combines all the input objects.

All input object properties will have only numeric values.
 Objects are combined together so that the values of matching keys are added together.

An example:

const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
 */

//i need an array of all objs in arguments
 
function combine (objA, objB){       
    const combinedArr = [...arguments]
    const result = {}
    let test = {}
    for (let obj of combinedArr){
        
    }

}
const param1 = { a: 10, b: 20, c: 30 }
const param2= { a: 3, c: 6, d: 3 }
const param3 = {a:7,b:10,f:5}

console.log(combine(param1,param2,param3))
