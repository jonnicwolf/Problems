function plusOne (digits) {
  for (let i=digits.length-1; i>=0; i--) {
    digits[i] += 1
    
    console.log(digits)
    if (digits[i] < 10) {
      return digits
    } else {
      digits[i] = 0
      digits.unshift(1)
    }
  }
  return digits
}

//plusOne([9])
//plusOne([1,2,3])
plusOne([4,3,2,1])