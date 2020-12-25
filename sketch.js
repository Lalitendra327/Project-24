var paperBall;
var ground;
var dustbin1, dustbin2, dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperBallOptions = {
		isStatic: false,
		 restitution: 0.3,
		 density: 1.2,
		 friction: 0.5

	}

	paperBall = Bodies.circle(100,200,20,paperBallOptions);
	World.add(world,paperBall);

	ground = new box(400,700,800,200);

	dustbin1 = new box(600,590,200,20);
	dustbin2= new box(500,535,20,90);
	dustbin3= new box(700,535,20,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  
  
  ellipseMode(RADIUS);
  fill("pink");
  ellipse(paperBall.position.x, paperBall.position.y,20,20);

  

  fill("red");
  ground.display();
  fill("white");
  stroke("white");
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 
  
  drawSprites();

 
 
}

function keyPressed() {
	 if(keyCode == UP_ARROW){

		Matter.Body.applyForce(paperBall,paperBall.position,{x:50, y: -85});
	 
	}
}



