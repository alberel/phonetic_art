var LSystem = function (axiom, ruleset) {
  this.axiom = axiom;
  this.ruleset = ruleset;
  this.current = axiom;
  this.count = 0;
  this.iterationMultiplier = 5;
};

LSystem.prototype.Setup() {
  println("Generation " + count + ": " + current);
}

LYsystem.prototype.CreateSentence() {
  for (var i = 0; i < axiom.length() * iterationMultiplier; i++){}
    // A StringBuffer for the “next” sentence
    var next = new StringBuffer();
    for (var i = 0; i < current.length(); i++) {
      var c = current.charAt(i);
      if (c == 'A') {
        // append() instead of +=
        next.append("AB");
      } else if (c == 'B') {
        next.append("A");
      }
    }
    // StringBuffer can easily be converted
    // back to a String.
    current = next.toString();
    count++;
    println("Generation " + count + ": " + current);
  }
}

var Rule = function (predecessor, successor){
  this._store = new Array(predecessor, successor);
}
