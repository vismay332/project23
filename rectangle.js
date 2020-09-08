class Rect {
constructor(x,y,width,height){
var options={
//restitution:0.8
isStatic : true
}
this.body= Bodies.rectangle(x,y,width,height,options);
World.add(world, this.body);
this.width=width;
this.height=height;
}
display(){
var pos = this.body.position;
var angle=this.body.angle;
push();
/*translate(pos.x,pos.y);
rotate(angle);*/
rectMode(CENTER);
fill("red");
rect(pos.x, pos.y, this.width, this.height);
pop();
}
};