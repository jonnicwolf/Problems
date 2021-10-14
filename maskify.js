//Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = (cc)=> {    
    let mask = cc.split('')
    for (let i = cc.length-5; i >= 0; i--){
        i === ' '
            ? mask[i] = ' '
            : mask[i] = '#'
    }
    return mask.join('')
  }
  
  console.log(maskify('1234412378944561'))
  console.log(maskify("Skippy"))
  console.log(maskify("Nananananananananananananananana Batman!"))

