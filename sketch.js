function setup() {
  createCanvas(400, 400);
  background("white");
}

function draw() {
  
  //fill("red");
  //stroke("black");
  rect(100, 100, 100, 100);
  
  
  if(mouseIsPressed){
    //rect(mouseX, mouseY, 20, 35);
    fill("red");
  }else{
    fill("green");
  }
}
