// const fizzBuzz = (n) => {
//     let i
//     for ( i = 0; i <= 15; i++){
//         console.log(i)
//         if (i % 3 === 0) {
            
//             console.log('Fizz')
//         }
//         else if (i % 5 === 0){
//             console.log('Buzz')
//         }
//         else if (i % 3 === 0 && i % 5 === 0){
//             console.log('FizzBuzz')
//         }
//     }
//     return i
// }
// fizzBuzz(15)


const fizzBuzz = (n) => {
    const answer = [];
    for (let i = 1; i <= n; i++){        
        if (i % 3 === 0 && i % 5 === 0){
            answer.push('FizzBuzz');
        }
        else if (i % 3 === 0){            
            answer.push('Fizz');
        }
        else if (i % 5 === 0){
            answer.push('Buzz');
        }        
        else answer.push(String(i))
    }
    return answer;
}

console.log(fizzBuzz(3))