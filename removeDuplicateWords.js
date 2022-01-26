/*Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:

Input: 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output: 'alpha beta gamma delta'
*/

function removeDuplicateWords (s) {
    let obj = {};
    const wordArray = s.split(' ');    
    for (let i = 0; i < wordArray.length; i++){
        if (!obj['wordArray[i]']){            
            obj[wordArray[i]] = wordArray[i]
        };
    };
    return Object.keys(obj).join(' ');
}



console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))