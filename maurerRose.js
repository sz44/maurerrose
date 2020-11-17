let n = 5,
    d = 29;

let show = false;
let toValue = 360;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  dSlider = createSlider(1,360,1);
  button = createButton('guide');
  //button.position(0, 400);
  button.mousePressed(turnOff);
}

function turnOff() {
  show = !show;
}

function draw() {
  background(0);
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(1);
  toValue = dSlider.value();
  
  noFill();
  beginShape();
  for (let i = 0; i < 360-toValue; i++) {
    let k = i * d
    let r = 300 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x,y);
  }
  endShape();
  
  
  if (show==true) {
    noFill();
    stroke(255,0,255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < toValue; i++) {
      let k = i 
      let r = 300 * sin(n * k);
      let x = r * cos(k);
      let y = r * sin(k);
      vertex(x,y);
    }
    endShape();
  
  
  }

  //n += 0.01;

  
  // how to make it occilate between 0 and 10?
  
  /*
  let up = 0.001
  if u
  if(up) {
    n += 0.001;
    d += 0.001; 
    
  }
  n = 10 * sin(n)
  
  
  sin(0) to sin(180)
  
  sin(alpha % 10)
  */
}