/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left. */

// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'

const lastSurvivor = (letters, coords) => {
    let letterCopy = [...letters]
    for (i = 0; i < coords.length; i++) {
        letterCopy.splice(coords[i],1)
    }    
    return letterCopy.toString()
}

console.log(lastSurvivor('zbk',[2,1]))


