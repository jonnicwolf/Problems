function median(values) {
    values.sort((a,b)=> a-b)
    return (values.length % 2 === 0) 
        ?  (values[values.length/2] 
            +values[(values.length/2)+1]
          ) / 2
        : values[Math.floor(values.length/2)]
}

const nums = [
  14, 11, 16, 15,
  13, 16, 15, 17,
  19, 11, 12, 14,

  19, 

  11, 15, 17,11, 
  18, 12, 17,12, 
  71, 18, 15, 12,
];

console.log(median(nums));