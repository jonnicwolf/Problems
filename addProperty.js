/**Your task is to add a new property usersAnswer to every object in the array questions.
 *  The value of usersAnswer should be set to null. 
 * The solution should work for array of any length.*/



let questions = [ 
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 2 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 1,
        numAttempts: 3 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 1 },
    { question: 'Question',
        options: [ 'US dollar', 'Ruble', 'Horses', 'Gold' ],
        rightAns: 0,
        numAttempts: 0 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 0 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 10 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 1 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 5 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 1 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 0 },
    { question: 'Question',
        options: [ 'Choice1', 'Choice2', 'Choice3', 'Choice4' ],
        rightAns: 0,
        numAttempts: 6 } 
]

questions.map(obj=>{
    return obj['userAnswer'] = null;
})
console.log(questions)
    


