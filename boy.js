class boy{
constructor(x, y, width, height) {
var options = {
    isStatic=false,
'restitution':0,
'friction':1,
'density':1}
this.x=x;
this.y=y;
this.w= width;
this.h= height;
this.body=Bodies.rectangle(x, y, w, h, options);
this.image=loadImage("images/boy.png");
World.add(world, this.body);
}
display(){
push();
translate(this.body.position.x, this.body.position.y);
imageMode(CENTER);
image(this.image, this.x,this.y, this.w, this.h);
pop();
}
}