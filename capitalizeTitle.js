/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  return title
    .toLowerCase()
    .split(' ')
    .map(word => {
      if (word.length > 2) return word.charAt(0).toUpperCase() + word.slice(1)
      else return word
      })
    .join(' ');
};

console.log(capitalizeTitle("capiTalIze tHe titLe"))
console.log(capitalizeTitle("First leTTeR of EACH Word"))
 console.log(capitalizeTitle("i lOve leetcode"))