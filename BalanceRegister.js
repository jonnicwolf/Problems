const BalanceRegister = (billCounts, cashOwed) => {
  const breakDown ={
    bank: {
      100: 0,
       50: 0,
       20: 0,
       10: 0,
        5: 0,
        1: 0,
    },
    cashOwed: {
      100: 0,
       50: 0,
       20: 0,
       10: 0,
        5: 0,
        1: 0,
    },
  }
  const billCountClone = {...billCounts}
  //find the total of all bills ✅
  const total = Object.entries(billCounts)
                      .map(billCount => billCount = billCount[0]*billCount[1])
                      .reduce((cur,val)=>cur+val)
  console.log(total)
  //find all available denominations ✅
  const billDenominations =
    Object.keys(billCounts)
          .map(Number)
          .sort((a, b) => b - a);
  //remove cash owed from total using appropriate bills
  let cashOwedCount = 0
  for (let bill of billDenominations) {
    for (let i=0; i<=billCounts[bill]; i++) {
      if (billCountClone[bill] > 0 && cashOwedCount !== cashOwed) {
            billCountClone[bill]--
            cashOwedCount += bill
            breakDown.cashOwed[bill]++
        }
      else continue
    }
    console.log(cashOwedCount)
  }
  //remove bank
  let bank = 0
  for (let bill of billDenominations) {
    for (let i=0; i<billCounts[bill]; i++) {
      if (billCountClone[bill] > 0 && bank !== 500) {
        billCountClone[bill]--
        bank += bill
        breakDown.bank[bill]++
      }
    }
    console.log(bank)
  }
  return breakDown
}


const billCounts = {
  100: 1,  // $100 bills count
  50: 2,  // $50 bills count
  20: 20,  // $20 bills count
  10: 30,  // $10 bills count
  5: 35,   // $5 bills count
  1: 200,  // $1 bills count
};

console.log(BalanceRegister(billCounts, 600))