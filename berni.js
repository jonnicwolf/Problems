// + - / *
// % 
// && <- AND
// || <- OR
// true <- everything has to be true. there can't be a false
// ===> TRUE && TRUE = TRUE
// ==> TRUE && FALSE = FALSE
// ===> FALSE && TRUE = FALSE
// ===> FALSE && FALSE = FALSE

// ===> TRUE || TRUE = TRUE
// ===> TRUE || FALSE = TRUE
// ==> FALSE || FALSE = FALSE
// ===> FALSE || TRUE = TRUE

// = <- assignment operator ? it assigns values

// declare variable assignment value
       let berni_age    =       29 // non constant variable. These can be reassigned.
       console.log(berni_age) // 29
       berni_age = 21 // Here we reassign berni_age to 21
       console.log(berni_age) // 21
       
       const fezz_age = 29 // constant variable. It CANNOT be reassigned

       // == <- double equals <= forget this exists, don't ever use it or think about it ever again
       // === <- trip equals <- remember forever
       // === checks something's truth

console.log( 2 + 2 === 4 ) //true
console.log( true && true ) // true
console.log( true && false ) // false
console.log( true && true === true ) //true

// the very last one is the not true
// !== this is a bang with two equals instead of three
// it means if something is NOT true

console.log( 2 + 2 !== 5 ) // true




