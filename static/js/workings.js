var sketch = function(p){

	p.setup = function(){
		p.canvas = createCanvas(document.getElementById('myContainer').width, 1000);
		p.canvas.parent('myContainer');
		p.stroke(0);
	}

	p.draw = function(){
		p.background(0, 0, 0);
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