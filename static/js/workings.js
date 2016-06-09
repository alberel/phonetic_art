var sketch = function(p){

	p.setup = function(){
		myCanvas = createCanvas(1000, 1000);
		//myCanvas = createCanvas(getElement('myContainer').width, 1000);
		//myCanvas.parent('myContainer');
		stroke(0);
	}

	p.draw = function(){
		background(0,0,0);
	}
}

var myp5 = new p5(sketch);

var submitButton;

function transcribeText(phrase)
{
	$.get( "/transcribe/" + phrase, function( data ) {
		console.log( JSON.stringify(data) )
	})
}


function windowResized() {
	resizeCanvas(getElement('myContainer').width, 500);
}