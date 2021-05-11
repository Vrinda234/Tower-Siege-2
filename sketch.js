const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

function setup() {
  
  createCanvas(900,400);
  engine = Engine.create()
  world = engine.world
  //grounds
  ground = new Ground();
  stand1 = new stand(380,300,270,10)
  stand2 = new stand(700,200,200,10)

  //slinging object
  ball = Bodies.circle(50,200,20);
  World.add(world, ball)

  //slingshot
  slingShot = new slingshot(ball.Body,{x:200, y:200})

  //level one
  box1 = new Box(280,275,30,40)
  box2 = new Box(310,275,30,40)
  box3 = new Box(340,275,30,40)
  box4 = new Box(370,275,30,40)
  box5 = new Box(400,275,30,40)
  box6 = new Box(430,275,30,40)
  box7 = new Box(460,275,30,40)
  box8 = new Box(490,275,30,40)

  //level two
  box9 = new Box(310,235,30,40)
  box10 = new Box(340,235,30,40)
  box11 = new Box(370,235,30,40)
  box12 = new Box(400,235,30,40)
  box13 = new Box(430,235,30,40)
  box14 = new Box(460,235,30,40)
  
  //level three
  box15 = new Box(340,195,30,40)
  box16 = new Box(370,195,30,40)
  box17 = new Box(400,195,30,40)
  box18 = new Box(430,195,30,40)

  //level four
  box19 = new Box(370,155,30,40)
  box20 = new Box(400,155,30,40)

  //level five
  box21 = new Box(385,115,30,40)

  //set two
  //level one
  Box1 = new Box(640,175,30,40)
  Box2 = new Box(670,175,30,40)
  Box3 = new Box(700,175,30,40)
  Box4 = new Box(730,175,30,40)
  Box5 = new Box(760,175,30,40)

  //level two
  Box6 = new Box(670,135,30,40)
  Box7 = new Box(700,135,30,40)
  Box8 = new Box(730,135,30,40)

  //level three
  Box9 = new Box(700,95,30,40)

}

function draw() {
  background("white");  
  
  ellipse(ball.position.x, ball.position.y,20)
  slingShot.display()

  strokeWeight(2);
  stroke(15)
  stand1.display();
  stand2.display();
  
  stroke(15)
  fill("black")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  stroke(15)
  fill("orange")
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  stroke(15)
  fill("blue")
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  stroke(15)
  fill("green")
  box19.display();
  box20.display();
  stroke(15)
  fill("violet")
  box21.display();
  stroke(15)
  fill("red")
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  stroke(15)
  fill("pink")
  Box6.display();
  Box7.display();
  Box8.display();
  stroke(15)
  fill("yellow")
  Box9.display();
  
  textSize(18);
  fill("#88b378")
  strokeWeight("7")
  text("drag the line and release it to hit the boxes",550,270)

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(this.ball)
  }
}