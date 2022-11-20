describe('spinnyDancer', function() {

  var spinnyDancerTest, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancerTest = new spinnyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinnyDancerTest.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a left property', function() {
    expect(spinnyDancerTest.left).to.be.equal(20);
  });

  it('should have a top property', function() {
    expect(spinnyDancerTest.top).to.be.equal(10);
  });

  it('should have a step function that makes it spin', function() {
    // sinon.spy(spinnyDancer.$node, 'toggle');
    console.log('this is before step', spinnyDancerTest.rotation);
    expect(spinnyDancerTest.rotation).to.be.equal(1);
    spinnyDancerTest.step();
    console.log('this is after step', spinnyDancerTest.rotation);

    expect(spinnyDancerTest.rotation).to.be.equal(2);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(spinnyDancerTest, 'step');
      expect(spinnyDancerTest.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      // clock.tick(timeBetweenSteps);

      expect(spinnyDancerTest.step.callCount).to.be.above(1);

      // clock.tick(timeBetweenSteps);
      // expect(spinnyDancerTest.step.callCount).to.be.equal(2);
    });
  });
});


// The dancer is created and step() is called before it's even appended to the page, so
// when determining the step() count we have to rememeber that
