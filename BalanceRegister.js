const tipShare = {
  chuck: 23,
  jess: 24,
  justine: 36,
  cris: 48,
  arturo: 24,
  fezz: 43
}

const billCounts = {
  100: 1,  // $100 bills count
  50: 2,  // $50 bills count
  20: 20,  // $20 bills count
  10: 30,  // $10 bills count
  5: 35,   // $5 bills count
  1: 200,  // $1 bills count
};

function breakDownCash (tips) {
  const denoms = [100, 50, 20, 10, 5, 1];
  const names = Object.keys(tips);
  const breakdown = {};

  for (const employee of names) {
    breakdown[employee] = {};
    let remainingAmount = tips[employee];

    for (const denom of denoms) {
      const billsAdded = Math.floor(remainingAmount / denom);
      if (billsAdded > 0) {
        breakdown[employee][denom] = billsAdded;
        remainingAmount -= denom * billsAdded;
      };
    };
  };
  return breakdown;
}

const BalanceRegister = (billCounts, cashOwed, shares) => {
  let breakDown ={
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
  };
  const billCountClone = {...billCounts};
  //find the total of all bills ✅
  const total = 
    Object.entries(billCounts)
          .map(billCount => billCount = billCount[0]*billCount[1])
          .reduce((cur,val)=>cur+val);
  //find all available denominations ✅
  const billDenominations =
    Object.keys(billCounts)
          .map(Number)
          .sort((a, b) => b - a);
  //remove cash owed from total using appropriate bills
  let cashOwedCount = 0;
  for (let bill of billDenominations) {
    let count = Math.min(billCounts[bill], Math.floor((cashOwed - cashOwedCount) / bill));
    billCountClone[bill] -= count;
    cashOwedCount += count * bill;
    breakDown.cashOwed[bill] += count;
  }
  //add cash shares to breakdown
  Object.assign(breakDown, breakDownCash(shares))
  //remove bank
  let bank = 0;
  for (let bill of billDenominations) {
    let count = Math.min(billCounts[bill], billCountClone[bill], Math.floor((500 - bank) / bill));
    billCountClone[bill] -= count;
    bank += count * bill;
    breakDown.bank[bill] += count;
  };
  return breakDown;
};









console.log(BalanceRegister(billCounts, 600, tipShare))

