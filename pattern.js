// // // //You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.

// // // // Rules/Note:
// // // // If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// // // // All the lines in the pattern have same length i.e equal to the number of characters in the last line.
// // // // Range of n is (-∞,100]

// const pattern = (n) => {
//   const arr = [];
//   let result = []
//   let output1 = []
//   let output 
//   let neuLine = '\n'
//   const space = ' '
//   let spaceCounter = n-1
  
//   if (n <= 0) {
//     return ''
//   }
//   for (let i = 1; i <= n; i++, spaceCounter--) {
//     arr.push(i);
//     if (arr.length >= 1) {     
//       result = arr.slice(0, i - 1).reverse()
//       output1.push(space.repeat(spaceCounter))
//       output1.push(arr.concat(result))      
//       output1.push(space.repeat(spaceCounter))
//       output1.push(neuLine)

//       output = [...output1]
//       /*after reversing, add n-1 spaces
//       add (n-1)-- spaces each iteration of our loop
//       so that 1 if n=5 -> _ _ _ _ 1 \n
//       so that 2 if '' -> _ _ _ 1 2 1 \n
//       so that 4 if '' -> _ _ 1 2 3 2 1 \n */
//     }
//     else if (i > 9) {
//       i-=i
//       result = arr.slice(0, i - 1).reverse()
//       output1.push(space.repeat(spaceCounter))
//       output1.push(arr.concat(result))      
//       output1.push(space.repeat(spaceCounter))
//       output1.push(neuLine)

//       output = [...output1]
//     }
//     output = output.reduce((acc, el) => acc.concat(el), [])
//   }
//   return output.join('')
// };
// console.log(pattern(5));

// console.log(pattern(15))

// // const pattern = n => {
// //   let output = ''
// //   return output
// //}

const pattern = n => {
  var output = "";
  let base = []
  let addLine = []
  
  for (i = 0; i < n; i++) {
    if (i < 1) {
      base.push(1)
      result = (Number(base.join(''))) * (Number(base.join('')))      
      addLine.push(result,'\n')      
    } else if (i < 9){
      base.push(1)
      console.log(base)
      result = (Number(base.join(''))) * (Number(base.join('')))
      addLine.push(result, '\n')
      console.log(addLine)
    }
    else {
      
    }


  }
  output = addLine.join(' ')
  return output;
}
console.log(pattern(10))
console.log(10/100)
