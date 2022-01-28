/**
 * You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) 
 * and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

INPUT: STRING
OUTPUT: STRING
 */

function twoSort(s){
    const sortedForFirst_thenSplit = s.sort()[0].split('')
    const result =[]
    for (let i = 0, len = sortedForFirst_thenSplit.length; i < len; i++){
        
        if (i === len-1){
            result.push(sortedForFirst_thenSplit[i])
        } else result.push(sortedForFirst_thenSplit[i]+'***')
    }
    
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]))