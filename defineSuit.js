// You get any card as an argument. Your task is to return a suit of this card.

const deck =
    [
        '2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
        '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
        '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
        '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'
    ];

const defineSuit = (card) => {
    if (card.length < 3) {
        let suit = card.substr(1, 1);
        switch
        (suit) {
            case '♣': return 'clubs'
            case '♦': return 'diamonds'
            case '♥': return 'hearts'
            case '♠': return 'spades'
            default: return null
        }
    }
    else {
        let suit = card.substr(2, 1);
        console.log(suit)
        switch
        (suit) {
            case '♣': return 'clubs'
            case '♦': return 'diamonds'
            case '♥': return 'hearts'
            case '♠': return 'spades'
            default: return null
        }
    }
}

console.log(defineSuit('10♥'))



import {AxiosClient, CBHttpCodeRunner, AnalysisService} from "big-o-calculator";

// First occurrence of [runnerLanguage] in URI will be replaced with language
const codeRunnerUri = 'http://example.com/code-runner/[runnerLanguage]';
const codeRunner = new CBHttpCodeRunner(codeRunnerUri, new AxiosClient())
const calculator = new AnalysisService(codeRunner);

import {AlgorithmSpeed, BuiltInArgumentTypes, Language} from "big-o-calculator";

let code: Code = {
  // Language of the tested code
  language: Language.JS,
  // Most languages handle data types differenty (e.g. integers vs strings). 
  // This parameter tells the calculator about type of algorithm tested.
  expectedSpeed: AlgorithmSpeed.SLOW,
  // Tested code with function call and argument placeholder
  content: 'function firstLetters(words) { /*...*/ };firstLetters({funcArgs});',
  // Type of arguments to generate for tested code
  testedFunctionName: BuiltInArgumentTypes.WORDS
};

// AnalysisService.analyze returns a promisified BigO value
calculator.analyze(defineSuit('7♥'))
  .then(analysisResult => {
    console.log(analysisResult.bigO); // O(n)
  });