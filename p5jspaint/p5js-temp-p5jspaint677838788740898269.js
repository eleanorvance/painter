//https://git.io/JkL4g

function preload(){
  mundi = loadImage('data/mundi.png');
  
  mode4 = loadImage('data/pinkpearl.png');
  
  seurat = loadImage('data/seurat.jpg');
  
  mode5 = loadImage('data/sparkleeraser.png');
  
  mode7 = loadImage('data/dropper.png');
  
  bottle = loadImage('data/bottleempty3.png');
  
  renoir = loadImage('data/renoir.png');
  
  graph = loadImage('data/graph.png');
  
  picasso = loadImage('data/picasso.png');
  
  rothko = loadImage('data/rothko.png');
  
  toter = loadImage('data/toter.png');
}

var high = 650;
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
 //image size
 var iwide;
 var ihigh=500;
 

function setup(){
  createCanvas(1200,650);
  
  noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
  
  bg = int(random(1,6));
  
  rb = random(csX,csX+255);
  gb = random(csX,csX+255);
  bb = random(csX,csX+255);
  

}

function draw(){
  
  imageMode(CENTER);
    if (bg==1){
  noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
      image(mundi,bgX,bgY,340,500);    
     img2 = mundi;
    iwide=340;
    bg=0;
  }
  if(bg==2){  
 noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
    image(rothko,bgX,bgY,436,500);
    img2 = rothko;
    iwide=436;
    bg=0;
  }
  if(bg==3){
 noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
    image(renoir,bgX,bgY,671,500);
    img2=renoir;
    iwide=671;
    bg=0;
  }
  if(bg==4){
noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
    image(graph,bgX,bgY,900,500);
    img2=graph;
    iwide=900;
    bg=0;
  }
  if(bg==5){
noStroke();
  fill(255);
  rect(canvasx,canvasst,canvasl,canvash);
    image(picasso,bgX,bgY,500,500);
    img2 = picasso;
    iwide = 500;
    bg=0;
  }
  
 

 rad = random(-size,size);
  theta = random(TWO_PI);
  var glitterX = mouseX + rad * cos(theta);
  var glitterY = mouseY + rad * sin(theta);
  var gcolorR = r + random(-25,25);
  var gcolorG = g + random(-25,25);
  var gcolorB = b + random(-25,25);
  
//variables for erase and point
  var eR;
  var etheta;
  var eX;
  var eY;
  var eW;
  var eA;
  

  var picX = eX-bgX+iwide/2;
  var picY = eY-bgY+ihigh/2;
    
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
      
  //ERASER
      }else if(mode==4){
          for(let i=0; i<size ; i++){
    
   eR = random(-size/2-10,size/2+10);
  etheta = random(360);
  eX = mouseX + eR * cos(etheta);
  eY = mouseY +  eR * sin(etheta);
  eW = random(2,3);
  eA = 150;  

  picX = eX-bgX+iwide/2;
  picY = eY-bgY+ihigh/2;
  
  c = img2.get(picX,picY);

  
  noStroke();
  fill(c,eA);
  ellipse(eX,eY,eW,eW);
    }
    
     }else if(mode==5){
//SPARKLE ERASER mouse
       
       rad = random(-size,size);
  theta = random(TWO_PI);
  let glitterX = mouseX + rad * cos(theta);
  let glitterY = mouseY + rad * sin(theta);
  let picX = glitterX-bgX+iwide/2;
  let picY = glitterY-bgY+ihigh/2;
  let c = img2.get(picX,picY);
  let gcolorR = red(c) + random(-10,10);
  let gcolorG = green(c) + random(-10,10);
  let gcolorB = blue(c) + random(-10,10); 
  
    
  for (let gn=0; gn<random(10,30); gn++){

    fill(gcolorR,gcolorG,gcolorB,255/(1.25*gn));
    ellipse(glitterX,glitterY,gn,gn);
    fill(gcolorR+20,gcolorG+20,gcolorB+20);
    ellipse(glitterX,glitterY,gn/5,gn/5);     
      }

      
       
       
       
     }else if(mode==6){
//POINTILLISM mouse
  for(let r=0;r<5;r++){
 //REDS
    rR = random(-size/2,size/2);
    rtheta = random(360);
         var rR = random(-size/2,size/2);
        var rtheta = random(360);
    rX = mouseX + rR * cos(rtheta);
    rY = mouseY +  rR * sin(rtheta);
    let rpicX = rX-bgX+iwide/2;
      let rpicY = rY-bgY+ihigh/2;
      let c3 = get(rX,rY);
      let rred = red(c3)+random(-10,10);
      let rgreen = green(c3)+random(-5,5);
      let rblue = blue(c3)+random(-5,5);
       let rW = random(2,7);
      
      fill(rred,rgreen,rblue);
         ellipse(rX,rY,rW,rW/2);
      
      
  }
       for(let p=0; p<10; p++){
         
    eR = random(-size/2,size/2);
    etheta = random(360);
         var pR = random(-size/2,size/2);
        var ptheta = random(360);
    eX = mouseX + eR * cos(etheta);
    eY = mouseY +  eR * sin(etheta);
        var pY = mouseY +  pR * sin(ptheta);
        var pX = mouseX + pR * cos(ptheta);
    
    eW = random(2,10);
      

  picX = eX-bgX+iwide/2;
  picY = eY-bgY+ihigh/2;
      
  
  c = get(eX,eY);
  let pred = red(c);
  let pgreen = green(c);
  let pblue = blue(c);
  
      let ppicX = pX-bgX+iwide/2;
      let ppicY = pY-bgY+ihigh/2;
      let c2 = get(pX,pY);
      let pred2 = red(c2)+random(-5,5);
      let pgreen2 = green(c2)+random(-5,5);
      let pblue2 = blue(c2)+random(-10,10);
      
         

         fill(pred2,pgreen2,pblue2);
         ellipse(pX,pY,eW,eW/2);
         
         fill(pred,pgreen,pblue);
         ellipse(eX,eY,eW,eW/2);
         
         
         
       }
     }else if(mode==7){
       
       let drop=get(mouseX,mouseY);
       
       rb = red(drop)+csX;
       gb = green(drop)+csX;
       bb = blue(drop)+csX;
       
     }
   
   //end canvas restrictions
  }
 
  
 
  
//toolbar
fill(250,200,50);
noStroke();
rect(0,0,300,tbh);
//save button

//DOWNLOAD
fill(0);
rect(240,10,40,40);
fill(255);
triangle(240,30,280,30,260,50);
rect(250,10,20,25);

//TRASH
image(toter,25,30,60,60);


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
 if(mode==7){
   
   let bot = get(mouseX,mouseY);
   let rbot = red(bot);
   let gbot = green(bot);
   let bbot = blue(bot);
   fill(rbot,gbot,bbot);
   rectMode(CENTER);
   rect(samplelocX,samplelocY,100,100);
   image(bottle,samplelocX,samplelocY,100,100);
   
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
//vertial space
var modesp = 75;
noStroke();
fill(0);
//ONE
ellipse(csX+20,modeY,50,50);
  if(dist(mouseX,mouseY,csX+20,modeY)<modesp/2 && mouseIsPressed){
   mode = 1; 
  }
//TWO
for(var i=0; i<50; i++){
  fill(0,0,0,255/i);
  ellipse(csX+csl/2,modeY,i,i);
      }
  if(dist(mouseX,mouseY,csX+csl/2,modeY)<modesp/2 && mouseIsPressed){
    mode=2;
  }
//THREE
rectMode(CENTER);
noStroke();
fill(250,200,50);
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
if(dist(mouseX,mouseY,csX+csl-20,modeY)<modesp/2 && mouseIsPressed){
 mode=3; 
}


//FOUR
//csX+20
    
    image(mode4,csX+20,modeY+modesp,75,75);
 if(dist(mouseX,mouseY,csX+20,modeY+modesp)<modesp/2 && mouseIsPressed){
   mode=4;
 }
 
//SPARKLE ERASER BUTTON
    image(mode5,csX+csl/2,modeY+modesp-10,100,100);
  if(dist(mouseX,mouseY,csX+csl/2,modeY+modesp)<modesp/2 && mouseIsPressed){
  mode = 5;
}
//POINTILLISM BUTTON

image(seurat,csX+3*modesp,modeY+modesp,50,51);
if(dist(mouseX,mouseY,csX+3*modesp,modeY+modesp)<modesp/2 && mouseIsPressed){
  mode=6;
}

//7 EYEDROPPER
if(dist(mouseX,mouseY,csX+20,modeY+2*modesp)<modesp/2 && mouseIsPressed){
  mode = 7;
}

image(mode7, csX+20,modeY+2*modesp,60,60);

rectMode(CORNER);    


}

function mousePressed(){
  if(dist(mouseX,mouseY,240,30)<40){
let pic = get(canvasx,canvasst,canvasl,canvash);
  pic.save('myPainting.png');
  noLoop();
  }else{
    loop();
  }
  
  if(mouseX<60 && mouseX>10 && mouseY<60 && mouseY>10){
    bg=int(random(1,6));
    noLoop();
  }
  
  
  
}
