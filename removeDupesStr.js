//a function that takes in a string and returns the same string with all duplicates removed.

// const removeDupes = (str) => {

  
// };

// console.log(removeDupes("the quick brown fox jumped over the lazy dog"));
// //input: the quick brown fox jumped over the lazy dog
// //output: thequickbrownfxjumpdvzyg


class Ghost {
  constructor(colors){
    this.colors= colors;
    this.color= function(){ return colors[Math.floor(Math.random()*colors.length-1)+1]} ;
    }
  }
  
//   const colors = ['white','yellow','purple','red']
//   const RNG = Math.floor(Math.random() * colors.length-1)+1
  
  ghost = new Ghost(['white','yellow','purple','red'])

  console.log(ghost.color)

  const colors = ['white','yellow','purple','red']
  function color(colours){
    return colors[Math.floor(Math.random()*colors.length-1)+1]
  }

  console.log(color())