/**
 * In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.
 */

function uniqueStringCharacters (a,b){
    //loop over string a: search for the first instace of a[element] in b
    //loop over string b: search "" for b[element] in a
    //add negatives to a result array
    //convert result array to string
    
    let result = [];
    for (let i=0; i<a.length; i++){
        if (b.indexOf(a[i])===-1){            
            result.push(a[i]);
        }        
    };
    for (let i=0; i<b.length; i++){
        if(a.indexOf(b[i])===-1){   
            result.push(b[i]);
        }
    };
    return result.join('');
}

// console.log(uniqueStringCharacters('xyab','xzca'))
// console.log(uniqueStringCharacters("xxx","xzca"))
// console.log(uniqueStringCharacters("abcd","xyz"))
// console.log(uniqueStringCharacters("xyabb","xzca"))