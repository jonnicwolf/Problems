//Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

const makeAbba = (a,b) => {
    let bFirst
    const aFirst = a.concat(b)
    if (b){
        bFirst = b.concat(a)
    }
    return aFirst.concat(bFirst)
}

// console.log(
    makeAbba('hello', 'bye')
// )

console.log(
    makeAbba('hi!')
)

