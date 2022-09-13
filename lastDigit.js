const lastDigit = (a, b, c) => {
    let [aMod, bMod, cMod] = [a%10, b%10, c%10]
      
      return aMod === bMod && bMod === cMod 
        ? true
        : false    
}
console.log(lastDigit(17,7))