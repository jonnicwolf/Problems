/**
 For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided 2 dimensional array (x) f
or good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, 
return 'Publish!', if there are more than 2 return 'I smell a series!'.
 If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.

The solution should be case insensitive (ie good, 
    GOOD and gOOd all count as a good idea). All inputs may not be strings.
 */

function well2(x){
    let superX = []    
    for (let arr of x){
        console.log(arr)
        console.log(superX.concat(arr))
    }
    console.log(superX)
    superX.map((val)=>{val.toLowerCase()})
    console.log(superX)
    let counter = {}
    for (let val of superX){
        if (counter[val]){
            counter[val]++
        } else counter[val] = 1
    }
    if (counter.good <= 2){
        return 'Publish!';
    }
    else if (counter.good > 2){
        return "I smell a series!"
    } else return 'Fail!'
}


// console.log(well2([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]));
console.log(well2([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]));
// console.log(well2([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]));
