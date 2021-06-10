//Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

const makeAbba = (a,b) => {
    const combine = a.concat(b)
    const reverse = b.concat(a)
    console.log(reverse)
    return combine.concat(reverse)
}

console.log(makeAbba('hi', 'bye'))
