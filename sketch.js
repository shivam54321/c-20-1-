
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){
  
  createCanvas(1200,400);
}


function draw(){

  // change the value of Red based on the mouse movement about the X axis
  r = map(mouseX,100,400,0,200);
  // change the value of Green based on the mouse movement about the X axis
  g = map(mouseX,400,800,100);
  // change the value of Blue based on the mouse movement about the X axis
  b = map(mouseX,800,1200,250);
  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.
background(r,g,b);
  // Create an ellipse that will move around with you mouse about the X axis.
   fill(255);
ellipse(mouseX,300,20,20);

  // Remember to fill the canvas with white paint before creating the ellipse.
}