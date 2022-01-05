
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
    
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")

}

function setup() {
    
    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;

    //creating invisible sprite
    invisibleSprite = createSprite(300,190,600,20)
    invisibleSprite.visible = false
    
    //checking trex y position
   
}

function draw() {

    background(220);
    console.log(trex.y)
    //jump when the space button is pressed
    if (keyDown("space")&& trex.y>=156) {
        trex.velocityY = -13;

    }
    //Gravity force of the trex
    trex.velocityY = trex.velocityY + 0.8
    
    //resetting the ground
    if (ground.x < 0) {
        ground.x = ground.width / 2;

    }
    //to avoid the trex from falling into the ground
    trex.collide(invisibleSprite);
    
    //draw sprites
    drawSprites();

}
