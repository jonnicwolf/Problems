/**
 * Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'*/

function expandedForm (num){
    //count the length of the number
    //remove 1 from that number
    //add the count in zeros to the digit in num we are looking at and add to the result string
    let paramToString = num+''    
    let result = []
    for (let i=0, j=paramToString.length-1; i<paramToString.length; i++,j--){
        if (paramToString[i]==0) continue
        else result.push(`${paramToString[i]}${'0'.repeat(j)}`)
    }
    return result.join(' + ')
}

console.log(expandedForm(12)); // Should return '10 + 2'
console.log(expandedForm(42)); // Should return '40 + 2'
console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'*/