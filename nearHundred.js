//Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

const nearHundred = (num) => {
    let bool 
    if (num <= 210) {
        if (num >= 190) {
            bool = true
        }
        else if (num >= 90) {
            bool = true
        }
        else {
            bool = false
        }
    }
    else if (num <= 110) {
        if (num >= 90) {
            bool = true
        }
    }
    else {
        bool = false
    }
    return bool
}

console.log(nearHundred(111))