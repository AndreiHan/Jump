var ok=0;
var x=200;
var gravity=10;
var xcerc=300;
var ycerc=30;
var speed=1;
var yspeed=15;
var score=0;
var stop=0;
var diff=200;
function setup(){
  createCanvas(600,600);
}
function draw(){
  if(stop==0){
  background(0);
  fill(1000);
  textSize(24);
  text(score, 10, 10, 170, 180);

  rect(x, 500, diff, 30, 20);
  ellipse(xcerc, ycerc, 55, 55);

  if(ok==1){

  if(keyIsDown(LEFT_ARROW)){
    x-=10;
  }
  if(keyIsDown(RIGHT_ARROW)){
    x+=10;
  }
  if(x<0){
    x=0;
  }
  if(x+200>600){
    x=400;
  }
  if(ycerc==480){
    if((xcerc>x)&&(xcerc<x+100)){
      yspeed=-15;
      xcerc+=2;
      speed=-3;
      score+=10;
    }
  }
  if(ycerc==480){
    if((xcerc>x+100)&&(xcerc<x+200)){
      yspeed=-15;
      xcerc-=2;
      speed=3;
      score+=10;
    }
  }
  if(ycerc==0){
    yspeed=10;
  }
  if(xcerc+15>width)
  {
    speed=-4;

  }
  if(xcerc<0){

    speed=3;
  }

  ycerc+=yspeed;
  xcerc+=speed;

  if(ycerc==600){
    fill('red');
    textSize(64);
    text('Score:',170,100,200,200);
    text(score, 360, 100, 200, 200);
    ok=0;
    stop=1;
  }




}}}
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    x=x-20;
  }
  if(keyCode === RIGHT_ARROW){
    x=x+20;
  }
}
function keyPressed(){
  ok=1;
}
