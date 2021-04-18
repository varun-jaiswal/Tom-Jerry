var jerryImg1, jerryImg2, jerryImg3, jerryImg4, jerry;
var tomImg1, tomImg2, tomImg3, tomImg4, tom;
var backImg, background;

function preload() {
    //load the images here
    jerryImg1 = loadImage("images/mouse1.png");
    jerryImg2 = loadImage("images/mouse2.png");
    jerryImg3 = loadImage("images/mouse3.png");
    jerryImg4 = loadImage("images/mouse4.png");

    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadImage("images/cat2.png");
    tomImg3 = loadImage("images/cat3.png");
    tomImg4 = loadImage("images/cat4.png");

    backImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite (500,300,1000,800);
    background.addImage ("background", backImg);
    background.scale= 1.3
    
    tom = createSprite(800,475);
    tom.addImage ("tom", tomImg1);
    tom.scale = 0.25;
    
    jerry = createSprite(100,500);
    jerry.addImage ("jerry", jerryImg1);
    jerry.scale = 0.13;

   
}

function draw() {

   
    //Write condition here to evalute if tom and jerry collide
    if (keyWentDown("LEFT_ARROW")){
        tom.velocityX = -3;
        tom.addAnimation("tom",tomImg2, tomImg3);
        jerry.addAnimation("jerry", jerryImg2, jerryImg3);
    }

    if (tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.addImage("tom", tomImg4);
        jerry.addImage("jerry", jerryImg4);
        tom.velocityX = 0;
        jerry.velocityX = 0;
    }
    
    drawSprites();
}
