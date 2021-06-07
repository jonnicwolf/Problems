//Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

const notString = (str) => {
    return str.startsWith('not') ? str : `not ${str}`
}
console.log(notString('not yo'))