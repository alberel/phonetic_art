function setup() {
	var myCanvas = createCanvas(1000, 500);
	myCanvas.parent('myContainer');
	myCanvas.background(0,0,0);
	stroke(255,0,0);
	fill(0,0,255);
}

function draw() {
	ellipse(100,100,100,100);
}

function CreateLSystems(rulesWords) {
	//console.log("Length: " + rulesWords.length);
	var lSystems = new Array(rulesWords.length);
  	// The L-system is created with an axiom using each word
  	for(var i = 0; i < lSystems.length; i++){
  		//console.log(rulesWords[i]);
  		lSystems[i] = new LSystem(rulesWords[i]);
  		lSystems[i].CreateSentence();
	}
}

var submitButton;

function transcribeText(phrase)
{
	$.get( "/transcribe/" + phrase, function( data ) {
		//console.log("Stringified: " + JSON.stringify(data));
		var parsedData = JSON.parse(JSON.stringify(data));
		//console.log("Parsed data: " + parsedData);
		CreateLSystems(parsedData);
	})
}

//function windowResized() {
//	resizeCanvas(getElementById('myContainer').width, 500);
//}