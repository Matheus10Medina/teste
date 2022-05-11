class bird extends Mae {
    constructor(x, y) {
    super(x, y, 50, 50)  
    this.smoke=loadImage("smoke.png")
    this.trajetory=[]
    }
    display(){
      super.display()
     
      if(this.body.velocity.x>10){ 
         var pos=[this.body.position.x, this.body.position.y]
        this.trajetory.push(pos)

      }
      for(var i=0;i<this.trajetory.length;i++){
        image(this.smoke,this.trajetory[i][0], this.trajetory[i][1])

      }
    }
  };