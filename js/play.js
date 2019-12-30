document.addEventListener('DOMContentLoaded', () => {

  start = () => {

    removeButton = () => {
      gameDisplay.removeChild(beginButton);
    }

    shufflingDeckText = () => {

      fadeInText = () => {
        shufflingText.classList.toggle('fadeIn');
      }

      fadeOutText = () => {
        shufflingText.classList.toggle('fadeIn');
        shufflingText.classList.toggle('fadeOut');
      }

      removeText = () => {
        shufflingText.parentNode.removeChild(shufflingText);
      }

      const shufflingText = document.createElement('p');
      shufflingText.innerHTML = 'Shuffling the deck...';
      shufflingText.classList.add('hidden', 'gameText');
      gameDisplay.appendChild(shufflingText);
      setTimeout(fadeInText, 200);
      setTimeout(fadeOutText, 3000);
      setTimeout(removeText, 4000);
    }

    whoGoesFirst = () => {

      fadeInTextAndCoin = () => {
        coinFlipText.classList.toggle('fadeIn');
        coin.classList.toggle('fadeIn');
      }

      coinFlipDecision = () => {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        if (randomNumber % 2 == 0) {
          coin.innerHTML = 'YOU';
          playerTurn = true;
        } else {
          coin.innerHTML = 'COMPUTER';
          playerTurn = false;
        }
        coin.classList.toggle('fadeOut');
        coin.classList.remove('flippedCoin');
        coin.classList.add('inactiveCoin');
        coin.classList.toggle('fadeIn');
      }

      removeCoinAndText = () => {
        coinFlipText.parentNode.removeChild(coinFlipText);
        coin.parentNode.removeChild(coin);
        shufflingDeckText();
        setTimeout(gameStart, 4000);
      }

      clearCoinAndTextDisplay = () => {
        coinFlipText.classList.remove('fadeIn');
        coinFlipText.classList.toggle('fadeOut');
        coin.classList.remove('fadeIn');
        coin.classList.toggle('fadeOut');
        setTimeout(removeCoinAndText, 1000);
      }

      coinFlip = () => {
        coin.removeEventListener('click', coinFlip);
        coin.classList.remove('coin');
        coin.classList.remove('fadeIn');
        coin.classList.add('flippedCoin');
        coin.classList.toggle('fadeOut');
        setTimeout(coinFlipDecision, 1500);
        setTimeout(clearCoinAndTextDisplay, 3000);
      }

      addListenerToCoin = () => {
        coin.addEventListener('click', coinFlip);
        coin.classList.remove('inactiveCoin');
        coin.classList.add('coin');
      }

      const coinFlipText = document.createElement('p');
      coinFlipText.innerHTML = 'Flip the coin to see who goes first!';
      coinFlipText.classList.add('hidden', 'gameText');
      gameDisplay.appendChild(coinFlipText);
      const coin = document.createElement('button');
      coin.innerHTML = 'Click To Flip';
      coin.classList.add('inactiveCoin', 'hidden');
      gameDisplay.appendChild(coin);
      setTimeout(fadeInTextAndCoin, 500);
      setTimeout(addListenerToCoin, 1500);
    }


    generateCards = () => {

      cardCreation = (cardPosition, cardOwner, imageSource, cardNameContent, attack, attackValue,
        defence, defenceValue, speed, speedValue, stealth, stealthValue,
        strength, strengthValue) => {

          changeAverageGameLength = () => {
            newTotalGameLength = Number(localStorage.getItem('totalGameLength')) + gameTurn;
            localStorage.setItem('totalGameLength', newTotalGameLength);
            console.log("total game length: " + localStorage.getItem('totalGameLength'));

            var newGamesPlayed = Number(localStorage.getItem('gamesPlayed')) + 1;
            localStorage.setItem('gamesPlayed', newGamesPlayed);
            console.log("games played: " + localStorage.getItem('gamesPlayed'));

            var newAverageGameLength = Number(localStorage.getItem('totalGameLength')) / Number(localStorage.getItem('gamesPlayed'));
            localStorage.setItem('averageGameLength', newAverageGameLength);
            console.log("average game length: " + localStorage.getItem('averageGameLength'));

            var newWinPercentage = (Number(localStorage.getItem('winningGamesPlayed'))*100) / Number(localStorage.getItem('gamesPlayed'));
            localStorage.setItem('winPercentage', newWinPercentage);
            console.log("win percentage: " + localStorage.getItem('winPercentage'));
          }

          gameOverPlayerWin = () => {
            console.log(gameTurn);

            var currentQuickestWin = localStorage.getItem('quickestWin');
            console.log("quickest win: " + localStorage.getItem('quickestWin'));
            if (gameTurn < currentQuickestWin || currentQuickestWin == null) {
              localStorage.setItem('quickestWin', gameTurn);
            }
            console.log("quickest win: " + localStorage.getItem('quickestWin'));

            var currentSlowestWin = localStorage.getItem('slowestWin');
            console.log("slowest win: " + localStorage.getItem('slowestWin'));
            if (gameTurn > currentSlowestWin || currentSlowestWin == null) {
              localStorage.setItem('slowestWin', gameTurn);
            }
            console.log("slowest win: " + localStorage.getItem('slowestWin'));

            newTotalWinningGameLength = Number(localStorage.getItem('totalWinningGameLength')) + gameTurn;
            localStorage.setItem('totalWinningGameLength', newTotalWinningGameLength);
            console.log("total winning game length: " + localStorage.getItem('totalWinningGameLength'));

            var newWinningGamesPlayed = Number(localStorage.getItem('winningGamesPlayed')) + 1;
            localStorage.setItem('winningGamesPlayed', newWinningGamesPlayed);
            console.log("winning games played: " + localStorage.getItem('winningGamesPlayed'));

            var newAverageWinningGameLength = Number(localStorage.getItem('totalWinningGameLength')) / Number(localStorage.getItem('winningGamesPlayed'));
            localStorage.setItem('averageWinningGameLength', newAverageWinningGameLength);
            console.log("average winning game length: " + localStorage.getItem('averageWinningGameLength'));

            changeAverageGameLength();
          }

          gameOverComputerWin = () => {
            console.log(gameTurn);

            var currentQuickestLoss = localStorage.getItem('quickestLoss');
            console.log("quickest loss: " + localStorage.getItem('quickestLoss'));
            if (gameTurn < currentQuickestLoss || currentQuickestLoss == null) {
              localStorage.setItem('quickestLoss', gameTurn);
            }
            console.log("quickest loss: " + localStorage.getItem('quickestLoss'));

            var currentSlowestLoss = localStorage.getItem('slowestLoss');
            console.log("slowest loss: " + localStorage.getItem('slowestLoss'));
            if (gameTurn > currentSlowestLoss || currentSlowestLoss == null) {
              localStorage.setItem('slowestLoss', gameTurn);
            }
            console.log("slowest loss: " + localStorage.getItem('slowestLoss'));

            newTotalLosingGameLength = Number(localStorage.getItem('totalLosingGameLength')) + gameTurn;
            localStorage.setItem('totalLosingGameLength', newTotalLosingGameLength);
            console.log("total losing game length: " + localStorage.getItem('totalLosingGameLength'));

            var newLosingGamesPlayed = Number(localStorage.getItem('losingGamesPlayed')) + 1;
            localStorage.setItem('losingGamesPlayed', newLosingGamesPlayed);
            console.log("losing games played: " + localStorage.getItem('losingGamesPlayed'));

            var newAverageLosingGameLength = Number(localStorage.getItem('totalLosingGameLength')) / Number(localStorage.getItem('losingGamesPlayed'));
            localStorage.setItem('averageLosingGameLength', newAverageLosingGameLength);
            console.log("average losing game length: " + localStorage.getItem('averageLosingGameLength'));

            changeAverageGameLength();
          }

          gameOverDraw = () => {
            console.log(gameTurn);

            var currentQuickestDraw = localStorage.getItem('quickestDraw');
            if (gameTurn < currentQuickestDraw || currentQuickestDraw == null) {
              localStorage.setItem('quickestDraw', gameTurn);
            }

            var currentSlowestDraw = localStorage.getItem('slowestDraw');
            if (gameTurn > currentSlowestDraw || currentSlowestDraw == null) {
              localStorage.setItem('slowestDraw', gameTurn);
            }

            newTotalDrawnGameLength = Number(localStorage.getItem('totalDrawnGameLength')) + gameTurn;
            localStorage.setItem('totalDrawnGameLength', newTotalDrawnGameLength);
            console.log("total drawn game length: " + localStorage.getItem('totalDrawnGameLength'));

            var newDrawnGamesPlayed = Number(localStorage.getItem('drawnGamesPlayed')) + 1;
            localStorage.setItem('drawnGamesPlayed', newDrawnGamesPlayed);
            console.log("drawn games played: " + localStorage.getItem('drawnGamesPlayed'));

            var newAverageDrawnGameLength = Number(localStorage.getItem('totalDrawnGameLength')) / Number(localStorage.getItem('drawnGamesPlayed'));
            localStorage.setItem('averageDrawnGameLength', newAverageDrawnGameLength);
            console.log("average drawn game length: " + localStorage.getItem('averageDrawnGameLength'));

            changeAverageGameLength();
          }

          clearAreas = () => {
            while (playerArea.firstChild) {
              playerArea.removeChild(playerArea.firstChild);
            }
            while (computerArea.firstChild) {
              computerArea.removeChild(computerArea.firstChild);
            }
            if (drawnCards.length == 0) {
              while (centralArea.childNodes.length > 2) {
                centralArea.removeChild(centralArea.lastChild);
              }
            }
            gameTurn++;
            turnDisplayArea.innerHTML = 'Round: ' + gameTurn;
          }

          fadeInComputerCard = () => {
            computerArea.childNodes[0].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[2].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[3].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[4].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[5].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[1].classList.toggle('fadeIn');
          }

          fadeOutComputerCard = () => {
            computerArea.childNodes[0].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[2].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[3].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[4].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[5].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[1].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[0].classList.toggle('fadeIn');
            computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[1].classList.toggle('fadeIn');

            computerArea.childNodes[0].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[1].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[2].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[3].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[4].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[5].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[1].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[1].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[1].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[1].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[0].classList.toggle('fadeOut');
            computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[1].classList.toggle('fadeOut');
          }

          clearDrawnCardsArea = () => {
            centralArea.removeChild(drawnCardsArea);
            drawnCards = [];
          }

          roundWon = () => {
            playerTurn = true;
            if (drawnCards.length > 0) {
              for (i=0; i<drawnCards.length; i++) {
                playerCards.push(drawnCards[i]);
              }
              drawnCardsArea.classList.toggle('fadeIn');
              drawnCardsArea.classList.toggle('fadeOut');
              setTimeout(clearDrawnCardsArea, 1000);
            }
            playerCards.push(computerCards[0]);
            playerCards.push(playerCards[0]);
            playerCards.splice(0, 1);
            computerCards.splice(0, 1);
            if (computerCards.length == 0) {
              gameOverPlayerWin();
              clearAreas();
              centralTextArea.innerHTML = 'YOU WIN!';
            } else {
              clearAreas();
              playerCardCreator();
              computerCardCreator();
            }
          }

          roundLost = () => {
            playerTurn = false;
            if (drawnCards.length > 0) {
              for (i=0; i<drawnCards.length; i++) {
                computerCards.push(drawnCards[i]);
              }
              drawnCardsArea.classList.toggle('fadeIn');
              drawnCardsArea.classList.toggle('fadeOut');
              setTimeout(clearDrawnCardsArea, 1000);
            }
            computerCards.push(playerCards[0]);
            computerCards.push(computerCards[0]);
            computerCards.splice(0, 1);
            playerCards.splice(0, 1);
            if (playerCards.length == 0) {
              gameOverComputerWin();
              clearAreas();
              centralTextArea.innerHTML = 'YOU LOSE!';
            } else {
              clearAreas();
              playerCardCreator();
              computerCardCreator();
            }
          }

          fadeInDrawnCardsSection = () => {
            drawnCardsArea.classList.toggle('fadeIn');
          }

          roundDrawn = () => {
            if (drawnCards.length == 0) {
              drawnCardsTitle = document.createElement('div');
              drawnCardsTitle.classList.add('drawnCardsTitle');
              drawnCardsTitle.innerHTML = "Drawn cards:";

              drawnCardsArea = document.createElement('div');
              drawnCardsArea.classList.add('hidden');

              drawnCardsArea.appendChild(drawnCardsTitle);
              centralArea.appendChild(drawnCardsArea);
              setTimeout(fadeInDrawnCardsSection, 100);
            }
            drawnCards.push(playerCards[0]);
            drawnCards.push(computerCards[0]);
            playerCards.splice(0, 1);
            computerCards.splice(0, 1);
            for (i=0; i<drawnCards.length; i++) {
              cardCreation(
                i,
                centralArea,
                drawnCards[i][0],
                drawnCards[i][1],
                drawnCards[i][2],
                drawnCards[i][3],
                drawnCards[i][4],
                drawnCards[i][5],
                drawnCards[i][6],
                drawnCards[i][7],
                drawnCards[i][8],
                drawnCards[i][9],
                drawnCards[i][10],
                drawnCards[i][11]
              )
            }
            if (playerCards.length == 0 && computerCards.length == 0) {
              gameOverDraw();
              clearAreas();
              centralArea.innerHTML = 'IT\'S A DRAW! Somehow...';
            } else if (playerCards.length == 0) {
              gameOverComputerWin();
              clearAreas();
              centralTextArea.innerHTML = 'YOU LOSE!';
            } else if (computerCards.length == 0){
              gameOverPlayerWin();
              clearAreas();
              centralTextArea.innerHTML = 'YOU WIN!';
            } else {
              clearAreas();
              playerCardCreator();
              computerCardCreator();
            }
          }

          compareAttackStats = () => {
            var playerAttackStat = playerCards[0][3];
            var computerAttackStat = computerCards[0][3];
            if (playerAttackStat > computerAttackStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerAttackStat + ' beat their ' + computerAttackStat;
              computerArea.childNodes[0].childNodes[1].childNodes[1].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundWon, 3000);
            } else if (playerAttackStat < computerAttackStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerAttackStat + ' did not beat their ' + computerAttackStat;
              computerArea.childNodes[0].childNodes[1].childNodes[1].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundLost, 3000);
            } else {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerAttackStat + ' drew with their ' + computerAttackStat;
              computerArea.childNodes[0].childNodes[1].childNodes[1].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundDrawn, 3000);
            }
          }

          compareDefenceStats = () => {
            var playerDefenceStat = playerCards[0][5];
            var computerDefenceStat = computerCards[0][5];
            if (playerDefenceStat > computerDefenceStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerDefenceStat + ' beat their ' + computerDefenceStat;
              computerArea.childNodes[0].childNodes[1].childNodes[2].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundWon, 3000);
            } else if (playerDefenceStat < computerDefenceStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerDefenceStat + ' did not beat their ' + computerDefenceStat;
              computerArea.childNodes[0].childNodes[1].childNodes[2].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundLost, 3000);
            } else {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerDefenceStat + ' drew with their ' + computerDefenceStat;
              computerArea.childNodes[0].childNodes[1].childNodes[2].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundDrawn, 3000);
            }
          }

          compareSpeedStats = () => {
            var playerSpeedStat = playerCards[0][7];
            var computerSpeedStat = computerCards[0][7];
            if (playerSpeedStat > computerSpeedStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerSpeedStat + ' beat their ' + computerSpeedStat;
              computerArea.childNodes[0].childNodes[1].childNodes[3].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundWon, 3000);
            } else if (playerSpeedStat < computerSpeedStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerSpeedStat + ' did not beat their ' + computerSpeedStat;
              computerArea.childNodes[0].childNodes[1].childNodes[3].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundLost, 3000);
            } else {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerSpeedStat + ' drew with their ' + computerSpeedStat;
              computerArea.childNodes[0].childNodes[1].childNodes[3].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundDrawn, 3000);
            }
          }

          compareStealthStats = () => {
            var playerStealthStat = playerCards[0][9];
            var computerStealthStat = computerCards[0][9];
            if (playerStealthStat > computerStealthStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerStealthStat + ' beat their ' + computerStealthStat;
              computerArea.childNodes[0].childNodes[1].childNodes[4].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundWon, 3000);
            } else if (playerStealthStat < computerStealthStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerStealthStat + ' did not beat their ' + computerStealthStat;
              computerArea.childNodes[0].childNodes[1].childNodes[4].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundLost, 3000);
            } else {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerStealthStat + ' drew with their ' + computerStealthStat;
              computerArea.childNodes[0].childNodes[1].childNodes[4].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundDrawn, 3000);
            }
          }

          compareStrengthStats = () => {
            var playerStrengthStat = playerCards[0][11];
            var computerStrengthStat = computerCards[0][11];
            if (playerStrengthStat > computerStrengthStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerStrengthStat + ' beat their ' + computerStrengthStat;
              computerArea.childNodes[0].childNodes[1].childNodes[5].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundWon, 3000);
            } else if (playerStrengthStat < computerStrengthStat) {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerStrengthStat + ' did not beat their ' + computerStrengthStat;
              computerArea.childNodes[0].childNodes[1].childNodes[5].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundLost, 3000);
            } else {
              if (playerTurn) {
                removeEventListeners();
              }
              centralTextArea.innerHTML = 'Your ' + playerStrengthStat + ' drew with their ' + computerStrengthStat;
              computerArea.childNodes[0].childNodes[1].childNodes[5].classList.add('computerHighlightedStatFadeIn');
              fadeInComputerCard();
              setTimeout(fadeOutComputerCard, 2000);
              setTimeout(roundDrawn, 3000);
            }
          }

          removeEventListeners = () => {
            var attackStat = document.getElementsByClassName('gameStatWithHover')[0];
            var clonedAttackStat = document.getElementsByClassName('gameStatWithHover')[0].cloneNode(true);
            attackStat.parentNode.replaceChild(clonedAttackStat, attackStat);
            var defenceStat = document.getElementsByClassName('gameStatWithHover')[1];
            var clonedDefenceStat = document.getElementsByClassName('gameStatWithHover')[1].cloneNode(true);
            defenceStat.parentNode.replaceChild(clonedDefenceStat, defenceStat);
            var speedStat = document.getElementsByClassName('gameStatWithHover')[2];
            var clonedSpeedStat = document.getElementsByClassName('gameStatWithHover')[2].cloneNode(true);
            speedStat.parentNode.replaceChild(clonedSpeedStat, speedStat);
            var stealthStat = document.getElementsByClassName('gameStatWithHover')[3];
            var clonedStealthStat = document.getElementsByClassName('gameStatWithHover')[3].cloneNode(true);
            stealthStat.parentNode.replaceChild(clonedStealthStat, stealthStat);
            var strengthStat = document.getElementsByClassName('gameStatWithHover')[4];
            var clonedStrengthStat = document.getElementsByClassName('gameStatWithHover')[4].cloneNode(true);
            strengthStat.parentNode.replaceChild(clonedStrengthStat, strengthStat);
          }

          positionSetup = () => {
            card.style.position = "absolute";
            var overlapOffset = (playerCards.length + computerCards.length) - i;
            var verticalOffset = ((cardPosition*2.5) + 10) + 'px';
            var horizontalOffset = ((cardPosition*5) + 10) + 'px';
            if (cardOwner == playerArea) {
              card.style.left = '6%';
              card.style.marginLeft = horizontalOffset;
              card.style.marginTop = verticalOffset;
              card.style.zIndex = overlapOffset;
            } else if (cardOwner == computerArea) {
              card.style.right = '6%';
              card.style.marginRight = horizontalOffset;
              card.style.marginTop = verticalOffset;
              card.style.zIndex = overlapOffset;
            } else {
              var overlapOffset = i;
              card.style.transform = "scale(0.3, 0.3)";
              card.style.transformOrigin = "center center";
              card.style.zIndex = overlapOffset;
              if (i % 2 == 0) {
                var positionOffset = ((10*(i+1))-100) + 'px';
                card.style.marginLeft = "-30px";
                card.style.marginTop = positionOffset;
              } else {
                var positionOffset = ((10*(i))-100) + 'px';
                card.style.marginLeft = "60px";
                card.style.marginTop = positionOffset;
              }
            }
          }

          imageSetup = () => {
            const image = document.createElement('img');
            image.className = 'image';
            if (cardOwner == computerArea) {
              image.classList.add('hidden');
            }
            image.setAttribute('src', imageSource);
            card.appendChild(image);
          }

          nameSetup = () => {
            const cardName = document.createElement('p');
            cardName.className = 'cardName';
            if (cardOwner == computerArea) {
              cardName.classList.add('hidden');
            }
            cardName.innerHTML = cardNameContent;
            cardName.style.fontWeight = 'bold';
            cardName.style.fontSize = '110%';
            textArea.appendChild(cardName);
          }

          statsSetup = (textArea, attack, attackValue, defence, defenceValue,
             speed, speedValue, stealth, stealthValue, strength,
             strengthValue) => {

            statSetup = (card, statName, statValue) => {
              const statArea = document.createElement('div');
              statArea.className = 'gameStatWithoutHover';
              if (cardOwner == computerArea) {
                statArea.classList.add('hidden');
              }
              textArea.appendChild(statArea);
              if (playerTurn) {
                if (cardOwner == playerArea) {
                  statArea.className = 'gameStatWithHover';
                  switch (statName) {
                    case 'Attack:':
                    statArea.addEventListener('click', compareAttackStats);
                    break;
                    case 'Defence:':
                    statArea.addEventListener('click', compareDefenceStats);
                    break;
                    case 'Speed:':
                    statArea.addEventListener('click', compareSpeedStats);
                    break;
                    case 'Stealth:':
                    statArea.addEventListener('click', compareStealthStats);
                    break;
                    case 'Strength:':
                    statArea.addEventListener('click', compareStrengthStats);
                    break;
                  }
                }
              }

              const statNameVariable = document.createElement('p');
              statNameVariable.className = 'stat';
              if (cardOwner == computerArea) {
                statNameVariable.classList.add('hidden');
              }
              statNameVariable.innerHTML = statName;
              statArea.appendChild(statNameVariable);

              const statValueVariable = document.createElement('p');
              statValueVariable.className = 'statValue';
              if (cardOwner == computerArea) {
                statValueVariable.classList.add('hidden');
              }
              statValueVariable.innerHTML = statValue;
              statArea.appendChild(statValueVariable);
            }

            statSetup(card, attack, attackValue);
            statSetup(card, defence, defenceValue);
            statSetup(card, speed, speedValue);
            statSetup(card, stealth, stealthValue);
            statSetup(card, strength, strengthValue);
          }

          fadeInDrawnCards = () => {
            card.classList.add('fadeIn');
          }

          const card = document.createElement('div');
          card.className = 'card';

          positionSetup(card, cardPosition);
          imageSetup(card, imageSource);

          textArea = document.createElement('div');
          textArea.className = 'textArea';
          if (cardOwner == computerArea) {
            textArea.classList.add('hidden');
          }
          card.appendChild(textArea);

          nameSetup(textArea, cardNameContent);
          statsSetup(textArea, attack, attackValue, defence, defenceValue, speed, speedValue, stealth, stealthValue, strength, strengthValue);

          if (cardOwner == centralArea) {
            card.classList.add('hidden');
            drawnCardsArea.appendChild(card);
            setTimeout(fadeInDrawnCards, 100);
          } else {
            cardOwner.appendChild(card);
          }
        }

        computerTurn = () => {
          highestComputerStat = Math.max(computerCards[0][3], computerCards[0][5], computerCards[0][7], computerCards[0][9], computerCards[0][11]);
          switch (highestComputerStat) {
            case computerCards[0][3]:
            compareAttackStats();
            break;
            case computerCards[0][5]:
            compareDefenceStats();
            break;
            case computerCards[0][7]:
            compareSpeedStats();
            break;
            case computerCards[0][9]:
            compareStealthStats();
            break;
            case computerCards[0][11]:
            compareStrengthStats();
            break;
          }
        }

        playerCardCreator = () => {
          turnDisplayArea.innerHTML = 'Round: ' + gameTurn;
          for (i=0; i<playerCards.length; i++) {
            cardCreation(
              i,
              playerArea,
              playerCards[i][0],
              playerCards[i][1],
              playerCards[i][2],
              playerCards[i][3],
              playerCards[i][4],
              playerCards[i][5],
              playerCards[i][6],
              playerCards[i][7],
              playerCards[i][8],
              playerCards[i][9],
              playerCards[i][10],
              playerCards[i][11]
            )
          }
        }

        computerCardCreator = () => {
          for (i=0; i<computerCards.length; i++) {
            cardCreation(
              i,
              computerArea,
              computerCards[i][0],
              computerCards[i][1],
              computerCards[i][2],
              computerCards[i][3],
              computerCards[i][4],
              computerCards[i][5],
              computerCards[i][6],
              computerCards[i][7],
              computerCards[i][8],
              computerCards[i][9],
              computerCards[i][10],
              computerCards[i][11]
            )
          }
          if (playerTurn == false) {
            if (gameTurn == 1) {
              setTimeout(computerTurn, 2000);
            } else {
              setTimeout(computerTurn, 1000);
            }
          }
        }

        playerCardGenerator = () => {
          for (i=0; i<(amountOfCards/2); i++) {
            var randomPlayerCardNumber = Math.floor(Math.random() * cardList.length);
            playerCards.push(cardList[randomPlayerCardNumber]);
            cardList.splice(randomPlayerCardNumber, 1);
          }
          playerCardCreator();
        }

        computerCardGenerator = () => {
          for (i=0; i<(amountOfCards/2); i++) {
            var randomComputerCardNumber = Math.floor(Math.random() * cardList.length);
            computerCards.push(cardList[randomComputerCardNumber]);
            cardList.splice(randomComputerCardNumber, 1);
          }
          computerCardCreator();
        }

        const cardList = [
          ['../images/20191102_132951.jpeg', 'Royal Footsoldier',   'Attack:', 5, 'Defence:', 6, 'Speed:', 6, 'Stealth:', 4, 'Strength:', 5],
          ['../images/20191102_133046.jpeg', 'Royal Spearman',      'Attack:', 6, 'Defence:', 5, 'Speed:', 4, 'Stealth:', 3, 'Strength:', 6],
          ['../images/20191102_133133.jpeg', 'Royal Archer',        'Attack:', 6, 'Defence:', 5, 'Speed:', 7, 'Stealth:', 6, 'Strength:', 5],
          ['../images/20191102_133200.jpeg', 'Royal Knight',        'Attack:', 7, 'Defence:', 8, 'Speed:', 2, 'Stealth:', 2, 'Strength:', 8],
          ['../images/20191102_133225.jpeg', 'Kingsguard',          'Attack:', 8, 'Defence:', 6, 'Speed:', 6, 'Stealth:', 4, 'Strength:', 7],
          ['../images/20191102_133255.jpeg', 'The King',            'Attack:', 9, 'Defence:', 10, 'Speed:', 3, 'Stealth:', 3, 'Strength:', 9],
          ['../images/20191102_134921.jpeg', 'Dragon Knight',       'Attack:', 6, 'Defence:', 4, 'Speed:', 5, 'Stealth:', 6, 'Strength:', 6],
          ['../images/20191102_134904.jpeg', 'Dragon Archer',       'Attack:', 6, 'Defence:', 2, 'Speed:', 8, 'Stealth:', 8, 'Strength:', 4],
          ['../images/20191102_134936.jpeg', 'Dragonguard',         'Attack:', 8, 'Defence:', 5, 'Speed:', 5, 'Stealth:', 6, 'Strength:', 7],
          ['../images/20191102_135038.jpeg', 'The Dragonking',      'Attack:', 10, 'Defence:', 9, 'Speed:', 2, 'Stealth:', 4, 'Strength:', 9],
          ['../images/20191102_134949.jpeg', 'Dark Ninja',          'Attack:', 8, 'Defence:', 2, 'Speed:', 8, 'Stealth:', 10, 'Strength:', 5],
          ['../images/20191102_135005.jpeg', 'The Executioner',     'Attack:', 7, 'Defence:', 3, 'Speed:', 7, 'Stealth:', 7, 'Strength:', 6],
          ['../images/20191102_134823.jpeg', 'Ogre Brute',          'Attack:', 8, 'Defence:', 1, 'Speed:', 1, 'Stealth:', 2, 'Strength:', 10],
          ['../images/20191102_134957.jpeg', 'Assassin',            'Attack:', 5, 'Defence:', 2, 'Speed:', 9, 'Stealth:', 9, 'Strength:', 4],
          ['../images/20191102_135026.jpeg', 'Distant Swordsman',   'Attack:', 8, 'Defence:', 8, 'Speed:', 6, 'Stealth:', 5, 'Strength:', 7],
          ['../images/20191102_133442.jpeg', 'King\'s Horse',       'Attack:', 2, 'Defence:', 7, 'Speed:', 9, 'Stealth:', 1, 'Strength:', 7],
          ['../images/20191102_135050.jpeg', 'Dragonsteed',         'Attack:', 2, 'Defence:', 4, 'Speed:', 10, 'Stealth:', 2, 'Strength:', 7],
          ['../images/20191102_134213.jpeg', 'King on Horse',       'Attack:', 8, 'Defence:', 9, 'Speed:', 8, 'Stealth:', 2, 'Strength:', 8],
          ['../images/20191102_135115.jpeg', 'Dragon on Steed',     'Attack:', 9, 'Defence:', 7, 'Speed:', 9, 'Stealth:', 3, 'Strength:', 8],
          ['../images/20191102_135450.jpeg', 'Royal Castle',        'Attack:', 3, 'Defence:', 10, 'Speed:', 0, 'Stealth:', 0, 'Strength:', 10],
          ['../images/20191201_172415.jpeg', 'The Gentleman',       'Attack:', 9, 'Defence:', 4, 'Speed:', 7, 'Stealth:', 9, 'Strength:', 6],
          ['../images/20191201_172442.jpeg', 'The Red Wizard',      'Attack:', 10, 'Defence:', 2, 'Speed:', 5, 'Stealth:', 4, 'Strength:', 6],
          ['../images/20191201_172510.jpeg', 'The Werewolf',        'Attack:', 8, 'Defence:', 3, 'Speed:', 8, 'Stealth:', 2, 'Strength:', 8],
          ['../images/20191201_172553.jpeg', 'Warrior Dwarf',       'Attack:', 6, 'Defence:', 4, 'Speed:', 5, 'Stealth:', 8, 'Strength:', 6],
          ['../images/20191201_172622.jpeg', 'Skeleton Soldier',    'Attack:', 6, 'Defence:', 1, 'Speed:', 8, 'Stealth:', 7, 'Strength:', 2],
          ['../images/20191201_172718.jpeg', 'Skeleton King',       'Attack:', 6, 'Defence:', 4, 'Speed:', 8, 'Stealth:', 5, 'Strength:', 3],
          ['../images/20191201_172626.jpeg', 'The Mummy',           'Attack:', 7, 'Defence:', 4, 'Speed:', 4, 'Stealth:', 6, 'Strength:', 6],
          ['../images/20191201_172633.jpeg', 'Desert Soldier',      'Attack:', 8, 'Defence:', 6, 'Speed:', 7, 'Stealth:', 5, 'Strength:', 7],
          ['../images/20191201_172756.jpeg', 'Desert Warrior',      'Attack:', 9, 'Defence:', 8, 'Speed:', 7, 'Stealth:', 6, 'Strength:', 8],
          ['../images/20191201_172642.jpeg', 'Desert Knight',       'Attack:', 9, 'Defence:', 7, 'Speed:', 6, 'Stealth:', 6, 'Strength:', 8],
          ['../images/20191201_172702.jpeg', 'Desert Gladiator',    'Attack:', 10, 'Defence:', 9, 'Speed:', 4, 'Stealth:', 3, 'Strength:', 9],
          ['../images/20191201_172748.jpeg', 'Desert Emperor',      'Attack:', 5, 'Defence:', 4, 'Speed:', 7, 'Stealth:', 7, 'Strength:', 5]
        ]

        const amountOfCards = cardList.length;

        playerCards = [];

        computerCards = [];

        drawnCards = [];

        playerCardGenerator();
        computerCardGenerator();

    }

    fadeInGameDisplay = () => {
      playerArea.classList.toggle('fadeIn');
      centralArea.classList.toggle('fadeIn');
      computerArea.classList.toggle('fadeIn');
    }

    gameStart = () => {
      gameTurn = 1;
      playerArea = document.createElement('div');
      playerArea.classList.add('playerArea', 'hidden');
      gameDisplay.appendChild(playerArea);

      centralArea = document.createElement('div');
      centralArea.classList.add('centralArea', 'hidden');
      turnDisplayArea = document.createElement('div');
      turnDisplayArea.classList.add('turnDisplayArea');
      centralArea.appendChild(turnDisplayArea);
      centralTextArea = document.createElement('div');
      centralTextArea.classList.add('centralTextArea');
      centralArea.appendChild(centralTextArea);
      if (playerTurn) {
        centralTextArea.innerHTML = 'You go first!';
      } else {
        centralTextArea.innerHTML = 'Computer goes first';
      }
      gameDisplay.appendChild(centralArea);

      computerArea = document.createElement('div');
      computerArea.classList.add('computerArea', 'hidden');
      gameDisplay.appendChild(computerArea);
      generateCards();
      setTimeout(fadeInGameDisplay, 100);
    }

    beginButton.className = 'beginButtonWithoutHover buttonFadeOut';
    setTimeout(removeButton, 1000);
    setTimeout(whoGoesFirst, 1000);
  }

  const gameDisplay = document.createElement('div');
  gameDisplay.className = 'gameDisplay';

  const beginButton = document.createElement('button');
  beginButton.className = 'beginButton';
  beginButton.innerHTML = 'Start Game';
  gameDisplay.appendChild(beginButton);
  beginButton.addEventListener('click', start);


  const content = document.querySelector('.content');
  const homeButton = document.querySelector('.homepage');
  content.insertBefore(gameDisplay, homeButton);

//
//   scoreRearranger = (score1, score2, score3, score4, score5, gameScore) => {
//     if (score4 == 'dummy') {
//       localStorage.setItem(score5, gameScore);
//     } else if (score3 == 'dummy') {
//       localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
//       localStorage.setItem(score4, gameScore);
//     } else if (score2 == 'dummy') {
//       localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
//       localStorage.setItem(score4, localStorage.getItem(score3, gameScore));
//       localStorage.setItem(score3, gameScore);
//     } else if (score1 == 'dummy') {
//       localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
//       localStorage.setItem(score4, localStorage.getItem(score3, gameScore));
//       localStorage.setItem(score3, localStorage.getItem(score2, gameScore));
//       localStorage.setItem(score2, gameScore);
//     } else {
//       localStorage.setItem(score5, localStorage.getItem(score4, gameScore));
//       localStorage.setItem(score4, localStorage.getItem(score3, gameScore));
//       localStorage.setItem(score3, localStorage.getItem(score2, gameScore));
//       localStorage.setItem(score2, localStorage.getItem(score1, gameScore));
//       localStorage.setItem(score1, gameScore);
//     }
//   }
//
//   scoreDecider = (score1, score2, score3, score4, score5, gameScore) => {
//     if (gameScore >= localStorage.getItem(score1) || localStorage.getItem(score1) == 'null') {
//       scoreRearranger(score1, score2, score3, score4, score5, gameScore);
//     }
//     else if (gameScore >= localStorage.getItem(score2) || localStorage.getItem(score2) == 'null') {
//       scoreRearranger('dummy', score2, score3, score4, score5, gameScore);
//     }
//     else if (gameScore >= localStorage.getItem(score3) || localStorage.getItem(score3) == 'null') {
//       scoreRearranger('dummy', 'dummy', score3, score4, score5, gameScore);
//     }
//     else if (gameScore >= localStorage.getItem(score4) || localStorage.getItem(score4) == 'null') {
//       scoreRearranger('dummy', 'dummy', 'dummy', score4, score5, gameScore);
//     }
//     else if (gameScore >= localStorage.getItem(score5) || localStorage.getItem(score5) == 'null') {
//       scoreRearranger('dummy', 'dummy', 'dummy', 'dummy', score5, gameScore);
//     }
//   }
//
//   gameOver = () => {
//     backgroundNormal();
//     gameContent.innerHTML = 'Well done! You scored:';
//     answerButtonsArea.innerHTML = `${gameScore}`;
//     answerButtonsArea.style.paddingBottom = '20px';
//     answerArea.parentNode.removeChild(answerArea);
//     delete answerArea;
//     homeButton.classList.add('disappear');
//
//     setTimeout(gameOverDisplay, 1000);
//
//     if (num1 == 19) {
//       localStorage.setItem('currentScore', gameScore);
//       scoreDecider('Score1AdditionEasy', 'Score2AdditionEasy', 'Score3AdditionEasy', 'Score4AdditionEasy', 'Score5AdditionEasy', gameScore);
//       localStorage.removeItem('currentScore');
//     } else if (num1 == 49) {
//       localStorage.setItem('currentScore', gameScore);
//       scoreDecider('Score1AdditionMedium', 'Score2AdditionMedium', 'Score3AdditionMedium', 'Score4AdditionMedium', 'Score5AdditionMedium', gameScore);
//       localStorage.removeItem('currentScore');
//     } else if (num1 == 99) {
//       localStorage.setItem('currentScore', gameScore);
//       scoreDecider('Score1AdditionHard', 'Score2AdditionHard', 'Score3AdditionHard', 'Score4AdditionHard', 'Score5AdditionHard', gameScore);
//       localStorage.removeItem('currentScore');
//     }


})
