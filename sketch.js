var garden, gardenImg;
var  jerry, jerryGroup, jerryOne, jerryFour, jerryThree, jerryTwo;
var tomGroup, tomOne, tomFour, tomThree, tomTwo, tom;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");

    jerryOne = loadAnimation("images/jerryOne.png");
    jerryTwo = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryThree = loadAnimation("images/jerryFour.png");

    tomOne = loadAnimation("images/tomOne.png");
    tomTwo = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomThree = loadAnimation("images/tomFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(870, 600);
    tom.addAnimation("sleeepingTom",tomOne);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("standingJerry", jerryOne);
    jerry.scale=0.15;
}

function draw() {

    background(gardenImg);

    if(tom.x-jerry.x < tom.width/2+jerry.width/2){
        tom.velocityX = 0;
        tom.addAnimation("tomLast", tomThree);
        tom.changeAnimation("tomLast");
        //tom.x =300;
        tom.scale = 0.2;
   
        jerry.addAnimation("jerryLast", jerryThree);
        jerry.changeAnimation("jerryLast");
        jerry.scale=0.15;
    }
    
    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomTwo);
        tom.changeAnimation("tomRunning");
        tom.scale = 0.2;
        
        jerry.addAnimation("jerryTeasing", jerryTwo);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
        jerry.scale=0.15;
    }
 }
