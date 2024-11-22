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

function getTheVowels (word) {
    const vowels = 'aeiou';
    let start = null; //first appearance of first valid vowel in word
    let origin = null; //the index of which vowel is found first in word
    let pointer = null; // points at first valid vowel
    let count = 0; //count valid conseq vowel
    let i = 0;

    if (!word.includes('a')) return 0;

    do {
        if (word.includes(vowels[i])) {
            origin = i;
            start = word.indexOf(vowels[i]);
            pointer = origin;
            break;
        };
        i++;
    } while (start === null);

    for (let i=start; i<word.length; i++) {
        if (word[i] === vowels[pointer]) {
            count++;
            pointer++;
            if (pointer >= 5) pointer = origin;
        }
    }
    return count;
}

console.log(
    getTheVowels('akfheujfkgiaaaofmmfkdfuaiiie'),
    getTheVowels('eiknfhjrytueiouesxdczbeuiuoimnmfhfiuou'),
)
