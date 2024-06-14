/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
  const stack = []

  for (let i=0; i<=mat.length-1; i++) stack.push(mat[i][i])
  for (let i=0; i<=mat.length-1; i++) stack.push(mat[i][(mat.length-1)-i])

  const result = stack.reduce((a,b)=> a+b)
  const mid_row = Math.floor(mat.length/2)
  return mat.length % 2 !== 0 ? result-mat[mid_row][mid_row] : result
};

console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))
console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))
console.log(diagonalSum(
  [
    [7,9,8,6,3],
    [3,9,4,5,2],
    [8,1,10,4,10],
    [9,5,10,9,6],
    [7,2,4,10,8]
  ]))
