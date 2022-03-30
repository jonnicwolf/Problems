/**
 * Isn't it annoying how "string".replace("find", "replace"); only replaces 
    the first match of the find string?
     Write a function, replaceAll(input, find, replace); that will replace 
     all matches of the given find string with the given replace string.

The function will always be called with three strings, 
    so don't worry about validating the arguments.

As with the original "string".replace(find, replace), if find is an empty string, 
    it should match in-between each character, effectively inserting replace in-between e
    ach character, including the start and end of the string.
     I've given you some tests for this to make it a little clearer.
 */

function replaceAll(input, find, replace){
    // let result = [];
    // if (find === '') {
    //     result = input.split('')                
    //     for (let i=0;i < input.length+1;i++){
    //         console.log(result)
    //         if (result[i] !== find){
    //             result.splice(i,0,replace)
    //             i++
    //         }
    //     }
    // } else result = input.split(' ');    
    // console.log(result)
    // console.log(result)
    
    let inputToArr = input.split(' ');    
    console.log(inputToArr)

    if (inputToArr.length === 1) {
        inputToArr = String(inputToArr).split('').join('').split('');
        inputToArr.push('');
        inputToArr.unshift('');

        inputToArr = inputToArr.map((word)=> {
            if (find = ''){
                console.log(word.replace('',replace))
            }
            console.log(inputToArr)
            ;
        })
        console.log(inputToArr)
        return inputToArr.join(' ')}

    else { 
        inputToArr = inputToArr.map(word=> word.replace(find,replace))
        return inputToArr.join('')}
    
}

// console.log(replaceAll("", "", "-"))//, "-", "Empty input, empty find");
// // console.log(replaceAll("1", "", "-"))//, "-1-", "Single-character input, empty find");
console.log(replaceAll("123", "", "-"))//, "-1-2-3-", "Empty string as find");//undefined
// console.log(replaceAll('Darien Matthew Morales Darien', 'Darien', "Monkey")) //fix spacing
