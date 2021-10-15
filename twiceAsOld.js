const twiceAsOld = (dadYearsOld, sonYearsOld) => {
   const result = (dadYearsOld - (sonYearsOld * 2))*-1
   return result > 0
    ? result
    : result *- 1
};

console.log(twiceAsOld(36,7))
console.log(twiceAsOld(55,30))
console.log(twiceAsOld(42,21))
console.log(twiceAsOld(22,1))
console.log(twiceAsOld(29,0))