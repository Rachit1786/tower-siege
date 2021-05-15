class POLYGON{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.image = loadImage("polygon.png");
        this.body.circle(50,200,20);
        World.add(world, this.body);
      }
      display(){
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTRE);
        this.image(polygon_img , polygon.position.x , polygon.position.y,40,40);
        pop();
      }
}
