LSystem lsys;
Turtle turtle;

void setup() {
  size(600,600);

  // A ruleset is an array of Rule objects.
  Rule[] ruleset = new Rule[1];
  ruleset[0] = new Rule('F',"FF+[+F-F-F]-[-F+F+F]");

  // The L-system is created with an axiom and a ruleset.
  lsys = new LSystem("F",ruleset);

  //[offset-down] The Turtle graphics renderer is given a sentence,
  // a starting length, and an angle for rotations.
  turtle = new Turtle(lsys.getSentence(),width/4,radians(25));
}

void draw() {
  background(255);
  // Start at the bottom of the window and draw.
  translate(width/2,height);
  turtle.render();
}

void mousePressed() {
  // Generate a new sentence when the mouse is pressed.
  lsys.generate();
  turtle.setToDo(lsys.getSentence());

  // The length shrinks each generation.
  turtle.changeLen(0.5);
}