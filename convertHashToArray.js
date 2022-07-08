/**
 * Convert a hash into an array. Nothing more, Nothing less.

{name: 'Jeremy', age: 24, role: 'Software Engineer'}
should be converted into

[["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
Note: The output array should be sorted alphabetically.*/

function convertHashToArray (hash){
    return Object.entries(hash).sort()
}
//time complexity: n(log(n))
console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))