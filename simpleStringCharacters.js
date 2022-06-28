/**
 * n this Kata, you will be given a string and your task will be to return a list of ints detailing the count of
 * uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.*/

function simpleStringCharacters (s){
    //make an object to hold our count
    //loop over string
    //convert each element to its charcode and build control flow for its appropriate range
    //return objects values
    const count = {
        uppercase: 0,
        lowercase: 0,
        number: 0,
        special: 0
    }
    for (let i=0; i<s.length; i++){
        let char = s.charCodeAt(i)
        if (char>64 && char<91) count.uppercase++        
        else if (char>96 && char<123) count.lowercase++
        else if (char>47 && char<58) count.number++
        else count.special++
    }    
    return Object.values(count)
}

console.log(simpleStringCharacters("Codewars@codewars123.com"))
console.log(simpleStringCharacters("bgA5<1d-tOwUZTS8yQ"))
console.log(simpleStringCharacters("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"))
console.log(simpleStringCharacters("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"))
console.log(simpleStringCharacters("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))
console.log(simpleStringCharacters("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"))

