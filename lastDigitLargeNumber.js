/**
 * Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^ba 
b
 . Note that aaa and bbb may be very large!

For example, the last decimal digit of 979^79 
7
  is 999, since 97=47829699^7 = 47829699 
7
 =4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2 
200
 ) 
2 
300
 
 , which has over 109210^{92}10 
92
  decimal digits, is 666. Also, please take 000^000
  to be 111.
  */

function lastDigit (str1, str2){        
    const str1_last = str1[str1.length-1]
    const exponent = str2%4
    let product
    if (str2%4===0){
        let exp = 4
        let result = String(str1[str1.length-1]*exp).split('')
        console.log(result)
        return result[result.length-1]
        
    }
}

// console.log(lastDigit("4", "1"), 4);
// console.log(lastDigit("4", "2"), 6);
// console.log(lastDigit("9", "7"), 9);
// console.log(lastDigit("10","10000000000"), 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
// console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);