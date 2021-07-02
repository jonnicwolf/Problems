// const findUniq = (arr) => {
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         arr[0] === arr[arr.length - 1]
//             ? arr[i + 1] === arr[i]
//                 ? null
//                 : result.push(arr[i])
//             : arr[0] === arr[1]
//                 ? result.push(arr[arr.length - 1])
//                 : result.push(arr[0])
//     }
//     return result[1]
// }

const findUniq = arr => {
    let neu = arr.sort((a, b) => b - a)
    return neu[0] === neu[1]
        ? neu[neu.length - 1]
        : neu[0]
}



console.log(findUniq([ 0, 1, 0 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([3, 10, 3, 3, 3]))
console.log(findUniq([8,8,8,3,8]))

// console.log(findUniq(dataset))
// console.log(findUnique(dataset))