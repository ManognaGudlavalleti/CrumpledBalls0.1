var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var dustbin1;
var dustbinImg,paperImg;

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(100, 20, 70);
	ground1 = new Ground(400,470,800,58);
	dustbin1 = new Dustbin(670,405,100,110);

	
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");
 Engine.update(engine); 
  paper1.display();
  ground1.display(); 
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
 

  }
 
  function keyPressed() {
	  if(keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-85, y:85});
	  }
  }
