// INPUT/OUTPUT
//icyHot(120, -1) → true
// icyHot(-1, 120) → true
// icyHot(2, 120) → false

//Problem -> Given two temperatures, return true if one is less than 0 and the other is greater than 100.
//Return -> Boolean

//less than? comparision <- conditional
//actually two comparisions
//I need to find out if 1/2 is less than 0 : meaning that number must be negative
// '' '' '' 2/2 is MORE than 100 : meaning 100+

const icyHot = (temp1, temp2) => {
//   if (temp1 > 100 || temp1 < 0) {
//     if (temp2 > 100 || temp2 < 0) {
//       return true;
//     }
//   } else if (temp1 === 100 || temp1 === 0) {
//     if (temp2 === 100 || temp2 === 0) {
//       return false;
//     }
//     return false;
//   } else {
//     return false;
//   }
    // switch (temp1, temp2) {
    //     case temp1 > 100 && temp2 < 0:
    //         return true
    //     default:
    //         return false
    // }
    if (temp1 > 100 || temp2 > 100) {
        if (temp1 < 0 || temp2 < 0) {
            return true
        }
    }
    else if (temp1 < 0 || temp2 < 0) {
        if (temp1 > 100 || temp2 > 100) {
            return true
        }
    }
    
};
console.log(icyHot(-1, 100));



