/**
 * Write a function that, given a string of text (possibly with punctuation and line-breaks), 
 * returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
 */

const { Filter, ContactsOutlined } = require("@material-ui/icons")

function topThreeWords (text){
    //split into an array to remove whitespaces
    //filter for all text that do not ONLY contain a-z
    //count occurence of each word
    //sort words by most occurring 
    //return the top 3 in an array
    //input: string
    //output: array
    const wordCounter = {}
    const textArr = text.split(' ')
    console.log(textArr)
    let validWords = []
    for (let word of textArr){
        let nonLetterFilter = Array.from(word).every(letter=>letter.charCodeAt(0)>96 && letter.charCodeAt(0)<123 || letter.charCodeAt(0)===39)
        if (nonLetterFilter){            
            validWords.push(word)
        }
    }
    console.log(validWords)
    validWords = validWords.filter(word=>word !== '')
    console.log(validWords)
    for (let word of validWords){
        wordCounter[word] 
        ? wordCounter[word]++
        : wordCounter[word] = 1
    }
    let result = Object.entries(wordCounter).sort((a,b)=>b[1]-a[1])
    console.log(result)
    let winners = []
    for (let i=0; i<result.length; i++){
        winners.push(result[i][0])
        if (winners.length>2) return winners
    }
    return winners
}
const test1 = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
const test2 = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
const test3 = "  //wont won't won't"
const test4 = "a a a  b  c c  d d d d  e e e e e"
const test5 =  '  //wont won\'t won\'t'

// console.log(topThreeWords(test1))
// console.log(topThreeWords(test2))
// console.log(topThreeWords(test3))
// console.log(topThreeWords(test4))
console.log(topThreeWords(test5))

