var Renderer = function Renderer(sentence, origin){
  this.sentence = sentence;
  this.origin = origin;
}

Renderer.prototype.Render = function() {
  for (var i = 0; i < this.sentence.length; i++) {
    // Looking at each character one at a time
    var c = this.sentence.charAt(i);
    if (c == 'A') {
      line(0,0,len,0);
      translate(len,0);
    } else if (c == 'B') {
      translate(len,0);
    } else if (c == 'C') {
      rotate(theta);
    } else if (c == 'D') {
      rotate(-theta);
    } else if (c == 'E') {
      pushMatrix();
    } else if (c == 'F') {
      popMatrix();
    }
    //[end]
  }
}