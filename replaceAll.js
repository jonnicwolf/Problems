/**
 * Isn't it annoying how "string".replace("find", "replace"); only replaces 
    the first match of the find string?
     Write a function, replaceAll(input, find, replace); that will replace 
     all matches of the given find string with the given replace string.

The function will always be called with three strings, 
    so don't worry about validating the arguments.

As with the original "string".replace(find, replace), if find is an empty string, 
    it should match in-between each character, effectively inserting replace in-between 
    each character, including the start and end of the string.
     I've given you some tests for this to make it a little clearer.
 */

// function replaceAll(input, find, replace){
    
//     if (input === ''){ //if input is empty, go in between
//         let inputToArr = input.split(' '); 
//         inputToArr = inputToArr.map(word=> word.replace(find,replace));      
//         return inputToArr
//     }
//     if (input.split(' ').length === 1){
        
//         //check that the one element contains find
//         // inputToArr = String(inputToArr)
//         // inputToArr = String(inputToArr).split('').join(' ').split('')
//         // inputToArr.push(replace);
//         // inputToArr.unshift(replace);
//         // inputToArr = inputToArr.map((word)=> { if (find === '') return word.replace(' ', replace)} );
        
//         let result = input
//         console.log(result)
//         result = result.replace(find,replace)
//         console.log(result)
        
//         console.log(result.includes(find))
//         result = result.replace(find, replace)
//         console.log(result.includes(find))
//         console.log(result)

//         // do {
//         //     result = result.replace(find, replace)
//         // } while (result.includes(find));
//         // console.log(result)
//         // return result;

//     } 
    
//     else {              
//         let inputToArr = input.split(' '); //works
//         inputToArr = inputToArr.map(word => word.replace(find,replace));
//         return inputToArr.join(' ');
//     }        
// };

// console.log(replaceAll("", "", "-"))//, "-", "Empty input, empty find");
// console.log(replaceAll("1", "", "-"))//, "-1-", "Single-character input, empty find");
 



function replaceAll (input,find,replace){
    //break input into words
    let arrayOfWords = input.split(' ')
    let result = ''
    console.log(arrayOfWords)
    if (arrayOfWords.length > 1){
        for (let i=0;i< arrayOfWords.length;i++){
            if (arrayOfWords[i]===find){
                arrayOfWords[i]=replace;
            }         
        }        
        for (let i=0;i<=arrayOfWords.length-1;i++){
            result += (arrayOfWords[i] + ' ')
        }
    }
    else {
        
    }
    console.log(result)
    return result
}

// replaceAll('Darien Matthew Morales Darien', 'Darien', "Monkey")
console.log(replaceAll("string-string", "ing", "!"))
// console.log(replaceAll("123", "", "-"))//-> -1-2-3-