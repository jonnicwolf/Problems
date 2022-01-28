/**
 * Write a function that accepts fight string consists of only small letters and return who wins the fight.
 *  When the left side wins return Left side wins!, when the right side wins return Right side wins!,
 *  in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1

 The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
 */

function alphabetWar(fight){
    const left  = {
        w : 4,
        p : 3,
        b : 2,
        s : 1,
        leftScore : 0
    }
    const right = {
        m : 4,
        q : 3, 
        d : 2, 
        z : 1,
        rightScore : 0
    }
    for (let letter of fight){     
        if (right.hasOwnProperty(letter)){
            right.rightScore+=right[letter]
        }
        else if (left.hasOwnProperty(letter)){
            left.leftScore+=left[letter]
        }
    }
    return right.rightScore === left.leftScore 
        ? `Let's fight again!` 
        : right.rightScore > left.leftScore 
            ? `Right side wins!`
            : `Left side wins!`
}
console.log(alphabetWar("z"));        //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs"));    //=> Right side wins!
console.log(alphabetWar("wwwwwwz"));  //=> Left side wins!

