var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score = 0

var redBallGroup 
var greenBallGroup 
var blueBallGroup
var pinkBallGroup

var arrowGroup 

function preload(){
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png")
  pink_balloonImage = loadImage("pink_balloon0.png")
  blue_balloonImage = loadImage("blue_balloon0.png")
}

function setup() {
  createCanvas(400, 400);

  redBallGroup = new Group()
  greenBallGroup = new Group()
  blueBallGroup = new Group()
  pinkBallGroup = new Group()

  arrowGroup = new Group()
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
  background(0);
  
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = mouseY

  if (bow.y <= 40) {
    bow.y = 40
  }
  if (bow.y >= 360) {
    bow.y = 360
  }
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    createArrow();
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if (select_balloon == 2) {
      blueBalloon()
    }
    else if (select_balloon == 3) {
      greenBalloon()
    }
    else {
      pinkBalloon()
    }
  }

  if (redBallGroup.isTouching(arrowGroup)) {
    redBallGroup.destroyEach()
    arrowGroup.destroyEach()
    score = score - 10
  }
  else if (blueBallGroup.isTouching(arrowGroup)) {
    blueBallGroup.destroyEach()
    arrowGroup.destroyEach()
    score = score - 1
  }
  else if (greenBallGroup.isTouching(arrowGroup)) {
    greenBallGroup.destroyEach()
    arrowGroup.destroyEach()
    score = score + 3
  }
  else if (pinkBallGroup.isTouching(arrowGroup)) {
    pinkBallGroup.destroyEach()
    arrowGroup.destroyEach()
    score = score + 10
  }

  drawSprites();

  textSize(20)
  text("Score: " + score,270,30)
}

// Creating  arrows for bow
 function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;

  arrowGroup.add(arrow)
}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

  redBallGroup.add(red)
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;

  blueBallGroup.add(blue)
}
function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;

  greenBallGroup.add(green)
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;

  pinkBallGroup.add(pink)
}
