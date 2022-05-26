/**
 * You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
 * By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi' */

function insideOut(x) {
    let [frontStack,backStack] = [[],[]]
    let middle = null;
    if (x.length%2===0) {
        for (let i=0,j=x.length-1; i<(x.length/2) && j>(x.length/2)-1; i++,j--){
            frontStack.unshift(x[i]);
            backStack.push(x[j]);
        }
        return frontStack.join('').concat(backStack.join(''));
    }
    else {
        middle = (x.length-1)/2;
        let xClone = x.split('');
        let x_middleRemoved = xClone.splice(middle,1);
        for (let i=0,j=xClone.length-1; i<(xClone.length/2) && j>(xClone.length/2)-1; i++,j--){
            frontStack.unshift(xClone[i]);
            backStack.push(xClone[j]);
        }
        return frontStack.join('').concat(x_middleRemoved,backStack.join(''));
    };
};
console.log(insideOut('taxi'))
console.log(insideOut('taxis'))
console.log(insideOut('man i need a taxi up to ubud'))// 'man i ende a atix up to budu'
