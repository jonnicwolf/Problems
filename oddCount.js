/**
 * Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!*/

function oddCount (n) {
    //divide n in half    
    //if it has a remainder it is odd     
        //therefore we round down
    //if even
        //do: quotient-1
    return n%2>0 ? Math.floor(n/2) : (n/2)-1
}

console.log(oddCount(7))
console.log(oddCount(8))
console.log(oddCount(15))
console.log(oddCount(1981273947))