var submitButton;

function setup() {
	myCanvas = createCanvas(getElement('myContainer').width, 1000);
	myCanvas.parent('myContainer');
	stroke(0);
}

function draw()
{
	background(0,0,0);
  
}

function transcribeText(phrase)
{
	$.get( "/transcribe/" + phrase, function( data ) {
		console.log( JSON.stringify(data) )
	})
}


function windowResized() {
	resizeCanvas(getElement('myContainer').width, 500);
}