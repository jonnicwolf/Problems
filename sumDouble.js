//Given two int values, return their sum. Unless the two values are the same, then return double their sum.

const sumDouble = (a, b) => {
    if (a === b) {
        const sum = a + b
        return sum*2
    }
    else {
        return a + b
    }
}

console.log(sumDouble(3,2))