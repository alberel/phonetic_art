var LSystem = function LSystem(axiom) {
  this.axiom = axiom;
  this.current = axiom;
  this.count = 0;
  this.iterationMultiplier = 5;
  this.CreateSentence();
};

LSystem.prototype.CreateSentence = function() {
  console.log("LSystem created with axiom " + this.axiom);
  // for (var i = 0; i < this.axiom.length * this.iterationMultiplier; i++){
  //   var next = "";
  //   for (var i = 0; i < this.current.length; i++) {
  //     var c = this.current.charAt(i);
  //     if (c == 'A') {
  //       next += 'AB';
  //     } else if (c == 'B') {
  //       next += 'CB';
  //     } else if (c == 'C') {
  //       next += 'BA';
  //     }
  //   }
  //   current = next;
  //   println("Generation " + this.count + ": " + current);
  // }
}
