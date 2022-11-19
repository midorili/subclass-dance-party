// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
};

makeDancer.prototype.constructor = makeDancer;
makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step

  var blinkyDancerInstance = this;
  setTimeout(function() {
    blinkyDancerInstance.step();
  }, blinkyDancerInstance.timeBetweenSteps, blinkyDancerInstance);
};


makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  // makeDancer.prototype.setPosition.bind(this);
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function (top, left, isLinedUp) {
  // If lineup is being called on a bouncy dancer

  // AND if the isLinedUp flag is false

  // Set the top value to

  var styleSettings = {
    top: '50%',
    left: left
  };
  this.$node.css(styleSettings);

  this.isLinedUp = true;
};


// On this page: we define setPosition
// var setPosition = function () { };
