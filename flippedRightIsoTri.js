const flippedRightIso = height => {
    const hash  = '#'
    for (let i = height; i >= 1; i--){
        console.log(`${hash.repeat(i)}`)
    }
};

console.log(flippedRightIso(6))