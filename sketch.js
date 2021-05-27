
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperOB

function setup() {
	createCanvas(1600, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,470,width,20);
	dustbinObj=new dustbin(1200,450);
    paperOB=new Paper(100,420,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperOB.Display();
}
function keyPressed(){
if(keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperOB.body,paperOB.body.position,{x:130,y:-145})

}
}


