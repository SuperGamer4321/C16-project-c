//template
class Ball{
    /*Create the object for us 
    obj is made up of prop and methods
    */ 

    constructor(){
        //defines the properties for the object
        this.x = 200,
        this.y = 200,
        this.radius = 60
    }

    display(){
        rectMode(CENTER);
        circle(this.x,this.y,this.radius)
    }

    set_speed(v){
        this.x = this.x + v;
    } 

    
}

