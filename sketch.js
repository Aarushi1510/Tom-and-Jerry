var bgImg;
var cat, mouse;
var catImg1,catImg2,catImg3;
var mouseImg1,mouseImg2,mouseImg3;
var bgImg;
function preload() {
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg3 = loadImage("images/mouse4.png");

}
    

function setup(){
    createCanvas(1000,800);
    cat = createSprite(900,400);
    cat.addAnimation("catSleeping",catImg1);
    cat.scale = 0.3;
    mouse = createSprite(100,400);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale =0.15;
}

function draw() {
 background(bgImg);
 if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX = 0;
     cat.addAnimation("catLastImg",catImg3);
     cat.x =300;
     cat.scale = 0.3;
     cat.changeAnimation("catLastImg");
     mouse.addAnimation("mouseLastImg", mouseImg3);
     mouse.scale = 0.15;
     mouse.changeAnimation("mouseLastImg");


 }

 drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.scale = 0.15;
    mouse.changeAnimation("mouseTeasing",mouseImg1);
    mouse.scale = 0.15;
    cat.velocityX =-3;
    cat.addAnimation("catRunning",catImg2);
    cat.scale = 0.3;
    cat.changeAnimation("catRunning");
    cat.scale = 0.3;
    mouse.frameDelay = 25;
    }
}
