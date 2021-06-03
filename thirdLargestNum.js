//Write a function that takes in an array of numbers and returns the 3rd largest number

const thirdLargestNumber = (arrOfNums) => {
    const sorted = arrOfNums.sort().reverse()
    return sorted[2]
}

console.log(thirdLargestNumber([7,2,5,1,9,8,3]))