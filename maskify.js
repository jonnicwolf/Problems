//Your task is to write a function maskify, which changes all but the last four characters into '#'.
const maskify = (cc) => {
    mask = Array.from(cc)
    let i
    for (i = 0; i < mask.length-4; i++){
        mask[i]='#'
    }
    return mask.join('')
}
console.log(maskify('12348678909876'))