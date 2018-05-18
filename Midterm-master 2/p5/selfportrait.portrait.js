var noseY = 300;
var noseSpeed= 10;

function setup(){
	createCanvas(600,400);
}

function draw(){

	background(109, 148, 211);
fill(213, 166, 140);
arc(150, 200, 80, 100, 0, PI + QUARTER_PI, CHORD); // left ear
arc(450, 200, 90, 100, 0, PI + QUARTER_PI, CHORD); //  right ear

	ellipse(300, 200, 300, 350); //face
	ellipse(300, 200, 50, 50); // nose



ellipseMode(RADIUS);
fill(255);
ellipse(350, 150, 35, 35); 

ellipseMode(RADIUS);
fill(255);
ellipse(250, 150, 35, 35); 

ellipseMode(CENTER);
fill(100); // Set fill to gray
ellipse(350, 150, 35, 35); // Draw gray ellipse using CENTER mode

ellipseMode(CENTER); // Set ellipseMode to CENTER
fill(100); // Set fill to gray
ellipse(250, 150, 35, 35); // Draw gray ellipse using CENTER mode


fill(237, 103, 140);
stroke(225, 204, 100);
strokeWeight(6);

arc(250, noseY, 80, 80, 0, PI + QUARTER_PI, PIE); // mouth

noseY =  noseY + noseSpeed;

if (noseY < 240)
{
		noseSpeed = +1;
	}

if (noseY > height-100) 
	{
		noseSpeed = -1;
	}
}

