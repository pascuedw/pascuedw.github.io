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