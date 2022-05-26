//input: string
//output: boolean

//return a boolean provided a string. test whether all paranthesis are closed properly.

function isParensBalanced (str){
    let left = []
     for (let item of str){
      if (item==='(' || item==='['){
        left.push(item)
      }
      else if (item===')' || item===']'){
        let curLeft = left.pop()   
        if (curLeft===null){
          return false;
        }
        else if ((curLeft==='(' && item!==')') || (curLeft==='[' && item!==']')){
          return false;
        }
      }
    }   
    return left.length===0
  }
  
  //'()' ok
  //'(()'
  console.log(isParensBalanced('()')===true)
  console.log(isParensBalanced(')(')===false)
  console.log(isParensBalanced('(())')===true)
  console.log(isParensBalanced('[]')===true)
  console.log(isParensBalanced('[()]')===true)
  console.log(isParensBalanced('([)]')===false)
  console.log(isParensBalanced('][()')===false)
  