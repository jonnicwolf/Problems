// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString(str) {
  let i = str.length - 1;

  // Find the position where the number starts from the end of the string
  while (i >= 0 && str[i] >= '0' && str[i] <= '9') {
      i--;
  }

  // Separate the string into the text part and the numeric part
  const textPart = str.slice(0, i + 1);
  const numberPart = str.slice(i + 1);

  if (numberPart === "") {
      // If there's no number, append "1" to the string
      return str + "1";
  }

  // Increment the numeric part while preserving leading zeros
  const numberLength = numberPart.length;
  const incrementedNumber = (parseInt(numberPart, 10) + 1).toString().padStart(numberLength, "0");

  return textPart + incrementedNumber;
}


// console.log(incrementString('foo000'))
console.log(incrementString('foo1000'))
// console.log(incrementString('foo000'))
// console.log(incrementString('foo000'))