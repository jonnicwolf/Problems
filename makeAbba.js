//Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

const makeAbba = (a,b) => {
    const aFirst = a.concat(b)
    const bFirst = b.concat(a)
    return aFirst.concat(bFirst)
}

console.log(makeAbba('hi', 'bye'))
