/**
 * Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata*/

function shortcut (string){    
    let result = []
    let dictionary = {
        a: 97,
        e: 101,
        i: 105,
        o: 111,
        u: 117
    }
    
    for (let letter=0; letter<string.length; letter++){
        if (!dictionary[string[letter]]){
            result.push(string[letter])
        }
    }
    return result.join('')
}

console.log(shortcut('hello'))//==='hll')
console.log(shortcut('codewars'))//==='cdwrs')
console.log(shortcut('HELLO'))//==='HELLO')