const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ball;
var ground;
var leftground;
var rightground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
        
		isStataic:false,
	    restitution:0.3,
		friction:0,
		density:1.2 
	}
    
	fill("white");
	ball = Bodies.circle(100,300,20,ball_options);
	World.add(world,ball);

	ground = new Ground(400,680,800,20);
	leftground = new Ground(650,630,10,75);
	rightground = new Ground(770,630,10,75);

	Engine.run(engine);
	

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  

 ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  leftground.show();
  rightground.show();
  
  
 
}

function keyPressed(){

	if(keyCode === RIGHT_ARROW){
		
      Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}
 


