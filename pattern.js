//You have to write a function pattern which creates the following Pattern(See Examples) upto n(parameter) number of rows.

// Rules/Note:
// If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
// All the lines in the pattern have same length i.e equal to the number of characters in the last line.
// Range of n is (-∞,100]

const pattern = (n) => {
  const arr = [];

  for (let i = 1; i <= n; i++) {
    arr.push(i);
    if (arr.length > 1) {
      arr.splice(arr[0], i);
    }
    console.log(arr);
  }
  console.log(arr);
};
console.log(pattern(5));

//arr = [1, 2, 3, 2, 1]
