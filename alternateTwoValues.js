/**
 * Given an integer n and two other values, build an array of size n filled with these two values alternating.

    Examples
    5, true, false     -->  [true, false, true, false, true]
    10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    0, "one", "two"    -->  []
    Good luck!*/

function alternate (n, firstValue, secondValue) {
    const result = []
    for (let i=0; i<n; i++){
        i%2===0 ? result.push(firstValue) : result.push(secondValue)
    }
    return result;
}

console.log(alternate(5, true, false))
console.log(alternate(10, 'blue', 'red'))
console.log(alternate(0, 'one', 'two'))
