/**
 * Given a sequenceClone of integers as an array, determine whether it is possible to obtain a strictly increasing sequenceClone by removing no more than one element from the array.

Note: sequenceClone a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. sequenceClone containing only one element is also considered to be strictly increasing.

Example

For sequenceClone = [1, 3, 2, 1], the output should be
solution(sequenceClone) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequenceClone.

For sequenceClone = [1, 3, 2], the output should be
solution(sequenceClone) = true.

You can remove 3 from the array to get the strictly increasing sequenceClone [1, 2].
 Alternately, you can remove 2 to get the strictly increasing sequenceClone [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequenceClone

Guaranteed constraints:
2 ≤ sequenceClone.length ≤ 105,
-105 ≤ sequenceClone[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequenceClone, otherwise return false.
 */

function almostIncreasingsequenceClone (sequence){    
    let sequenceClone = sequence;
    let count = 0;    
    for (let i=0; i<sequenceClone.length-1; i++) {         
        if (sequenceClone[0] > sequenceClone[1]){
            count++;
            sequenceClone.splice(i,1);
            i--;
        }        
        else if (sequenceClone[i] >= sequenceClone[i+1]) {     
            console.log(count)                               
            if (count > 1){
                return false;
            }
            sequenceClone.splice(i,1);            
            count++;
            i--;
        }
        // else if (sequenceClone[i+1] <= sequenceClone[i]){            
        //     if (count > 1){
        //         return false;
        //     }
        //     sequenceClone.splice(i,1);            
        //     count++;
        //     i--;
        // }
    };              
    count  
    return count === 1 ? true : false;
}

console.log(almostIncreasingsequenceClone([1,3,2,1])===false)
console.log(almostIncreasingsequenceClone([1,3,2])===true)
console.log(almostIncreasingsequenceClone([1, 2, 1, 2]))
console.log(almostIncreasingsequenceClone([3, 6, 5, 8, 10, 20, 15])===false)
console.log(almostIncreasingsequenceClone([10, 1, 2, 3, 4, 5])===true)
console.log(almostIncreasingsequenceClone([1, 1, 1, 2, 3])===false)
console.log(almostIncreasingsequenceClone([1, 2, 5, 3, 5])===true)
console.log(almostIncreasingsequenceClone([1, 2, 3, 4, 99, 5, 6])===true)


