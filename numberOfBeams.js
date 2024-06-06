/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  let result = 0
  const dbr = bank.map(item => item.split('').reduce((cur, val) => Number(cur) + Number(val), 0))

  function remove_zeros (dl) {
    let valid_d = []
    dl.forEach(num => num !== 0 ? valid_d.push(num) : null)
    return valid_d
  }

  const vdl = remove_zeros(dbr)
  console.log(vdl)
  if (vdl.length < 2) return result

  for (let i=1; i<vdl.length; i++) {
    result += vdl[i-1] * vdl[i]
  }

  return result
};

console.log(numberOfBeams(["011001","000000","010100","001000"]))
console.log(numberOfBeams(['000','111','000']))
console.log(numberOfBeams(['1','0','1', '0']))
