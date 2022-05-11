const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg2="bg2.jpeg"
var engine, world;
var bg 
var box1, catapulta;
var posicaocerta=true
function preload(){
    
    horario()
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,50,50);
    box2 = new Box(920,320,50,50);
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(180, 340, 300, 115)
    pig1= new Pig(810, 320)
    log1= new Log(810, 290, 300, PI/2)
    log2= new Log(810, 250, 300, [PI/2] )

    box3 = new Box(700, 270, 50, 50)
    box4 = new Box(920, 270, 50, 50)
    box5= new Box(810, 230, 50, 50)
    bird1 = new bird(230, 100)
    catapulta=new Catapulta(bird1.body,{x:230,y:100})
pig2 = new Pig(810, 270)
}
function draw(){
    if(bg){
        background(bg);
    }
    text(mouseX + "," + mouseY, mouseX, mouseY)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    ground2.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();

    box3.display();
    box4.display();
    box5.display();
    bird1.display();
    catapulta.display()

}
function mouseDragged() {
    if(posicaocerta){
        Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
    }
  
  }
  function mouseReleased() {
    catapulta.fly()
    posicaocerta=false
  }
  function keyPressed(){
      if(keyCode===32){
          posicaocerta=true
          catapulta.reset(bird1.body)
      }
  }
  async function horario(){
   var resposta =await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo")  
   var respostaj =await resposta.json()
   var hora=respostaj.datetime.slice(11,13)
   if(hora>=06&&hora<=18){
bg2="bg.png"
   }else{
       bg2="bg2.jpeg"
   }
   bg=loadImage(bg2)
  }