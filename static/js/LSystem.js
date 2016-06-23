var LSystem = function LSystem(axiom){
  this.axiom = axiom;
  this.current = axiom;
  this.sentence = axiom;
  this.count = 0;
  this.CreateSentence();
  this.DrawSentence();
};

LSystem.prototype.CreateSentence = function() {
  // console.log("LSystem created with axiom " + this.axiom);
  // console.log("Axiom length: " + this.axiom.length);
  for (var i = 0; i < this.axiom.length; i++){
    // console.log(i);
    // console.log(this.count);
    // this.count += 1;
    var next = "";
    for (var j = 0; j < this.current.length; j++) {
      var c = this.current.charAt(j);
      if (c == 'A') {
        next += 'AB';
      } else if (c == 'B') {
        next += 'CB';
      } else if (c == 'C') {
        next += 'BA';
      }
    }
    // console.log("Adding: " + next);
    this.current += next;
    this.count ++;
    // console.log("Generation " + this.count + ": " + this.current);
  }
  this.sentence = this.current;
}

LSystem.prototype.DrawSentence = function() {
  var originX = canvas.width / 2;
  var originY = canvas.height / 2;
  var len = this.sentence.length;
  // console.log(this.sentence);
  for (var i = 0; i < this.sentence.length; i++) {
    // Looking at each character one at a time
    var c = this.sentence.charAt(i);
    // console.log(c);
    if (c == 'A') {
      ellipse(originX, originY, 50, 50);
      translate(len,0);
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
    //[end]
  }
}
