class Catapulta {
    constructor(corpoA, pointB) {
      var options = {
          bodyA:corpoA,
          pointB:pointB,
          length:10,
          stiffness:0.04
      }
      this.sling1=loadImage("sling1.png")
      this.sling2=loadImage("sling2.png")
      this.sling3=loadImage("sling3.png")
      this.body = Matter.Constraint.create(options) 
      this.pointB=pointB
      World.add(world, this.body);
    }
    fly(){
        this.body.bodyA=null
    }
    reset(body){
      this.body.bodyA=body
  }
    display(){
    image(this.sling1, 230, 85)  
    image(this.sling2, 200, 85)
   
      if(this.body.bodyA){
          strokeWeight(4)
          stroke(48, 22, 8)
        line(this.body.bodyA.position.x-10, this.body.bodyA.position.y+20, this.pointB.x+20, this.pointB.y+5)
        line(this.body.bodyA.position.x-10, this.body.bodyA.position.y+20, this.pointB.x-5, this.pointB.y+5)
image(this.sling3, this.body.bodyA.position.x-20, this.body.bodyA.position.y+3,15, 30)
      }
      
    }
  };

  