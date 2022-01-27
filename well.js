/**
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'.
 If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
 If there are no good ideas, as is often the case, return 'Fail!'.
*/

function well (x){
    let goodIdeas = 0;    
    let result;
    for (let idea of x){        
        if (idea === 'good'){
            goodIdeas+=1;
            if (goodIdeas > 2) break;
        }   
    }
    if (goodIdeas >= 1 && goodIdeas < 3){
        result = 'Publish!'
    }
    else if (goodIdeas > 2){
        result = 'I smell a series!'
    }
    else result = 'Fail!'
    return result;
}

console.log(well(['bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))