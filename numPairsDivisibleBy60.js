/*
You are given a list of songs where the ith song has a duration of 
time[i] seconds.

Return the number of pairs of songs for which their total duration in 
seconds is divisible by 60. Formally, we want the number of indices i
 j such that i < j with (time[i] + time[j]) % 60 == 0.
*/

//input -> array of nums(time)
//output -> num of valid pairs divisible by 60

let numPairDivisibleBy60 = function(time){
    let counter = 0;
    let len = time.length-1;
    do {
        for(let i=len; i > 1; i--){
            if(time[i] + time[i - 1] % 60 === 0){
                counter++;
            };
        };
        time.pop();
    } while (time.length > 0);
    console.log(`counter: ${counter}`)
    return counter;
};

numPairDivisibleBy60([30,20,150,100,40]);