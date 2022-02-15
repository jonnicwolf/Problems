/**
 * In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
 * The first element of the array is at index 0.
 */

function total(arr){
    if (arr.length === 0){
        return 0;
    } else {
        function isPrime(num) {
            for(var i = 2; i < num; i++) 
                if(num % i === 0) return false;              
                return num > 1;
          }        
        let counter = 0;

        for(i=2;i<arr.length;i++){            
            if(isPrime(i)){                
                counter += arr[i]
            };
        };
        return counter;
    };    
};

console.log(total([]))//,0);
console.log(total([1,2,3,4]))//,7);
console.log(total([1,2,3,4,5,6]))//,13);
console.log(total([1,2,3,4,5,6,7,8]))//,21);
console.log(total([1,2,3,4,5,6,7,8,9,10,11]))//,21);
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13]))//,33);
console.log(total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))//,47);