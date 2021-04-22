const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var Rubber1, Rubber2, Rubber3, Rubber4, Rubber5, Rubber6, Rubber7, Rubber8, Rubber9, Rubber10


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    stone = new Stone(Math.round(random(200, 1000)), 100, Math.round(random(100, 200)), Math.round(random(100, 250)));
    rubber1 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber2 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber3 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber4 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber5 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber6 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber7 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber8 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber9 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    rubber10 = new Rubber(Math.round(random(10, 1190)), Math.round(random(0, 200)), Math.round(random(10, 25)));
    iron1 = new Iron(Math.round(random(50, 1150)), Math.round(10, 50), Math.round(25, 50), Math.round(random(100, 500)));
    iron2 = new Iron(Math.round(random(50, 1150)), Math.round(10, 50), Math.round(25, 50), Math.round(random(100, 500)));





}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    rubber10.display();
    rubber2.display();
    rubber1.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    rubber7.display();
    rubber8.display();
    rubber9.display();
    iron1.display();
    iron2.display
}