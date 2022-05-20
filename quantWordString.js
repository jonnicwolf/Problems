// Given an array of 2 or more objects, where each object has a quantity and a word, return a string that gives each element, with the quantity and word, separated by commas. The last two elements should have 'and' between them.  

// [{quantity: 2, word: 'dogs'}, {quantity: 3, word: "Cats"}]
// 2 Dogs and 3 Cats

// [{quantity: 2, word: 'dogs'}]
// 2 dogs

// [
//   {quantity: 2, word: 'dogs'}, 
//   {quantity: 3, word: "cats"}, 
//   {quantity: 1, word: 'bird'},
//   {quantity: 6, word: 'fish'},
// ]

// 2 Dogs, 3 Cats, 1 bird and 6 fish

//loop over array and call properties
//concat the result to outside "result" string
//leave an exception for the second to last iteration to concat "and"
//input -> array
//output -> string

function quantWordString (array){
    let result = '';
    for (let i=0; i<array.length; i++){
      if (i===array.length-1  && array.length>1){
        result = result.concat(` and ${array[i].quantity} ${array[i].word}`)
      }
      else if (array.length===2){
        result = result.concat(`${array[i].quantity} ${array[i].word}`)      
      }
      else {
        result = result.concat(` ${array[i].quantity} ${array[i].word},`)      
      }
    }    
    return array.length>1 ? result : result.substring(0,result.length-1);
  }
  const test =  [
    {quantity: 2, word: 'dogs'}, 
    {quantity: 3, word: "cats"}, 
    {quantity: 1, word: 'bird'},
    {quantity: 6, word: 'fish'},
  ]
  
  const test2 = [
    {quantity: 1, word: 'cat'},
    {quantity: 3, word: 'pikachus'}
  ]

  const test3 = [
      {quantity: 1, word: 'dragon'}
  ]

  const test4 = [
      
  ]
  console.log(quantWordString(test))//✅
  console.log(quantWordString(test2))//✅
  console.log(quantWordString(test3))
  console.log(quantWordString(test4))

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // If you complete this first part, modify the function such that you cannot assume that the pluralization of the word will match the quantity. Change your function to properly handle pluralization
  
  // [
  //   {quantity: 2, word: 'dog'}, 
  //   {quantity: 3, word: "cat"}, 
  //   {quantity: 1, word: 'bird'},
  //   {quantity: 6, word: 'fish'},
  // ]
  
  // 2 Dogs, 3 Cats, 1 bird and 6 fish
  
  
  // Finally, if you have completed the previous steps, modify your solution so that it can handle nested arrays of objects. 
  
  // [
  //   {quantity: 2, word: 'dog'}, 
  //   [
  //       {quantity: 3, word: "cat"},
  //       {quantity: 4, word: 'lion'}
  //   ],
  //   {quantity: 1, word: 'bird'},
  //   {quantity: 6, word: 'fish'},
  // ]
  
  // 2 Dogs, 3 Cats, 4 lions, 1 bird and 6 fish