class Iron{
	constructor(x,y,width, height)
	{
		// assign options to the rubber ball
		var options = {
			restitution: 0.3,
			friction: 3.0,
			density: 30.0
		}
		this.x=x;
		this.y=y;
		this.width = width;
        this.height = height;
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		World.add(world, this.body);
        

	}
	display()
	{
			var rubberpos=this.body.position;		
			var angle = this.body.angle;
			push()
			translate(rubberpos.x, rubberpos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("grey");
			fill("silver");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height)
			pop()
	}

}