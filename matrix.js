/* Function receive a two-dimensional square array of random integers. 
   On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 
   (Note: 0 is considered non-negative, here).
*/
const matrix = array => {
    //loop through the whole array once
    //use that iterator to target the indx of element array
    //if iterator >= 0 array[array[iterator]] = 0
    //els array[array[iterator]] = -1
    
    for (let i = 0, len = array.length; i < len; i++) {
        console.log(array[i][i])
        if (array[i][i] < 0) {
            array[i][i] = 0
        }
        else {
            array[i][i] = 1
        }
    }
    return array
    
}
const array = [
    [-1,  4, -5, -9,  3 ],
    [ 6, -4, -7,  4, -5 ],
    [ 3,  5,  0, -9, -1 ],
    [ 1,  5, -7, -8, -9 ],
    [-3,  2,  1, -5,  6 ]
]
console.log(matrix(array))

/* input
    const array = [
        [-1,  4, -5, -9,  3 ],
        [ 6, -4, -7,  4, -5 ],
        [ 3,  5,  0, -9, -1 ],
        [ 1,  5, -7, -8, -9 ],
        [-3,  2,  1, -5,  6 ]
    ]
*/

/* output
    [
        [ 0,  4, -5, -9,  3 ],
        [ 6,  0, -7,  4, -5 ],
        [ 3,  5,  1, -9, -1 ],
        [ 1,  5, -7,  0, -9 ],
        [-3,  2,  1, -5,  1 ]
    ]
*/
