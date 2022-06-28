/**
 * You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}
Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}
Rules
Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
If duplicate characters are found in the same array, the first occurance should be kept.
Example 1
*/

function removeDuplicateId (obj){        
    const arrayFromObj = Object.entries(obj)//make an array from keys and the values
    let test = arrayFromObj.flat(2)//turn the matrix into a single array     
    test.forEach(element=> {        
        let [last,first] = [test.lastIndexOf(element), test.indexOf(element)]//compare the first appearance of each against the last appearance of each. 
        //That way if the positions are the same then they must be the same position and therefore the only
        if (last !== first){test.splice(first,1)}//since we want the highest numbered key to hold the only appearance, delete the first ones            
    }) 

    test = test.join('')
    let result = {}//we need an dict to repopulate
    let keyStack = []
    
    for (let i=0; i<test.length; i++) {                                   
        let testCondition = (i) => test.charCodeAt(i)>46 && test.charCodeAt(i)<58//are we looking at a number? or something else? BOOL        
        if (testCondition(i)) {
            key = test[i]
            keyStack.push(key)            
            result[key] = []              
        }
        else {
                
        }    
    }
}
const example = {"1": ["C", "F", "G"],"2": ["A", "B", "C"],"3": ["A", "B", "D"]}
//output = {"1": ["F", "G"],"2": ["C"],"3": ["A", "B", "D"]}
const example2 = {"1": ["A"],"2": ["A"],"3": ["A"]} 
//output = {"1": [],"2": [],"3": ["A"],}
const example3= {"432": ["A", "A", "B", "D"],"53": ["L", "G", "B", "C"],"236": ["L", "A", "X", "G", "H", "X"],"11": ["P", "R", "S", "D"],}
//output = {"11": ["P", "R", "S"],"53": ["C"],"236": ["L", "X", "G", "H"],"432": ["A", "B", "D"]}  

console.log(removeDuplicateId(example))
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())
// console.log(removeDuplicateId())




