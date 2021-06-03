const isIsogram = (str) => {
  const arr = str.split("");
  const compare = Array.from(new Set(arr));
  if (compare.length !== arr.length) {
    return false;
  } else {
    return true;
  }
};
