//rightIsosceles(7) ->
// #
// ##
// ###
// ####
// #####
// ######
// #######

//copy this
//no specification on what data type to return
//gonna use arrays for the lolz

const rightIsosceles = (height) => {
    const hash = '#'    
    for (let i = 1; i <= height; i++){
        if (i === height) break;
         console.log(`${hash.repeat(i)}`)
    }        
}


console.log(rightIsosceles(12))