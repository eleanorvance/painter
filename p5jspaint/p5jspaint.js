var high = 600;
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
 var slidewide = 40;
//color buttons
  var rb=240+csX;
  var bb=150+csX;
  var gb=255/2+csX;
//COLORS
  var r=255/2;
  var g=255/2;
  var b=255/2;
  
//size slider
  var sizeY = gs + 2*csp;
  var sizeb = csX + csl/2;
  var size;
  
//sample
  var samplelocX = tbc;
  var samplelocY = 75;
  var samplesize = 50;
  var num=20;
  //sample bg
  var samplebg = 255;

//drawing options
  var mode = 1;

//BACKGROUND
  //mode
 var bg;
 //center
 var bgX = wide/2 +150;
 var bgY = high/2;

function setup(){
  createCanvas(1200,600);
  
  noStroke();
  fill(255);
  //rect(canvasx,canvasst,canvasl,canvash);
  
  bg = int(random(1,3));
  

}

function draw(){
  imageMode(CENTER);
    if (bg==1){
  loadImage('data/twombley_synopsis1.png', img1 =>  {
    
    image(img1,bgX,bgY,655,500);
      });
    bg=0;
  }
  if(bg==2){
    loadImage('data/bouguereau_wave2.png', img2 =>  {
    
    image(img2,bgX,bgY,662,500);
      });
    bg=0;
  }
  
 

 rad = random(-size,size);
  theta = random(TWO_PI);
  var glitterX = mouseX + rad * cos(theta);
  var glitterY = mouseY + rad * sin(theta);
  var gcolorR = r + random(-25,25);
  var gcolorG = g + random(-25,25);
  var gcolorB = b + random(-25,25);
    
//MOUSE PAINT
  if(mouseX>canvasx && mouseX<canvasx+canvasl && mouseY>canvasst && mouseY<canvash && mouseIsPressed){
    
    if(mode==1){
   fill(r,g,b);
  ellipse(mouseX,mouseY,size,size);
    }else if(mode==2){
//AIRBRUSH
      for(var ii=0; ii<size; ii++){
  fill(r,g,b,255/ii);
  ellipse(mouseX,mouseY,ii,ii);
      }
      
  }else if(mode==3){
//SPARKLE
  

  for (var gn=0; gn<random(5,30); gn++){

    fill(gcolorR,gcolorG,gcolorB,255/(1.25*gn));
    ellipse(glitterX,glitterY,gn,gn);
    fill(gcolorR,gcolorG,gcolorB);
    ellipse(glitterX,glitterY,gn/5,gn/5);     
      }
  
      }
  }
 
  
 
  
//toolbar
fill(150);
noStroke();
rect(0,0,300,tbh);
//save button

fill(0);
rect(10,10,40,40);
fill(255);
triangle(10,30,50,30,30,50);
rect(20,10,20,25);


//sample
if(r>220 && g>220 && b>220){
  samplebg = 0;
}else{
  samplebg = 255;
}
rectMode(CENTER);
fill(samplebg);
rect(samplelocX,samplelocY,100,100);
rectMode(CORNER);
if(mode==1){
  fill(r,g,b);
  ellipse(samplelocX,samplelocY,size,size);
  }
 if(mode==2){
  for(var i=0; i<size; i++){
  fill(r,g,b,255/i);
  ellipse(samplelocX,samplelocY,i,i);
  }
 }
  if(mode==3){
     
     for (var sa=0; sa<20; sa++){

    fill(r,g,b,255/(1.25*sa));
    ellipse(samplelocX+size/2,samplelocY+size/2,sa,sa);
    ellipse(samplelocX-size/2,samplelocY-size/2,sa-5,sa-5);
    ellipse(samplelocX-size/2,samplelocY+size/2,sa+5,sa+5);
    fill(r,g,b);
    ellipse(samplelocX+size/2,samplelocY+size/2,3,3); 
    ellipse(samplelocX-size/2,samplelocY-size/2,2,2);
    ellipse(samplelocX-size/2,samplelocY+size/2,2,2);    
      }
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

//size slider
  stroke(255);
  strokeWeight(5);
  line(csX,sizeY,csX+csl,sizeY);
  fill(255,100);
  noStroke();
  ellipse(csX,sizeY,10,10);
  ellipse(csX+csl,sizeY,40,40);
//size button
  noFill();
  stroke(255);
  ellipse(sizeb,sizeY, slidewide,slidewide);
if (dist(mouseX,mouseY,sizeb,sizeY)<slidewide/2 && mouseIsPressed){
  sizeb = constrain(mouseX,csX,csX+csl);
}
//SIZE
size = (dist(csX,sizeY,sizeb,sizeY)/csl)*75;



//MODE BUTTONS
var modeY=sizeY+2*csp;
noStroke();
fill(0);
//ONE
ellipse(csX+20,modeY,50,50);
  if(dist(mouseX,mouseY,csX+20,modeY)<50 && mouseIsPressed){
   mode = 1; 
  }
//TWO
for(var i=0; i<50; i++){
  fill(0,0,0,255/i);
  ellipse(csX+csl/2,modeY,i,i);
      }
  if(dist(mouseX,mouseY,csX+csl/2,modeY)<50 && mouseIsPressed){
    mode=2;
  }
//THREE
rectMode(CENTER);
noStroke();
fill(150);
rect(csX+csl-20,modeY,75,75);

for (var s=0; s<20; s++){

    fill(0,255/(1.25*s));
    ellipse(csX+csl-20,modeY,s,s);
    ellipse((csX+csl-50),(modeY-20),s-5,s-5);
    ellipse((csX+csl-45),(modeY+20),s+5,s+5);
    fill(0);
    ellipse(csX+csl-20,modeY,3,3); 
    ellipse((csX+csl-50),(modeY-20),2,2);
    ellipse((csX+csl-45),(modeY+20),2,2);
      }
if(dist(mouseX,mouseY,csX+csl-20,modeY)<40 && mouseIsPressed){
 mode=3; 
}
rectMode(CORNER);  


  
}

function mousePressed(){
  if(mouseX<50 && mouseY<50){
let pic = get(canvasx,canvasst,canvasl,canvash);
  pic.save('myPainting.png');
  noLoop();
  }else{
    loop();
  }
}
