//a function that takes in a string and returns the same string with all duplicates removed.

const removeDupes = (str) => {
  //loop over the string
  //compare each elem to the others
  console.log(str);
  const joined = str.split(" ").sort();

  cons
  t mash = [];
  let i = 0;
  while (i < joined.length) {
    if (joined[i].includes(" ")) {
      mash.push(joined[i]);
      console.log(joined);
    }
    i++;
  }
  return joined;
};

console.log(removeDupes("the quick brown fox jumped over the lazy dog"));
//input: the quick brown fox jumped over the lazy dog
//output: thequickbrownfxjumpdvzyg
