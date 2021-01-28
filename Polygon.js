class Polygon {
    constructor(x,y){
      super(x,y,50,50);
      polygon = loadImage("TowerSiege-1-main/polygon.png");
    }
  
    display() {
      super.display();
  
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  