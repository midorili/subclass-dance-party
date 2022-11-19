var makeBouncyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<img src ="dancer1.jpg" class="dancer bouncydancer" alt="dancer2">');
  this.up = true;
  this.step();
  this.setPosition(top, left);
  this.isLinedUp = false;
};
makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;
makeBouncyDancer.prototype.oldStep = makeDancer.prototype.step;
makeBouncyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.oldStep();
  if (this.isLinedUp === false) {
    if (this.up) {
      this.top += 15;
      // need to set up value to false
      this.up = false;
      this.setPosition(this.top, this.left);
    } else if (!this.up) {
      this.top -= 15;
      this.up = true;
      this.setPosition(this.top, this.left);

      // need to set up value back to true
    }
  }
  // if statement to find out if it is up or down

};
