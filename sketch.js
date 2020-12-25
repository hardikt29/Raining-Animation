const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var thunder,thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops = [];
var rand;
var maxDrops = 100;
var thunderCreatedFrame = 0;
//var wmg1,wmg2,wmg3,wmg4,wmg5,wmg6,wmg7,wmg8;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
    /*wmg1 = loadImage("walking_1.png");
    wmg2 = loadImage("walking_2.png");
    wmg3 = loadImage("walking_3.png");
    wmg4 = loadImage("walking_4.png");
    wmg5 = loadImage("walking_5.png");
    wmg6 = loadImage("walking_6.png");
    wmg7 = loadImage("walking_7.png");
    wmg8 = loadImage("walking_8.png");*/
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,600);
   umbrella = new Umbrella(200,300);
   if(frameCount%150===0){
      for(var i = 0; i<maxDrops;i++)
      drops.push(new createDrop(random(0,400),random(0,400)))
   }
    
}

function draw(){
    Engine.update(engine);
    background(0);

    rand = Math.round(random(1.4))
    if(frameCount%80===0){
        thunderCreatedFrame = frameCount
        thunder = createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1: thunder.addImage(thunder1)
                break;
            case 2: thunder.addImage(thunder2)
                break;
            case 3: thunder.addImage(thunder3)
                break;
            case 4: thunder.addImage(thunder4)
                break;
                default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    if(thunderCreatedFrame+10===frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();
    for(var i = 0; i<maxDrops ; i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    drawSprites();
}   

