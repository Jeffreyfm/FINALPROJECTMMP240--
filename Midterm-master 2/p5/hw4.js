function setup() {
	createCanvas(640, 480);
}

function draw() {

	stroke("red");
	strokeWeight(4);

	for (var counter = 0 ; counter < 15; counter++)
	{

		var g = 15 + counter * 20;

		fill(250, g, 150);

		var moveX = counter * 0; // direction horizontally
		var moveY = counter * 20; //direction vertically

		var circleX = 500 + moveX;
		var circleY = 350 - moveY;

	ellipse(circleX, circleY, 200, 80);
	}
		stroke("red");
	strokeWeight(4);

	for (var counter = 0 ; counter < 15; counter++)
	{

		var g = 15 + counter * 20;

		fill(250, g, 150);

		var moveX = counter * 0; // direction horizontally
		var moveY = counter * 20; //direction vertically

		var circleX = 300 + moveX;
		var circleY = 350 - moveY;

	ellipse(circleX, circleY, 200, 80);
	}
			stroke("red");
	strokeWeight(4);

	for (var counter = 0 ; counter < 15; counter++)
	{

		var g = 15 + counter * 20;

		fill(250, g, 150);

		var moveX = counter * 0; // direction horizontally
		var moveY = counter * 20; //direction vertically

		var circleX = 100 + moveX;
		var circleY = 350 - moveY;

	ellipse(circleX, circleY, 200, 80);
	}
	
}