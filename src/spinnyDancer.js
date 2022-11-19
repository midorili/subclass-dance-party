var spinnyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this);
  this.top = top;
  this.left = left;
  this.$node = $('<img src ="dancer1.jpg" class="dancer spinnydancer" alt="dancer3">');
  this.timeBetweenSteps = 50;
  this.rotation = 0;
  this.step();
  this.setPosition(top, left);
};

spinnyDancer.prototype = Object.create(makeDancer.prototype);
spinnyDancer.prototype.constructor = spinnyDancer;
spinnyDancer.prototype.oldStep = makeDancer.prototype.step;
spinnyDancer.prototype.step = function(rotation, timeBetweenSteps) {
  this.oldStep();
  var styleSettings = {
    transform: 'rotate(' + this.rotation + 'deg)'
  };
  this.$node.css(styleSettings);
  this.rotation += 1;
};
