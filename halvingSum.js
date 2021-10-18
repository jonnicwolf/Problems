const halvingSum = (n) => {
    return n <= 0
        ? 0 
        : Math.floor(n + halvingSum(n/2))
}
console.log(halvingSum(1))