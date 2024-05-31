function isPalindrome (s) {
    const processed_s =
    s.toLowerCase()
    .split('')
    .filter(item => item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122 || item.charCodeAt(0) >= 48 && item.charCodeAt(0) <= 57)

    return processed_s.join('') === processed_s.reverse().join('')
};

//console.log(isPalindrome("A man, a plan, a canal: Panama"))
//console.log(isPalindrome("race a car")); // true
// console.log(isPalindrome("abbc")); // false
// console.log(isPalindrome("c")); // true
// console.log(isPalindrome("")); // false
// console.log(isPalindrome("abBA")); // true
// console.log(isPalindrome("Madam, I'm Adam")); // true
// console.log(isPalindrome(51615))
console.log(isPalindrome('0P'))