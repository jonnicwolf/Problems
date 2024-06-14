/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
  let result = []
  const removed_zeros = mat.map(item=>item.filter(item=>item===1))
  
  for (let i=0;i<removed_zeros.length;i++) {
    if (removed_zeros[i].length === 0) continue
    else if (result.length) 
      if (removed_zeros[i].length > result[1]) result = [i, removed_zeros[i].length]
      else continue;
    else result = [i, removed_zeros[i].length]
  }

  return result.length === 0 ? [0,0] : result
};

console.log(rowAndMaximumOnes([[0,1],[1,0]]))
console.log(rowAndMaximumOnes([[0,0,0],[0,1,1]]))
console.log(rowAndMaximumOnes([[0,0],[1,1],[0,0]]))
console.log(rowAndMaximumOnes([[0],[1],[0],[0]]))
console.log(rowAndMaximumOnes([[0],[0]]))
console.log(rowAndMaximumOnes([[0,1],[1,1]]))