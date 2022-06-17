/**
 * Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0
 */

function triangular (n){
    //we're looking for the total number of dots
    //we can increment a count instead of building the triangle
    //counter += counter +1
    //use n for the end of the loop
    //use a loop to keep the count
    
    return n*(n+1)/2
};
console.log(triangular(2))
// console.log(triangular(3))
// console.log(triangular(-10))
// console.log(triangular(10))
