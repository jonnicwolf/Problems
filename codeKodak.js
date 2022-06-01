// We want to create digital picture frames for our clients. 
// Clients have different dimensions of things to frame, but all of them are rectangles. 
// Given the width and the height of an image, we want to return a frame for the image. 
// A basic frame is made up with '*' (asterisks) on the top and bottom and '|' (vertical lines)
//   on the left and right sides. 
// An image that is 4x3 would need a frame like this: 

// ******
// |    |
// |    |
// |    |
// ******

// Write a function to produce these digital frames. The function has two parameters, width and height.
// If you complete this, please modify the function to allow customers to choose custom characters for their frame. 
// They should be able to do this by way of a third parameter.
// The default characters, given above, should be preserved if no third argument is provided.

function codeKodak (width,height,custom){
    let [top,side] = ['*','|'];
    if (custom){
      top=custom[0];
      side=custom[1];
    }
    let result = [];
    for (let i=1; i<=height+2;i++){
      if (i===1){result.push(top.repeat(width+2).concat('\n'));}
      else if (i===height+2){result.push(top.repeat(width+2).concat('\n'));}
      else {result.push(side,' '.repeat(width),side,'\n');};
    };
    return result.join('');
};
  
console.log(codeKodak(3,4,['$','!']));  