//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
//findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
//should return "found the needle at position 5"


// const findNeedle = (haystack) => {
//     //iterate through the ARRAY
//     //compare if each element matches a STRING such as 'needle'
//     //grab the index if needle is found
//     //return the index of needle following the string 'found the needle at position {index}
//     position 
//     for (i = 0; i < haystack.length; i++){
        
//         if (haystack[i] === 'needle') {
//             position =i
//         }
//     }
//     console.log(position)
//     return `found the needle at position ${position}`
// }


const findNeedle = (haystack) => {
    return `found the needle at position ${haystack.indexOf('needle')}`
}
const haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
const haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
const haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
console.log(findNeedle(haystack_1))
console.log(findNeedle(haystack_2))
console.log(findNeedle(haystack_3))