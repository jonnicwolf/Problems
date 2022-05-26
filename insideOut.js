/**
 * You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. 
 * By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi' */

function insideOut(x){
    const xToArray = x.split(' ');
    let result = xToArray.map((item)=>{
        if (item.length>3 && item.length%2===1){            
            return item.substring(0,item.length/2).split('').reverse()
                .concat(item.charAt([item.length/2]),item.substring(item.length/2+1,item.length).split('').reverse()).join('');
        }
        else if (item.length>3 && item.length%2===0){
            return item.substring(0,item.length/2).split('').reverse()
                .concat(item.substring(item.length/2,item.length).split('').reverse()).join('');
        }
        else return item;
    });
    return result.join(' ');
};
console.log(insideOut('taxi'))
console.log(insideOut('taxis'))
console.log(insideOut('man i need a taxi up to ubud'))// 'man i ende a atix up to budu'