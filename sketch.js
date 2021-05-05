const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var box1
var box2
var box3
var box4
var box5
var box6
var rock
var sling

function setup() {
  createCanvas(800,400);
 engine= Engine.create()
 world=engine.world
 ground1=new Ground(400,380,800)
 ground2=new Ground(600,200,180)
 
 box1=new Box(600,150)
 box2=new Box(620,150)
 box3=new Box(640,150)
 box4=new Box(580,150)
 box5=new Box(560,150)
 box6=new Box(540,150)
 box7=new Box(660,150)

 rock=new Rock(200,200)
 
 sling=new Sling(rock.body,{x:200,y:200})
}

function draw() {
  background(30);  
  Engine.update(engine)

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
ground1.display()
ground2.display()
rock.display()
sling.display()
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
}