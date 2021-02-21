const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Render = Matter.Render;

var engine, world;
var object;
var ball;
var render;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    render = Render.create({
        element: document.body,
        engine: engine,
        options: {

            width: 400,
            height: 400,
            wireframes: false
        }


    })

    Render.run(render);

    var ground_options = {
        isStatic: true
    }

    ground = Bodies.rectangle(200, 390, 400, 20, ground_options);
    World.add(world, ground);


    var Options = {

        restitution: 1
    }
    ball = Bodies.circle(200, 100, 40, Options);
    World.add(world, ball);




    console.log(ball);
}

function draw() {
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 400, 20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 40, 40);
}