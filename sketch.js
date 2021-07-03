var gameState=0;
var playerCount,canvas;
var player
var database

function preLoad(){
  car1_img = loadImage("../js/car1.png");
  car2_img = loadImage("../js/car2.png");
  car3_img = loadImage("../js/car3.png");
}

function setup() {
  canvas=createCanvas(displayWidth-20, displayHeight-30);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw() {
  background("blue"); 
  if(playerCount===4){
game.update(1);
  }
  if(gameState===1){
    game.play();
  }
}