
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var stand1,stand2,Polygon,polygonImage,slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
function preload()
{
	polygonImage=loadImage("polygon.png")
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:true,
		restitution:0,
		friction:1,
		density:1.2
	}
	 Polygon=Bodies.circle(100,300,20,options)
	 World.add(world,Polygon)
	 
     stand1=new Ground(600,600,400,20)
	 box1=new Box(510,570,30,40)
	 box2=new Box(540,570,30,40)
	 box3=new Box(570,570,30,40)
	 box4=new Box(600,570,30,40)
	 box5=new Box(630,570,30,40)
	 box6=new Box(660,570,30,40)
	 box7=new Box(690,570,30,40)
	 box8=new Box(540,530,30,40)
	 box9=new Box(570,530,30,40)
	 box10=new Box(600,530,30,40)
	 box11=new Box(630,530,30,40)
	 box12=new Box(660,530,30,40)
	 box13=new Box(570,490,30,40)
	 box14=new Box(600,490,30,40)
	 box15=new Box(630,490,30,40)
	 box16=new Box(600,450,30,40)
	 slingshot=new Slingshot(Polygon,{x:110,Y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  imageMode(CENTER)
  image(polygonImage,Polygon.position.x,Polygon.position.y,40,40)
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  slingshot.display();
  drawSprites();
 
}
function mouseDragged(){
	Body.setPosition(Polygon,{x:mouseX,y:mouseY})
	}
	function mouseReleased(){
	slingshot.fly();
	}