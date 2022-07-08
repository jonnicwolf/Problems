//input: string
//output: boolean

//return a boolean provided a string. test whether all paranthesis are closed properly.

// function isParensBalanced (str){
//     let left = []
//      for (let item of str){
//       if (item==='(' || item==='['){
//         left.push(item)
//       }
//       else if (item===')' || item===']'){
//         let curLeft = left.pop()   
//         if (curLeft===null){
//           return false;
//         }
//         else if ((curLeft==='(' && item!==')') || (curLeft==='[' && item!==']')){
//           return false;
//         }
//       }
//     }   
//     return left.length===0
// }

  //'()' ok
  //'(()'

function isParensBalanced (s) {  
  if (s.length%2!==0) return false;  
  const rights = {
    '}':'{',
    ']':'[',
    ')':'('
  };
  const lefts = [];
  for (let i=0; i<s.length; i++) {      
    if (rights[s[i]]) {      
      let isMatch = lefts.length-1      
      if (lefts[isMatch]===rights[s[i]]){                
        lefts.pop();  
      } else return false;      
    } else lefts.push(s[i]);
  };
  return lefts.length>0 ? false : true;
};

console.log(isParensBalanced('()')===true)
console.log(isParensBalanced(')(')===false)
console.log(isParensBalanced('(())')===true)
console.log(isParensBalanced('[]')===true)
console.log(isParensBalanced('[()]')===true)
console.log(isParensBalanced('([)]')===false)
console.log(isParensBalanced('][()')===false)

// console.log(isParensBalanced("({{{{}}}))")===false)
