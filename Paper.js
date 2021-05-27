class Paper {

    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:0.6
            
        }
         this.r=r
    this.body=Bodies.circle(x,y,(this.r-2)/2,options)
    this.image=loadImage("paper.png")
    World.add(world, this.body);


    

    }
    Display(){
        var Pos=this.body.position;	
        imageMode(RADIUS)
        push()
			translate(Pos.x, Pos.y);
			imageMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.r,this.r);    
			pop()
    }
    
}