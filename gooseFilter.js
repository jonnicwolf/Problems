// /**
//  * Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, 
//     that takes an array of strings as an argument and returns a filtered array containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:

// geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// return: ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
//  */

// function gooseFilter(birds){
//     const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     let result = birds
//     for (i = 0; i < geese.length; i++){
//         for (j = 0; j < result.length; j++){
//             if (geese[i]===result[j]){
//                 result.splice(j,1)
//             }
//         }
//     }
//     return result;
// }

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
// console.log(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]))


const myResult = [ 'Crested',
  'Barbary',
  'Toulouse',
  'Mallard',
  'Hook Bill',
  'Crested',
  'Pilgrim',
  'Crested',
  'Blue Swedish',
  'Crested',
  'Crested',
  'Hook Bill',
  'Mallard',
  'Hook Bill',
  'Mallard',
  'Mallard',
  'Mallard',
  'Mallard',
  'Hook Bill',
  'Mallard',
  'Roman Tufted',
  'Toulouse',
  'Barbary',
  'Mallard',
  'Mallard',
  'Crested',
  'Barbary',
  'Hook Bill',
  'Blue Swedish' ]


  const expected1 = [ 'Crested',
  'Barbary',
  'Mallard',
  'Hook Bill',
  'Crested',
  'Crested',
  'Blue Swedish',
  'Crested',
  'Crested',
  'Hook Bill',
  'Mallard',
  'Hook Bill',
  'Mallard',
  'Mallard',
  'Mallard',
  'Mallard',
  'Hook Bill',
  'Mallard',
  'Barbary',
  'Mallard',
  'Mallard',
  'Crested',
  'Barbary',
  'Hook Bill',
  'Blue Swedish' ]

  console.table(expected1)


function countBirds (flockOne, flockTwo){
    const rookOne = {};
    const rookTwo = {};
    for (let bird of flockOne){
        if (rookOne[bird]){
            rookOne[bird]++
        } else { rookOne[bird]=1 };
    }
    for (let bird of flockTwo){
        if (rookTwo[bird]){
            rookTwo[bird]++
        } else { rookTwo[bird]=1 };
    }    
    console.log(rookOne, rookTwo)
}

countBirds(myResult,expected1)
