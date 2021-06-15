// const compareMe = (a, b) => {
//     let score = [0,0]
//     // if (a[0] > b[0]) {
//     //     score[0] = 1
//     // }
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > b[i]) {
//             score[0]++
//         }
//         else if (a[i] === b[i]) {
//             score[0] += 0
//             score[1] += 0
//         }
//         else {
//             score[1]++
//         }
//     }
//     return score
// }\
const compareMe = (a, b) => {
    score = {
        alice: 0,
        bob: 0
    }
    for (i of a) {
        a[i] > b[i] ? score.alice++ : score.bob++
    }
    return [score.alice,score.bob]
}
console.log(compareMe([1,5,3],[3,2,1]))


