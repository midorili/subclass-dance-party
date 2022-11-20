describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new makeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a top property', function() {
    expect(bouncyDancer.top).to.equal(10);
  });

  it('should have a left property', function() {
    expect(bouncyDancer.left).to.be.equal(20);
  });

  it('should have a step function that makes its node bounce', function() {
    //sinon.spy(bouncyDancer, 'up', ['get']);
    var currentUp = bouncyDancer.up;
    bouncyDancer.step();
    //console.log(bouncyDancer.up);
    expect(bouncyDancer.up).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(bouncyDancer, 'step');
      expect(bouncyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(bouncyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(bouncyDancer.step.callCount).to.be.equal(2);
    });
  });
});
