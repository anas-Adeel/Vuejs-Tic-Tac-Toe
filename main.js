let rows;
let cols;
let current;
let previous;
let dampening;
let dampeningVal;


function setup(){
	pixelDensity(1);
	createCanvas(500, 500)
	rows = 500;
	cols = 500;
	current = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
  	previous = new Array(cols).fill(0).map(n => new Array(rows).fill(0));
	dampeningVal = createSlider(0.85, 1, 0.9, 0.01);
}

function mousePressed(){
	previous[mouseX][mouseY] = 1000;
}

function mouseDragged(){
	previous[mouseX][mouseY] = 1000;
}

function draw(){
	background(128);
	loadPixels();
	dampening = dampeningVal.value();
  	for (let i = 1; i < cols - 1; i++) {
    	for (let j = 1; j < rows - 1; j++) {
	      	current[i][j] = (
	        	previous[i - 1][j] +
	          	previous[i + 1][j] +
	          	previous[i][j - 1] +
	          	previous[i][j + 1]) / 2 -
	        	current[i][j];

	      current[i][j] = current[i][j] * dampening;
	      let index = (i + j * cols) * 4;
	      pixels[index + 0] = current[i][j];
	      pixels[index + 1] = current[i][j];
	      pixels[index + 2] = current[i][j];
	   }
	}
  	updatePixels();
  	let temp = previous;
  	previous = current;
  	current = temp;
}
