var LSystem = function(axiom) {
  this.axiom = axiom;
  this.current = axiom;
  this.count = 0;
  this.iterationMultiplier = 5;
  //this.CreateSentence()
};

LSystem.prototype.CreateSentence = function() {
  for (var i = 0; i < this.axiom.length * this.iterationMultiplier; i++){
    // A StringBuffer for the “next” sentence
    var next = "";
    for (var i = 0; i < this.current.length; i++) {
      var c = this.current.charAt(i);
      if (c == 'A') {
        next += "AB";
      } else if (c == 'B') {
        next += "AB";
      }
    }
    // StringBuffer can easily be converted
    // back to a String.
    current = next;
    println("Generation " + this.count + ": " + current);
  }
}
