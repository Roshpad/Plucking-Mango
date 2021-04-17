class Mango{
    constructor(x,y,diametre) {
        var options = {
            isStatic:true ,
            'restitution':0.5,
            'friction':1.0,

        }
        this.body = Bodies.circle(x,y,diametre,options);
        this.diametre = diametre;
        this.image = loadImage("mango.png");
        World.add(world,this.body);
    }
    display(){
        push();
        transtlate(this.body.postion.x,this.body.postion.y);
        imageMode(CENTRE);
        this.image(this.image,0, 0, this.diametre);
        pop(); 

    }
}