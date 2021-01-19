class Stone{
constructor(x,y,width,height ){
var options={
isStatic:false,
restitution:0,
friction:1,
density:1.2
}
this.x=x;
this.y=y;
this.w=width;
this.h=height;
this.image=loadImage("images/stone.png")
this.body=Bodies.rectangle( x,y,w,h,options);
World.add( world,this.body);
}
display(){
var sPos=this.body.position;		
push()
translate(sPos.x, sPos.y);
imageMode(CENTER)
image(this.image,this.x,this.y,this.w, this.h);
pop()
}
}