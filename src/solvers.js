/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other


window.findNRooksSolution = function(n) {
  var board = new Board({"n": n});
  // var passCount = 0;
////////////////RECURSION///////////////////////////////////
  var testBucketGenerator = function (gridLength) {
    gridLength = gridLength || 4;
    var outcomes = [];
    var plays = [0, 1];

    var combos = function(roundsToGo, playedSoFar) {
      if( roundsToGo === 0 ){
        outcomes.push( playedSoFar );
        return;
      }

      for( var i = 0; i < plays.length; i++ ){
        var currentPlay = plays[i];
        combos( roundsToGo-1, playedSoFar.concat(currentPlay) );
      }
    };

    combos( gridLength, [] );
    return outcomes
  }

  var tests = testBucketGenerator();

  var solution;
  for(var i = 0; i < tests.length; i++){
    if(board.hasAnyRowConflicts(tests[i]) && board.hasAnyColConflicts(tests[i])){
      solution = tests[i];
      break;
    }
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({"n": n});
////////////////RECURSION///////////////////////////////////
  var testBucketGenerator = function (gridLength) {
    gridLength = gridLength || 4;
    var outcomes = [];
    var plays = [0, 1];

    var combos = function(roundsToGo, playedSoFar) {
      if( roundsToGo === 0 ){
        outcomes.push( playedSoFar );
        return;
      }

      for( var i = 0; i < plays.length; i++ ){
        var currentPlay = plays[i];
        combos( roundsToGo-1, playedSoFar.concat(currentPlay) );
      }
    };

    combos( gridLength, [] );
    return outcomes
  }

  var tests = testBucketGenerator();
  var solutionCount = 0;

  for(var i = 0; i < tests.length; i++){
    if(!board.hasAnyRowConflicts(tests[i]) && !board.hasAnyColConflicts(tests[i])){
      solutionCount += 1;
    }
  }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
