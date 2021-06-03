const isPerfectSquare = (num) => {
    const sqRt = Math.round(Math.sqrt(num))
    const product = sqRt*sqRt
    return product === num ? true : false
}

