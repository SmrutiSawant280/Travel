var canvas,backgroundImg;
var gameState = 0,playerCount,form,player,game;
var viennaImg,switzerlandImg,edinburghImg,costabravaImg,nycImg,distance = 0,
mauritiusImg,indiaImg;
var i,c;
var allPlayers;
var button1;
var database,position;
var bg;

function preload(){
    indiaImg = loadImage("india.jpg");
    mauritiusImg = loadImage("mauritius.jpg");
    costabravaImg = loadImage("costaBrava.jpg");
    edinburghImg = loadImage("edinburgh.png");
    nycImg = loadImage("nyc.jpg");
    viennaImg = loadImage("vienna.jpg");
    switzerlandImg = loadImage("switzerland.jpg");
    bg = loadImage("bg.png");
}
function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    //background(bg);

    if(playerCount === 1){
        game.update(1);
    } 
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}

