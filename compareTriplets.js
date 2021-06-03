const compareTriplets = (a, b) => {
  const score = {
    alice: 0,
    bob: 0,
  };
  for (let i = 0; i < a.length; i++) {
    console.log(score);
    if (a[i] > b[i]) {
      score.alice++;
      console.log(score.alice);
    } else if (a[i] < b[i]) {
      score.bob++;
      console.log(score.bob);
    }
  }
  return Object.values(score);
};

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
