/**
 * There are two lists, possibly of different lengths. 
 * The first one consists of keys, the second one consists of values. 
 * Write a function createDict(keys, values) that returns a dictionary created from keys and values. 
 * If there are not enough values, the rest of keys should have a None (JS null)value. 
 * If there not enough keys, just ignore the rest of values.

Example 1:

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
Example 2:

keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
 */

function createDict (keys, values){
    const result = {};
    for (let i=0;i<keys.length;i++){
        if (keys[i]){
            if (values[i]===undefined){
                result[keys[i]] = null
            } else {
                result[keys[i]] = values[i]
            };
        };
    };
    return result;
}
const keys=[ 'a', 'b', 'c', 'd', 'e' ]
const values=[ 1, 2, 0, false, '' ]
console.log(createDict(keys,values))