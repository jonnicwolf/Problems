//A function passing two strings, searching for one (the name) within the other. ``function nameInStr(str, name){ return true || false }``

//nameInStr("Across the rivers", "chris") -> true
//nameInStr("Brown fox",'Bronx') -> false

const nameInStr = (str, name) => {
  const strArr = [...str.toLowerCase()];
  const nameArr = [...name.toLowerCase()];
  const output = [];

  for (let i = 0, len = nameArr.length; i < len; i++) {
   
    if (strArr.indexOf(nameArr[i]) >= 0) {
        const iterator = strArr.indexOf(nameArr[i]);
        
        output.push(strArr[iterator]);
        iterator !== 0
            ? strArr.splice(0, iterator)
            : strArr.splice(0, iterator+1)
        
    }
    console.log(strArr)
  }
  
  return output.join("") === name.toLowerCase() ? true : false;
};

// console.log(nameInStr('brittany', 'Brittany'))
console.log(nameInStr('mtathew',
  'Matthew' ))
// console.log(nameInStr('rtoalmeyb eomcweri  hrreazeeth yra ejdy ymydlrbrehnea erdaojra y snlabeebtrocr  laeyiraytewej  yoay',
//   'Matthew' ))





























// console.log(
//   nameInStr(
//     "n  rredxe  eawar m llraejja ktnxnaeryrh   oaeeuee ybrr iymymg  idjase yiienteoe nday i  h jeitvm rfsreraiiamattrcry  zel er  n  teh  d  y",
//     "Brittany"
//   )
// );

// console.log(nameInStr("Across the rivers", "chris"))
// console.log(nameInStr("Brown fox", 'Bronx'))
// console.log(nameInStr("A crew that boards the ship", "chris"));

// for (let i = 0, len = nameArr.length - 1; i < len; i++) {
//     strArr.indexOf(nameArr[i]) < strArr.indexOf(nameArr[i + 1])
//         ? output.push(true)
//         : output.push(false)
// }
// return output.every(elem=>elem===true)

// if (strArr.indexOf(nameArr[i])) {
//     output.push(strArr[strArr.indexOf(nameArr[i])])
//     strArr.splice(
//         strArr[strArr.indexOf(nameArr[i])]
//         , 1)
// }

// const strArr = [...str]
//     const nameArr = [...name]
//     const output = []
//     let boolean = undefined
//     const strArr_sansSpace = []
//     for (let i = 0, len = strArr.length; i < len; i++) {
//         str[i] === ' '
//             ? strArr.splice(i, 1)
//             : strArr_sansSpace.push(str[i])
//     }
//     for (let i = 0, len = nameArr.length; i < len; i++) {
//         strArr_sansSpace.indexOf(nameArr[i]) < strArr_sansSpace.indexOf(nameArr[i+1])
//             ? output.push(strArr_sansSpace.indexOf(nameArr[i]))
//             : boolean = false
//     }
//     console.log(output)
//     console.log(boolean)
//     console.log(strArr_sansSpace)
