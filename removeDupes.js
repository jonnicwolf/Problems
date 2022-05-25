function removeDupes (str) {
    let str_clone = str.split('')
    let nonDupes = [];
    for (let i=0; i<str.length; i++){
      if (str[i]===str[i+1]){
        str_clone.splice(i,2)
        console.log(str_clone)
      } 
    }
    return str_clone.join('')
  }
  
  const test = 'book'
  const test2 = 'bookkeeper'
  const test3 = 'abbaca'
  
  console.log(removeDupes(test))
  console.log(removeDupes(test2))
  console.log(removeDupes(test3))
