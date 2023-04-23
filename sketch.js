var bgImg,bunnyImg,bunny;
var bowl,bowlImg;
var appleImg,apple,beetImg,beet,cabbageImg,cabbage;
var carrotImg,carrot,pear,pearImg;
var carrotGrp,pearGrp,cabbageGrp,appleGrp;
var score=0,count=0;
var bunnyArray,bunny1,bunny2,bunny3,bunny4,bunny5,bunny;




function preload(){
  bgImg=loadImage("continuous_grass.png");
  bunnyImg=loadImage("cuteanimals_bunny.png");
  bowlImg=loadImage("bowl.png");
  cabbageImg=loadImage("cabbage.png");
  carrotImg=loadImage("carrot.png");
  pearImg=loadImage("pear.png");
  appleImg=loadImage("apple_1.png");
  collidedSound = loadSound("mixkit-fairy-cartoon-success-voice-344.wav");
}




function setup(){
    createCanvas(1200,600);
    var x=40;
  /* for(i=0;i<5;i++){
    bunny=createSprite(x,40);
    x=x+35;
    bunny.addImage(bunnyImg);
    bunny.scale=0.08;
  }*/
  bowl=createSprite(100,520);
  bowl.addImage(bowlImg);
  bowl.scale=1.5;
  //bowl.debug = true;
  bowl.setCollider("rectangle", 0,0,40,40)

  bunny1=createSprite(40,40);
  bunny1.addImage(bunnyImg);
  bunny1.scale =0.08;

  bunny2=createSprite(70,40);
  bunny2.addImage(bunnyImg);
  bunny2.scale =0.08;

  bunny3=createSprite(110,40);
  bunny3.addImage(bunnyImg);
  bunny3.scale =0.08;

  bunny4=createSprite(145,40);
  bunny4.addImage(bunnyImg);
  bunny4.scale =0.08;

  bunny5=createSprite(175,40);
  bunny5.addImage(bunnyImg);
  bunny5.scale =0.08;

  bunnyArray=[bunny1,bunny2,bunny3,bunny4,bunny5]



  


  appleGrp=new Group();
  pearGrp=new Group();
  carrotGrp=new Group();
  cabbageGrp=new Group();


  edges=createEdgeSprites();
  

    
}





function draw(){
  background(bgImg)
  bowl.x=mouseX;
  drawApple();
  drawPear();
  drawCabbage();
  drawCarrot();

  if(appleGrp.isTouching(bowl)){
    //console.log("")
    appleGrp.destroyEach()
    collidedSound.play();
    score=score+1;
  }

  if(pearGrp.isTouching(bowl)){
    //console.log("")
    pearGrp.destroyEach()
    collidedSound.play();
    score=score+1;
  }

  if(cabbageGrp.isTouching(bowl)){
    //console.log("")
    cabbageGrp.destroyEach()
    collidedSound.play();
    score=score+1;
  }

  if(carrotGrp.isTouching(bowl)){
    //console.log("")
    carrotGrp.destroyEach()
    collidedSound.play();
    score=score+1;

  }

  textSize(20);
  stroke(3);
  fill("black")
  text("Score: "+ score, 50,20);
  text("count"+count,1000,70);

if(score%10==0 && score>0){
  textSize(20);
  stroke(3);
  fill("black")
  text("Good Job!! " ,700,90);
 
}

if(appleGrp.collide(edges[3])||cabbageGrp.collide(edges[3])||carrotGrp.collide(edges[3])||
    pearGrp.collide(edges[3])){
  count++
}
if(count%10==0 && count>0){
  score=score-1;
  bunnyArray.pop();
  bunnyArray.display();
}



drawSprites()
}



function drawApple(){
  if(frameCount%100==0){
  apple=createSprite( Math.round(random(200,1150)),0);
  apple.addImage(appleImg);
  apple.scale=0.1;
  apple.velocityY=4;
  apple.lifetime=150;
  appleGrp.add(apple);
  apple.debug=false;
  }
  

}



function drawPear(){
  if(frameCount%150==0){
    pear=createSprite( Math.round(random(300,1190)),0);
    pear.addImage(pearImg);
    pear.scale=0.15;
    pear.velocityY=3;
    pear.lifetime=200;
    pearGrp.add(pear);

  }
}


function drawCabbage(){
  if(frameCount%200==0){
  cabbage=createSprite( Math.round(random(250,1000)),0);
  cabbage.addImage(cabbageImg);
  cabbage.scale=0.1;
  cabbage.velocityY=4;
  cabbage.lifetime=150;
  cabbageGrp.add(cabbage);

}
}

function drawCarrot(){
  if(frameCount%280==0){
    carrot=createSprite( Math.round(random(300,1150)),0);
    carrot.addImage(carrotImg);
    carrot.scale=0.8;
    carrot.velocityY=5;
    carrot.lifetime=120;
    carrotGrp.add(carrot);

  }
}
