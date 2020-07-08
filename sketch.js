
var database, gameState=0;
var form,player,game, allPlayers;
var playerCount;
var car1, car2, car3, car4, cars;
function setup(){
  createCanvas(displayWidth-50,displayHeight-50);
    database= firebase.database();
  game= new Game();
  game.getState();
  game.start();
}

function draw(){
    if(playerCount===4){
      game.update(1);
    }

    if(gameState===1){
      clear ();
      game.play();
    }
    
}

