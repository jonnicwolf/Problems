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
// function breakDownCash(tips) {
//   const denoms = [100, 50, 20, 10, 5, 1];
//   const names = Object.keys(tips);
//   const breakdown = {};

//   for (const employee of names) {
//     breakdown[employee] = {};
//     let remainingAmount = tips[employee];

//     for (const denom of denoms) {
//       const billsAdded = Math.floor(remainingAmount / denom);
//       if (billsAdded > 0) {
//         breakdown[employee][denom] = billsAdded;
//         remainingAmount -= denom * billsAdded;
//       };
//     };
//   };
//   return breakdown;
// }

// console.log(breakDownCash(tipShare))


function breakDownCash(tips) {
  const denoms = [100, 50, 20, 10, 5, 1];
  const breakdown = {};

  for (const employee in tips) {
    breakdown[employee] = {};
    let remainingAmount = tips[employee];

    for (const denom of denoms) {
      const billsAdded = Math.floor(remainingAmount / denom);
      if (billsAdded > 0) {
        breakdown[employee][denom] = billsAdded;
        remainingAmount %= denom;
      }
    }
  }

  return breakdown;
}

// function BalanceRegister(billCounts, cashOwed, shares) {
//   const billCountClone = { ...billCounts };
//   const breakDown = {
//     bank: {},
//     cashOwed: {}
//   };

//   const billDenominations = Object.keys(billCounts).map(Number).sort((a, b) => b - a);

//   let cashOwedCount = 0;
//   for (let bill of billDenominations) {
//     const count = Math.min(billCounts[bill], Math.floor((cashOwed - cashOwedCount) / bill));
//     billCountClone[bill] -= count;
//     cashOwedCount += count * bill;
//     breakDown.cashOwed[bill] = count;
//   }

//   Object.assign(breakDown, breakDownCash(shares));

//   let bank = 0;
//   for (let bill of billDenominations) {
//     const count = Math.min(billCounts[bill], billCountClone[bill], Math.floor((500 - bank) / bill));
//     billCountClone[bill] -= count;
//     bank += count * bill;
//     breakDown.bank[bill] = count;
//   }

//   return breakDown;
// }
function BalanceRegister(billCounts, cashOwed, shares) {
  const billCountClone = { ...billCounts };
  const breakDown = {
    bank: {},
    cashOwed: {}
  };

  const billDenominations = Object.keys(billCounts).map(Number).sort((a, b) => b - a);

  let cashOwedCount = 0;
  for (let bill of billDenominations) {
    const count = Math.min(billCounts[bill], Math.floor((cashOwed - cashOwedCount) / bill));
    billCountClone[bill] -= count;
    cashOwedCount += count * bill;
    breakDown.cashOwed[bill] = count;
  }

  Object.assign(breakDown, breakDownCash(shares));

  let bank = 0;
  for (let bill of billDenominations) {
    const count = Math.min(billCounts[bill], billCountClone[bill], Math.floor((500 - bank) / bill));
    billCountClone[bill] -= count;
    bank += count * bill;
    breakDown.bank[bill] = count;
  }

  // Adjust the bank values to add up to 500
  const remainingBalance = 500 - bank;
  const highestDenomination = billDenominations[0];
  const countToAdd = Math.ceil(remainingBalance / highestDenomination);
  breakDown.bank[highestDenomination] += countToAdd;

  return breakDown;
}




console.log(BalanceRegister(billCounts, 600, tipShare))
