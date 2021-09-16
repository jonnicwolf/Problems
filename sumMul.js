//find the sum of all multiples of n below m
const sumMul = (n, m) => {
    //loop ✅
    //if n < m multiply by i ✅
    //push each result to a global var then reduce to single int ✅
    if (Math.sign(m) === -1 || m===0) {
        return "INVALID"
    }
    else {
        let reducer = []
        for (let i = 0; (n * i) < m; i++) {
            reducer.push(n*i)
        }
        return reducer.reduce((preVal, curVal) => preVal + curVal )        
    }
}

console.log(sumMul(2,9))
console.log(sumMul(3,13))
console.log(sumMul(4,123))
console.log(sumMul(4, -7))
console.log(sumMul(0, 0))
