var ball1;
function setup(){
   ball1 = new Ball();
}
/*class className{
 constructor(){
    
 }

}   */ 

function draw(){
   background("pink");
   ball1.display();

   ball1.set_speed(4);
   //trex.addAnimation();
}