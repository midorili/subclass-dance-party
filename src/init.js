$(document).ready(function() {
  window.dancers = [];
  // Create an array of --center-- positions for dancers
  window.centerPositions = [
    ['50%', '35%'], ['50%', '55%'], ['50%', '45%'], ['50%', '25%'], ['50%', '65%'],
    ['60%', '30%'], ['60%', '40%'], ['60%', '50%'], ['60%', '60%'], ['60%', '70%'],
  ];

  window.counter = 0;
  window.PositionCounter = 0;
  window.spinPosition = [
    ['10%', '20%'], ['10%', '35%'], ['10%', '50%'], ['10%', '65%'], ['10%', '80%'],
    ['70%', '20%'], ['70%', '35%'], ['70%', '50%'], ['70%', '65%'], ['70%', '80%'],
    ['10%', '20%'], ['10%', '35%'], ['10%', '50%'], ['10%', '65%'], ['10%', '80%'],
    ['70%', '20%'], ['70%', '35%'], ['70%', '50%'], ['70%', '65%'], ['70%', '80%'],
    ['10%', '20%'], ['10%', '35%'], ['10%', '50%'], ['10%', '65%'], ['10%', '80%'],
    ['70%', '20%'], ['70%', '35%'], ['70%', '50%'], ['70%', '65%'], ['70%', '80%'],
    ['10%', '20%'], ['10%', '35%'], ['10%', '50%'], ['10%', '65%'], ['10%', '80%'],
    ['70%', '20%'], ['70%', '35%'], ['70%', '50%'], ['70%', '65%'], ['70%', '80%'],
    ['10%', '20%'], ['10%', '35%'], ['10%', '50%'], ['10%', '65%'], ['10%', '80%'],
    ['70%', '20%'], ['70%', '35%'], ['70%', '50%'], ['70%', '65%'], ['70%', '80%'],
    ['10%', '20%'], ['10%', '35%'], ['10%', '50%'], ['10%', '65%'], ['10%', '80%'],
    ['70%', '20%'], ['70%', '35%'], ['70%', '50%'], ['70%', '65%'], ['70%', '80%'],
  ];

  window.SpinCounter = 0;

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(window.centerPositions[counter][0], window.centerPositions[counter][1], 1000);
    window.counter ++;
    if (window.counter <= 10) {
      $('body').append(dancer.$node);
      window.dancers.push(dancer);

      $('.dancer').on('mouseover', function (event) {
        $(event.target).css('height', '150px');
      });

      $('.dancer').on('mouseleave', function (event) {
        $(event.target).css('height', '100px');
      });
    }

    // } else if (counter = 10) {
    //   alert('This party is over capacity! Sorry!');
    // }

  });

  $('.lineUpButton').on('click', function() {
    var allDancers = window.dancers;
    for (var i = 0; i < allDancers.length; i++) {
      var currentDancer = allDancers[i];
      currentDancer.lineUp();
    }
  });

  $('.danceAroundButton').on('click', function() {
    // debugger;

    for (var i = 0; i < window.dancers.length; i ++) {
      var currDancer = window.dancers[i];
      // if (currDancer.constructor.name !== 'spinnyDancer') {
      //   var newTop = window.centerPositions[window.PositionCounter][0];
      //   var newLeft = window.centerPositions[window.PositionCounter][1];
      //   currDancer.setPosition(newTop, newLeft);
      //   window.PositionCounter ++;
      // } else {
      var newTop = window.spinPosition[window.SpinCounter][0];
      var newLeft = window.spinPosition[window.SpinCounter][1];
      currDancer.setPosition(newTop, newLeft);
      window.SpinCounter ++;

    }
    // }
  });

});
// });
