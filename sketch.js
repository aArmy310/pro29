const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
//var backgroundImg,platform;
var  slingShot;
var polygon;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    g1 = new Ground(600,height,1200,20);
    g2 = new Ground(320,235,150.20);

    //level2
    b8 = new Box (330,235,30,40);
    b9 = new Box (360,235,30,40);
    b10 = new Box (390,235,30,40);
    b11 = new Box (420,235,30,40);
    b12 = new Box (450,235,30,40);
     //level3
     b13 = new Box (360,195,30,40);
     b14 = new Box (390,195,30,40);
     b15 = new Box (420,195,30,40);
     //top
     b16 = new Box(390,155,30,40);

     polygon = Bodies.circle(50,200,20);
     World.add(world,polygon);

     slingShot = new SlingShot(this.polygon,{x:100,y:200});
     
imageMode(CENTER)

image(polygon_img,polygon.position.x,polygon.position.y,40,40 );
}
function draw(){
    
    Engine.update(engine);

   g1.display();
   g2.display();
   b8.display();
   b9.display();
   b10.display();
   b11.display();
   b12.display();
   b13.display();
   b14.display();
   b15.display();
   b16.display();
   polygon.display();
}