class Ghost {
  // your code goes here
  constructor(colors){
    this.colors = colors;
  }
  get color() {return this.rngColor()};
  rngColor(){ return colors[Math.random(Math.floor*colors.length-1)+1] };
};

let colors = ['white','yellow','purple','red'];
let ghost = new Ghost(colors);

console.log(ghost.color)










































  1




  





  
