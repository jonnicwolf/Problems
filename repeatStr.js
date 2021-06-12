// const repeatStr = (n,str)=> {
//     let output = str
//     for (i = 0;i<n;i++){
//         output = output + str
//     }
//     return output
// }
// console.log(repeatStr(5,'yo'))

const repeatStr = (n, str) => {
    return str.repeat(n)
}
console.log(repeatStr(5,'yo'))
