var LSystem = function LSystem(axiom){
  this.axiom = axiom;
  this.current = axiom;
  this.count = 0;
  this.iterationMultiplier = 5;
  this.CreateSentence();
};

LSystem.prototype.CreateSentence = function() {
  console.log("LSystem created with axiom " + this.axiom);
  console.log("Axiom length: " + this.axiom.length);
  for (var i = 0; i < this.axiom.length; i++){
    console.log(i);
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
    console.log("Adding: " + next);
    this.current += next;
    this.count ++;
    console.log("Generation " + this.count + ": " + this.current);
  }
}
