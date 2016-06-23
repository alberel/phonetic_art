var myCanvas;
var lSystems;
var drawLSystems;

function setup() {
	myCanvas = createCanvas(1000, 500);
	myCanvas.parent('myContainer');
	myCanvas.background(0,0,0);
	stroke(0,0,255);
	fill(0,0,255);
}

function draw() {
	if(drawLSystems == true){
		for(var i = 0; i < lSystems.length; i++){
			var sentence = lSystems[i].sentence;
			var originX = canvas.width / 2;
  			var originY = canvas.height / 2;
  			var len = sentence.length;
  			// console.log(this.sentence);
  			for (var k = 0; k < sentence.length; k++) {
    			// Looking at each character one at a time
    			var c = sentence.charAt(k);
    			// console.log(c);
    			if (c == 'A') {
    				translate(100,100);
      				rect(50, 50, 50, 50);
    			} else if (c == 'B') {
      				translate(0, len);
    			} else if (c == 'C') {
      				rotate(45);
    			} else if (c == 'D') {
      				rotate(-45);
    			} else if (c == 'E') {
      				pushMatrix();
    			} else if (c == 'F') {
      				popMatrix();
    			}
  			}
  		}

		drawLSystems = false;	
	}
}

function CreateLSystems(rulesWords) {
	//console.log("Length: " + rulesWords.length);
	lSystems = new Array(rulesWords.length);
  	// The L-system is created with an axiom using each word
  	for(var i = 0; i < lSystems.length; i++){
  		//console.log(rulesWords[i]);
  		lSystems[i] = new LSystem(rulesWords[i]);
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
		drawLSystems = true;
	})
}

//function windowResized() {
//	resizeCanvas(getElementById('myContainer').width, 500);
//}