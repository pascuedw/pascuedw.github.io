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

function Player(){
    tPlayer = new Sprite(game, "survivor1_gun.png", 25, 25);
    tPlayer.setPosition(350, 55);
    tPlayer.setImgAngle(180);
    tPlayer.setSpeed(0);

    
    tPlayer.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeXby(-6);
        }
        
        if (keysDown[K_RIGHT]){
            this.changeXby(6);
        }
        
        if (keysDown[K_SPACE]){
            if (timer.getElapsedTime() >= 0.4){
                pellet = new Pellet();
                pellet.fire();
                timer.reset();
            }
                
        }
        
    };
    
    return tPlayer;
}

function Pellet(){
    tPellet = new Sprite(game, "tank_bullet2.png", 12, 12);
    tPellet.hide();
    
    tPellet.fire = function(){
        pellets.push(this);
        this.show();
        this.setSpeed(45);
        this.setPosition(player.x, player.y);
        this.setAngle(player.getImgAngle());
        this.setBoundAction(DIE);
        
    };
    
    return tPellet;
    
}

function Zombie(){
    tZombie = new Sprite(game, "zoimbie1_hold.png", 25, 25);
    tZombie.setSpeed(10);
    tZombie.setAngle(0);
    
    tZombie.respawn = function(){
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
    };
    
    tZombie.respawn();
    return tZombie;
}

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
