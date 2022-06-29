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
    let count = 0
    let vowelOrder_charcode = []
    for (let i=0; i<word.length; i++){
        if (vowels.indexOf(word[i])>0){
            vowelOrder_charcode.push(word.charCodeAt(i))
        }
    }
    vowelOrder_charcode.map((val,idx,arr)=> {if(val<arr[idx+1]) {return count++}})
    console.log(vowelOrder_charcode)
    return count
}

console.log(getTheVowels("agrtertyfikfmroyrntbvsukldkfa"))

