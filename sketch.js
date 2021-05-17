const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubberBall;
var stone;
var iron;

function setup(){
    
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberBall = new Rubber(700,90,25);
    stone = new Stone(200,90,50,40);
    iron = new Iron(500,90,70,70);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubberBall.display();
    stone.display();
    iron.display();
     
}