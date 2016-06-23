var lsys;
var renderer;

function setup() {
  // The L-system is created with an axiom and a ruleset.
  lsys = new LSystem("A");

  //[offset-down] The Turtle graphics renderer is given a sentence,
  // a starting length, and an angle for rotations.
  //renderer = new Renderer(lsys.CreateSentence(),width/4);
}