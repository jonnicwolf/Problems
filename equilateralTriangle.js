const equilateralTriangle = height => {
    const space = ' '
    const hash = '#'
    for (let i = 1, j = height; i <= height; i++, j--){
        if (i === height) console.log(`${hash.repeat(i)}`);
        console.log(`${space.repeat(j/2)}${hash.repeat(i)}${space.repeat(Math.round(j/2))}`)
    }
}
console.log(equilateralTriangle(6))


