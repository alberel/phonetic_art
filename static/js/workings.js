var submitButton;
// var context = a_canvas.getContext("2d");

function setup() {
	myCanvas = createCanvas(getElement('myContainer').width, 1000);
	myCanvas.parent('myContainer');
	stroke(0);
}

function draw()
{
	background(0,0,0);
  
}

// function rule1() {
// 	context.beginPath();
// 	context.moveTo('originOfWord');
// 	context.bezierCurveTo(200, 100, -200, 100, 300, 100);
// 	context.stroke();
// 	{
// 		{
// 			context.moveTo('newOrigin')
// 			context.bezierCurveTo((200, 100, -200, 100, 300, 100)/2);
// 			context.stroke();
// 		}
// 	}
// }


function transcribeText(phrase)
{
	$.get( "/transcribe/" + phrase, function( data ) {
		console.log( JSON.stringify(data) )
	})
}


function windowResized() {
	resizeCanvas(getElement('myContainer').width, 500);
}