

// function add(a, b) {
//     let exclude = String(Number(a)+ Number(b));
//     console.log(exclude.length)
//     let exponent = []
//     if (exclude.includes('+')){
//         for (let len = exclude.length-1, i = len; i > 0;i--){
//             if (exclude[i] === '+'){
//                 break;
//             }
//             exponent.unshift(exclude[i])
//         }
//     }
//     exclude.length-exponent.length
//     console.log(exclude.length)
//     console.log(exponent)
// }


function add(a,b){
    let additionArray = [];
    let overage;
    let arrayOfA = [...a];
    let arrayOfB = [...b];
    let i = arrayOfA.length-1
    let j = arrayOfB.length-1

    do {
        let additionByDigit = Number(arrayOfA[i])+Number(arrayOfB[j])
        if (additionByDigit > 9){
            additionByDigit = String(additionByDigit).split('')
            console.log(additionByDigit)
            additionArray.unshift(additionByDigit[additionByDigit.length-1])
            additionByDigit.lenght--
            overage = additionByDigit[0]*10
        }
        if (overage) {
            
        }
        i--,j--
    } while (arrayOfA[i] && arrayOfB[j])
}
//   console.log(add("1", "1"), "2");
//   console.log(add("123", "456"), "579");
  console.log(add("888", "222"), "1110");
//   console.log(add("1372", "69"), "1441");
//   console.log(add("12", "456"), "468");
//   console.log(add("101", "100"), "201");
//   console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
  
