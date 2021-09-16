
const longestWord = sen => {
    const wordArr = sen.split(' ')
    sen = wordArr.sort().reverse()[0]
    return sen; 
}
console.log(longestWord(`The wooooooo quick brown fox jumps over the lazy dog`));