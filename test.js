// const one = 1
// let one_1 = 1
// for (let i = 0; i < Infinity; i+=2) {
//   console.log(one + i)
//   console.log(one)


//       console.log(one_1)
//   console.log(one_1 = i)
// }

function isAnagram (s,t) {
  const sort_s = s.split('').sort().join('')
  const sort_t = t.split('').sort().join('')
  console.log(sort_t)
}

console.log(isAnagram('racecar', 'carrace'))