//create a standard FLY object so that I don't have to type it 10 times ...
function Fly(){
    //creates a temporary sprite object
    tFly = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/fly.png", 20, 20);
    //sets the speed of the Sprite object
    tFly.setSpeed(10);
    //creates a function to simulate a fly's flight pattern
    tFly.wriggle = function(){
        //Random fly angle --- IMPROVE THIS LATER
        newDir = (Math.random() * 90)-45;
        this.changeAngleBy(newDir);
        
    }
    tFly.reset = function(){
        //SET NEW RANDOM POSITION
        newX = Math.random() * this.cWidth;
        newY = Math.random() * this.cHeight;
        this.setPosition(newX, newY);
        
    }
    tFly.reset();
    return tFly;
}

function Frog(){
    
    tFrog = new Sprite(scene, "http://aharrisbooks.net/h5g/h5g_7/frog.png", 50, 50);
    tFrog.minSpeed = -3;
    tFrog.maxSpeed = 10;
    tFrog.setSpeed(0);
    tFrog.setAngle(0);
    
    tFrog.checkKeys = function(){
        if (keysDown[K_LEFT]){
            this.changeAngleBy(-5);
        }
        
        if (keysDown[K_RIGHT]){
            this.changeAngleBy(5);
        }
        
        if (keysDown[K_UP]){
            this.changeSpeedBy(1);
            if(this.speed > this.maxSpeed){
                this.setSpeed(this.maxSpeed);
            }
        }
        if (keysDown[K_DOWN]){
            this.changeSpeedBy(-1);
            if(this.speed < this.minSpeed){
                this.setSpeed(this.minSpeed);
            }
        }
    };
    
    
    return tFrog;
}
