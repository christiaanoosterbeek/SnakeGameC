rez = 20
let w;
let h;

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
}

function draw() {
  background(220);
  ellipse(50,50,80,80);
}