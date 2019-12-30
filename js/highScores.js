document.addEventListener('DOMContentLoaded', () => {

  const topScores = new Object();

  scoreDesign = (result, className, suffixParameter) => {
    currentResult = localStorage.getItem(result);
    suffix = document.getElementsByClassName(suffixParameter)[0];
    if (currentResult != null && currentResult != 'null') {
      toBePopulated = document.getElementsByClassName(className)[0];
      toBePopulated.innerHTML = `${currentResult}`;
      if (suffixParameter != null) {
        if (currentResult == 1) {
          suffix.innerHTML = 'turn';
        } else {
          suffix.innerHTML = 'turns';
        }
      }
    } else {
      if (suffixParameter != null) {
        suffix.innerHTML = 'None';
      }
    }
  }

  scoreDesign('gamesPlayed', 'gamesPlayed', null);
  scoreDesign('averageGameLength', 'averageGameLength', 'turnSuffixAverageGame');
  scoreDesign('winPercentage', 'winPercentage', null);

  scoreDesign('quickestWin', 'quickestWin', 'turnSuffixQuickestWin');
  scoreDesign('slowestWin', 'slowestWin', 'turnSuffixSlowestWin');
  scoreDesign('averageWinLength', 'averageWinLength', 'turnSuffixAverageWin');
  scoreDesign('winningGamesPlayed', 'gamesWon', null);

  scoreDesign('quickestLoss', 'quickestLoss', 'turnSuffixQuickestLoss');
  scoreDesign('slowestLoss', 'slowestLoss', 'turnSuffixSlowestLoss');
  scoreDesign('averageLossLength', 'averageLossLength', 'turnSuffixAverageLoss');
  scoreDesign('lostGamesPlayed', 'gamesLost', null);

  scoreDesign('quickestDraw', 'quickestDraw', 'turnSuffixQuickestDraw');
  scoreDesign('slowestDraw', 'slowestDraw', 'turnSuffixSlowestDraw');
  scoreDesign('averageDrawLength', 'averageDrawLength', 'turnSuffixAverageDraw');
  scoreDesign('drawnGamesPlayed', 'gamesDrawn', null);

  topScores.reset = document.getElementsByClassName('resetScores')[0];
  topScores.reset.addEventListener("click", function(){
    let answer = prompt('Are you sure??? (Type "y" to confirm...)')
    if (answer === 'y') {
      localStorage.clear();
      window.location.href = '../index.html'
    }
  });

})
