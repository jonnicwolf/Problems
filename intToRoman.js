//Given an integer, convert it to a roman numeral.

const intToRoman = (num) => {
    const [I, V, X, D, C, M] = [1, 5, 10, 50, 100, 1000]
    const numerals = [I, V, X, D, C, M]
    const results = []
    for (let i = 0; i < numerals.length; i++) {
        let checker = num % numerals[i] > 0
        if (checker) {
                results.push(checker % numerals[i])
            }
    }
   return results
}
console.log(intToRoman(100))


    
    
 


console.log(intToRoman())