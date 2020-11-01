var high = 800;
var wide = 1200;
//canvas
var  canvasx=300;
  //length
var  canvasl=wide-canvasx;
//start and height
var canvasst = 0;
var canvash = high;

//toolbar
//midpoint
var tbc = canvasx/2;
//height
var tbh = high;

//color slider
  //g slider height (middle)
  var gs=200;
  //space b/t color sliders
  var csp=50;
  //begin slider
  var csX= 20 ;
  //length
  var csl=255;
//
slidewide= 40;
//color buttons
  var rb=255/2+csX;
  var bb=255/2+csX;
  var gb=255/2+csX;
//COLORS
  var r=255/2;
  var g=255/2;
  var b=255/2;



function setup(){
  createCanvas(1200,800);
  noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
}

function draw(){
  
//sidebar
fill(150);
noStroke();
rect(0,0,300,height);


  
//mouse within canvas and pressed
  if(mouseX>canvasx && mouseX<canvasx+canvasl && mouseY>canvasst && mouseY<canvash && mouseIsPressed){
   fill(r,g,b);
  ellipse(mouseX,mouseY,100,100);
      }
  
  //color slider
//lines
stroke(255);
strokeWeight(5);
  //red
  line(csX,gs-csp,csX+csl,gs-csp);
  //green
  line(csX,gs,csX+csl,gs);
  //blue
  line(csX,gs+csp,csX+csl,gs+csp);
//buttons
stroke(255,150);
strokeWeight(2);
  //red
  r=dist(rb,gs-csp,csX,gs-csp);
  fill(r,0,0,150);
  ellipse(rb,gs-csp,slidewide,slidewide);
  if(dist(mouseX,mouseY,rb,gs-csp)<=slidewide/2&&mouseIsPressed){
    rb=constrain(mouseX,csX,csX+csl);
  }
  //green
  g=dist(gb,gs,csX,gs);
  fill(0,g,0,150);
  ellipse(gb,gs,slidewide,slidewide);
  if(dist(mouseX,mouseY,gb,gs)<=slidewide/2&& mouseIsPressed){
   gb=constrain(mouseX,csX,csX+csl); 
  }
  //blue
  b=dist(bb,gs+csp,csX,gs+csp);
  fill(0,0,b,150);
  ellipse(bb,gs+csp,slidewide,slidewide);
  if(dist(mouseX,mouseY,bb,gs+csp)<=slidewide/2&&mouseIsPressed){
   bb=constrain(mouseX,csX,csX+csl); 
  }
  
}
