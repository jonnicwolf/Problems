// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

const monkeyTrouble = (a, b) => {
    if (a && b) {
        return true
    }
    else if (!a && !b) {
        return true
    }
    else {
        return false
    }
}

console.log(monkeyTrouble(true, false))