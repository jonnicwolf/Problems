/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // save col of each 0 ✅
  // change the row where 0 is found
  // do it in place

  // map over the matrix ✅ 
  // see if ea row includes 0 ✅
  // save the index if we find a 0 ✅
  const tracker = {}
  let sus_row
  for (let i=0; i<matrix.length;i++) {
    let row = matrix[i]
    if (row.includes(0)) {
      sus_row = i
      for (let j=0;j<row.length;j++) {
        let num = row[j]
        if (num === 0) tracker[j] = true
      }
    }
  }

  for (let i=0; i<=matrix.length-1;i++) {
      let row = matrix[i]
      if (i === sus_row) matrix[i].fill(0)
      for (let j=0; j<=row.length-1;j++) {
        if (tracker[j]) row[j] = 0
      }
  }
  return matrix
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))