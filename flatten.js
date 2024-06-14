function flatten (matrix) {
  const result = []
  for (arr of matrix) {
    for (item of arr) {
      result.push(item)
    }
  }
  return result
}

const matrix1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];

const matrix2 = [
  ["a", "z"],
  ["b", "y"],
  ["c", "x"],
  ["d", "w"],
  ];
  
  console.log(flatten(matrix1));
  console.log(flatten(matrix2));