const sumMix = (x) => {
  let result = 0
  for (let i = 0; i < x.length; i++){
    typeof x[i] === "number"
         ? result += x[i]
         : result += Number(x[i])
  }
  return result
}

let result = 0
let string = '1'

console.log(result + Number(string))


console.log(sumMix([9, 3, '7', '3']))
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]))
// console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']))
