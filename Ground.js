class Ground {
    constructor() {
      var options = {
          isStatic: true
      }
      
      this.width = 900;
      this.height = 20;
      this.body = Bodies.rectangle(450,390,900,20,options)
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      strokeWeight(2);
      fill("black")
      rectMode(CENTER);
      fill("brown");
      rect(pos.x,pos.y,900,20);
    }
  };