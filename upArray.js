// function upArray(arr){
//     if(arr.length === 0){
//       return null
//     }
    
//       for(let i = 0; i < arr.length; i++){
//       if(arr[i] < 0){
//         return null
//       }else if(arr[i] > 9){
//         return null
//       }
//     }
  
//     let newNum = Number(arr.join('')) + 1
//     let str = newNum.toString()
    
//     let newArr = []
//     for(let i = 0; i < str.length; i++){
//        if(isNaN(str[i])){
//               continue;
//           }
//       newArr.push(Number(str[i]))
//     }
//      return newArr
    
//   }

// function upArray (arr){
//     const greater10 = arr.some((num)=> {num < 9})
//     if (arr === []) {return null}
//     console.log(greater10)
// }
// upArray([1, 2, 3, 4, 5])


//returning ARRAY of NUMBER
//were looking at the last indx
//increase last indx +1
//validations: array is not empty and doesn't contain any non single digit ints


// function upArray(arr){
//     if (arr.length > 0){
//             const negCheck = num => num >! 0 && num <= 9;
//             const valid = arr.some(negCheck)
//             if (valid){
//                 if (arr[arr.length-1]===9){
//                     arr[arr.length-2]+=1
//                     arr[arr.length-1]=0
//                     return arr
//                 } else {
//                     arr[arr.length-1]+=1
//                     return arr
//                 }
//             } else {return null}  
//         }  else return null;
// };

function upArray(arr){
    const negCheck = num => num >! 0 && num <= 9
    const valid = arr.some(negCheck)
    arr.length-1
    if (valid) {
        for (let i = arr.length; i >= 0;i-=1){
            if (arr[i]<9){
              console.log(arr)
                arr[i]+=1
                return arr
            }
            else if (i === 0 && arr[i]===9){

                arr[0]=0
                arr.unshift(1)
                console.log(arr)
                return arr
            }
            else {
              console.log(arr)
                arr[i]=0
                arr[i-1]+=1

                };
            
        };
    } else return null;
    return arr
}


const empty = []
const negTestArr = [1,-9]
const eightNine = [8,9]
const nines = [9,9,9]
const testArr = [ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ]
console.log(upArray(nines))
