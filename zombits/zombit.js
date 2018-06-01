var game;
var player;
var zombie;
var zombies;
var pellet;
var pellets = [];
var timer;
var time;
var timeMAX = 30;
var score = 0;
var scoreMax = 1000;

function putZombies(){
    zombies = [];
    for(var i = 0; i < 7; i++){
        zombies.push(new Zombie());
    }
}

function checkCollisions(indexZombies){
    if (pellet.collidesWith(zombies[indexZombies])){
        zombies[indexZombies].respawn();
        score += 100;
    }
    
    if (player.collidesWith(zombies[indexZombies])){
        alert("You Lose!!!");
        game.stop();
    }

}

function checkScore(){
    if (score > scoreMax){
        alert("You Won!!!");
        game.stop();
    }
}

function checkTimer(){
    sceneTime = time.getElapsedTime();
    if(sceneTime > timeMAX){
        alert("You Lose!!!");
        game.stop();
    }
}

function updateGUI(){
    gui.innerHTML = "Score: " + score + " Time: " + sceneTime;
    
}

/*function restart(indexZombies){
    sceneTime = 0;
    time.reset();
    score = 0;
    tPlayer.setPosition(350, 55);
    zombies[indexZombies].respawn();
    game.start();
}*/

function init(){
    gui = document.getElementById('gui');
    game = new Scene();
    game.hideCursor();
    game.setSize(700, 600);
    game.setBG("green");
    grass = new Sprite(game, "Background.png", 800, 1400);
    grass.setSpeed(0);
    grass.setPosition(350, -5);
    timer = new Timer();
    time = new Timer();
    player = new Player();
    putZombies();
    
    game.start();
    
}

function update(){
    game.clear();
    grass.update();
    checkTimer();
    checkScore();
    updateGUI();
    player.checkKeys();
    player.update();
    pellets.forEach(function(element){
        element.update();
    });
    
    for(var i = 0; i < zombies.length; i++){
        zombies[i].update();
        checkCollisions(i);
    }
    
}
