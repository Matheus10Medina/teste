class Pig {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.image=loadImage("enemy.png")
      World.add(world, this.body);
      this.visual = 255
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(this.body.speed<3){
        push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("green");
      image(this.image, 0, 0, this.width, this.height);
      pop();

        } else{
        World.remove(world, this.body)
        push ()
       this.visual=this.visual- 4
       tint (255, this.visual) 
       image (this.image, pos.x, pos.y, 50, 50)
       pop()
      }
      
    }
  };
  