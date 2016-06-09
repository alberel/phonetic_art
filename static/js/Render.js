for (int i = 0; i < sentence.length(); i++) {

  // Looking at each character one at a time
  char c = sentence.charAt(i);

  //[full] Performing the correct task for each character.
  // This could also be written with a “case” statement,
  // which might be nicer to look at, but leaving it as an
  // if/else if structure helps readers not familiar with case statements.
  if (c == 'F') {
    line(0,0,len,0);
    translate(len,0);
  } else if (c == 'F') {
   translate(len,0);
  } else if (c == '+') {
    rotate(theta);
  } else if (c == '-') {
    rotate(-theta);
  } else if (c == '[') {
    pushMatrix();
  } else if (c == ']') {
    popMatrix();
  }
  //[end]
}