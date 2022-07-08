/**
 * Return an integer with the length of the consecutive vowels found.

This is better explained with a couple of examples:

You are given the string "agrtertyfikfmroyrntbvsukldkfa". The logic is that you start from the "a" and make your way right. 
The next vowel is an "e" and it is the consecutive vowel, then "i" and so forth until you get to "u". 
If you keep moving right you find "a" which happens to be the consecutive vowel. Return 6.
This is a slightly trickier example: you are given the string "erfaiekjudhyfimngukduo".
 As you move right you ignore all vowels until you get to the "a", then ignore the rest until you get to the "e",
  which is the consecutive vowel and so forth until you get to the "o". Return 4.
Note
For this kata, the vowels are 'a', 'e', 'i', 'o', 'u', in that order. y is not considered a vowel in this kata.
 */

function getTheVowels (word){
    //create a list of vowels
    //loop over string
    //find all vowels and record their index
    //check if indexRecord  is in acending order
    const vowels = ['a','e','i','o','u']
    const filteredVowels = []
    let count = 0
    
    for (let i=0; i<word.length; i++) {
        if (vowels.includes(word[i])>0){            
            filteredVowels.push(word[i])
        }
    }
    //look for a        
    let consecutiveVowels = []
    console.log(filteredVowels)
    for (let i=0; i<vowels.length; i++) {
        let vowelInOrder = filteredVowels.indexOf(vowels[i])
        consecutiveVowels.push(vowelInOrder)
        filteredVowels.splice(vowelInOrder,vowelInOrder-filteredVowels.length)
        console.log(filteredVowels)
    }
    console.log(consecutiveVowels)
    
    
}

// console.log(getTheVowels("agrtertyfikfmroyrntbvsukldkfa"))
console.log(getTheVowels("erfaiekjudhyfimngukduo"))

