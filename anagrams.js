/**
 * What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. 
    For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.

ALGORITHMSSTRINGS
 */


function anagrams(word,words){
    /**
     * split word into letters and count each letter with an obj
     * then loop over the array of words and count the letters of each word with an obj
     * object.keys the obj
    */

    const wordByLetter = word.split('')
    console.log(wordByLetter)

    let wordByLetter_Count = {}
    
    for (let letter of wordByLetter){
        wordByLetter_Count[letter] ? wordByLetter_Count[letter]++ : wordByLetter_Count[letter] = 1
    }
    console.log(wordByLetter_Count)

    



}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) )
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
// console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']) )