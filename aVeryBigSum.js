//return the sum of a given array of numbers
const aVeryBigSum = (ar) => {
    const sum =  ar.reduce((acc, el)=> {
        return acc + el
    })
    return sum
}

console.log(aVeryBigSum([1, 2, 3, 4,9,8,3, 4,9]))