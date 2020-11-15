const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup() {
 createCanvas(2000,800);
 engine = Engine.create();
 world = engine.world;


    ground=new Ground(600,600,1230,30);
    ball = new Ball(200, 200, 80, 80);

    box1=new Box(900, 100, 70, 70);
    box2 = new Box(900, 100, 70, 70);
    box3 = new Box(900, 100, 70, 70);
    box4 = new Box(900, 100, 70, 70);
    box5 = new Box(820, 100, 70, 70);
    box6 = new Box(820, 100, 70, 70);
    box7 = new Box(720, 100, 70, 70);
    box8 = new Box(720, 100, 70, 70);
    box9 = new Box(720, 100, 70, 70);
    box10 = new Box(720, 100, 70, 70);
    box11 = new Box(720, 100, 70, 70);
    box12 = new Box(820, 100, 70, 70);
    chain=new Chain(ball.body,{x:500,y:200});

    

}

function draw() {
    background("lightblue");
    Engine.update(engine);


ground.display();
ball.display();

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
chain.display();

}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
  }
































