// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

// The method should return an array of sentences declaring the state or country and its capital.

const findTheCapitals = (capitals) => {
  return capitals.map(val => `The capital of ${val.country || val.state} is ${val.capital}`);
}

console.log(
  findTheCapitals([{state: 'Maine', capital: 'Augusta'}])
);
