
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObj=new PaperClass(200,600,50,50)

	Engine.run(engine);
  
}

function KeyPressed(){
	if (keyCode=== UP_ARROW) {
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})	


	}
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  groundObject.display();
  dustbinObj.display();
paperObj.display();
}

