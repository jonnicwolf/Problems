/**
 * Grade book
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
 */

function getGrade (s1,s2,s3) {
    const scores = [s1,s2,s3];
    const grossScore = scores.reduce((a,b)=>a+b);
    const avgScore = grossScore/scores.length;
    
    switch (true){
        case (avgScore<60): 
            return 'F';
        case (avgScore<70):
            return 'D';
        case (avgScore<80):
            return 'C';
        case (avgScore<90):
            return 'B'
        case (avgScore<=100):
            return 'A';            
    }        
}

console.log(getGrade(90,80,85))