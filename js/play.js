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
      setTimeout(fadeOutText, 1000);
      setTimeout(removeText, 1000);
      // setTimeout(fadeOutText, 3000);
      // setTimeout(removeText, 4000);
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
        setTimeout(gameStart, 1000);
        // setTimeout(gameStart, 4000);
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
        setTimeout(coinFlipDecision, 1000);
        setTimeout(clearCoinAndTextDisplay, 1000);
        // setTimeout(clearCoinAndTextDisplay, 4000);
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

      cardCreation = (cardOwner, imageSource, cardNameContent, attack, attackValue,
        defence, defenceValue, speed, speedValue, stealth, stealthValue,
        strength, strengthValue) => {

          compareAttackStats = () => {
            const computerAttackStat = computerArea.childNodes[0].childNodes[1].childNodes[1].childNodes[1].innerHTML;
            console.log(computerAttackStat);
            if (attackValue > computerAttackStat) {
              centralArea.innerHTML = 'Your ' + attackValue + ' beat their ' + computerAttackStat;
            }
            if (attackValue <= computerAttackStat) {
              centralArea.innerHTML = 'Your ' + attackValue + ' did not beat their ' + computerAttackStat;
            }
            if (playerTurn = true) {
            }
          }
          
          compareDefenceStats = () => {
            const computerDefenceStat = computerArea.childNodes[0].childNodes[1].childNodes[2].childNodes[1].innerHTML;
            console.log(computerDefenceStat);
            if (attackValue > computerDefenceStat) {
              centralArea.innerHTML = 'Your ' + defenceValue + ' beat their ' + computerDefenceStat;
            }
            if (attackValue <= computerDefenceStat) {
              centralArea.innerHTML = 'Your ' + defenceValue + ' did not beat their ' + computerDefenceStat;
            }
            if (playerTurn = true) {
            }
          }

          compareSpeedStats = () => {
            const computerSpeedStat = computerArea.childNodes[0].childNodes[1].childNodes[3].childNodes[1].innerHTML;
            console.log(computerSpeedStat);
            if (speedValue > computerSpeedStat) {
              centralArea.innerHTML = 'Your ' + speedValue + ' beat their ' + computerSpeedStat;
            }
            if (speedValue <= computerSpeedStat) {
              centralArea.innerHTML = 'Your ' + speedValue + ' did not beat their ' + computerSpeedStat;
            }
            if (playerTurn = true) {
            }
          }

          compareStealthStats = () => {
            const computerStealthStat = computerArea.childNodes[0].childNodes[1].childNodes[4].childNodes[1].innerHTML;
            console.log(computerStealthStat);
            if (stealthValue > computerStealthStat) {
              centralArea.innerHTML = 'Your ' + stealthValue + ' beat their ' + computerStealthStat;
            }
            if (stealthValue <= computerStealthStat) {
              centralArea.innerHTML = 'Your ' + stealthValue + ' did not beat their ' + computerStealthStat;
            }
            if (playerTurn = true) {
            }
          }

          compareStrengthStats = () => {
            const computerStrengthStat = computerArea.childNodes[0].childNodes[1].childNodes[5].childNodes[1].innerHTML;
            console.log(computerStrengthStat);
            if (strengthValue > computerStrengthStat) {
              centralArea.innerHTML = 'Your ' + strengthValue + ' beat their ' + computerStrengthStat;
            }
            if (strengthValue <= computerStrengthStat) {
              centralArea.innerHTML = 'Your ' + strengthValue + ' did not beat their ' + computerStrengthStat;
            }
            if (playerTurn = true) {
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
              statArea.className = 'gameStat';
              if (cardOwner == computerArea) {
                statArea.classList.add('hidden');
              }
              textArea.appendChild(statArea);
              if (cardOwner == playerArea) {
                switch (statName) {
                  case 'Attack:':
                  statArea.addEventListener('click', compareAttackStats)
                  break;
                  case 'Defence:':
                  statArea.addEventListener('click', compareDefenceStats)
                  break;
                  case 'Speed:':
                  statArea.addEventListener('click', compareSpeedStats)
                  break;
                  case 'Stealth:':
                  statArea.addEventListener('click', compareStealthStats)
                  break;
                  case 'Strength:':
                  statArea.addEventListener('click', compareStrengthStats)
                  break;
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

          const card = document.createElement('div');
          card.className = 'card';

          imageSetup(card, imageSource);

          textArea = document.createElement('div');
          textArea.className = 'textArea';
          if (cardOwner == computerArea) {
            textArea.classList.add('hidden');
          }
          card.appendChild(textArea);

          nameSetup(textArea, cardNameContent);
          statsSetup(textArea, attack, attackValue, defence, defenceValue, speed, speedValue, stealth, stealthValue, strength, strengthValue);

          cardOwner.appendChild(card);
        }

        const cardList = [
          ['../images/20191102_132951.jpeg', 'Royal Footsoldier', 'Attack:', 5, 'Defence:', 6, 'Speed:', 6, 'Stealth:', 4, 'Strength:', 5],
          ['../images/20191102_133046.jpeg', 'Royal Spearman', 'Attack:', 6, 'Defence:', 5, 'Speed:', 4, 'Stealth:', 3, 'Strength:', 6],
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
          ['../images/20191102_133442.jpeg', 'King\'s Horse',       'Attack:', 2, 'Defence:', 7, 'Speed:', 10, 'Stealth:', 1, 'Strength:', 7],
          ['../images/20191102_135050.jpeg', 'Dragonsteed',         'Attack:', 2, 'Defence:', 4, 'Speed:', 10, 'Stealth:', 2, 'Strength:', 7],
          ['../images/20191102_134213.jpeg', 'King on Horse',       'Attack:', 8, 'Defence:', 9, 'Speed:', 10, 'Stealth:', 2, 'Strength:', 8],
          ['../images/20191102_135115.jpeg', 'Dragon on Steed',     'Attack:', 9, 'Defence:', 7, 'Speed:', 10, 'Stealth:', 4, 'Strength:', 8],
          ['../images/20191102_135450-1.jpeg', 'Royal Castle',      'Attack:', 3, 'Defence:', 10, 'Speed:', 0, 'Stealth:', 0, 'Strength:', 10]
        ]

        const randomPlayerCardNumber = Math.floor(Math.random() * 20);
        cardCreation(
          playerArea,
          cardList[randomPlayerCardNumber][0],
          cardList[randomPlayerCardNumber][1],
          cardList[randomPlayerCardNumber][2],
          cardList[randomPlayerCardNumber][3],
          cardList[randomPlayerCardNumber][4],
          cardList[randomPlayerCardNumber][5],
          cardList[randomPlayerCardNumber][6],
          cardList[randomPlayerCardNumber][7],
          cardList[randomPlayerCardNumber][8],
          cardList[randomPlayerCardNumber][9],
          cardList[randomPlayerCardNumber][10],
          cardList[randomPlayerCardNumber][11]
        );

        const randomComputerCardNumber = Math.floor(Math.random() * 20);
        cardCreation(
          computerArea,
          cardList[randomComputerCardNumber][0],
          cardList[randomComputerCardNumber][1],
          cardList[randomComputerCardNumber][2],
          cardList[randomComputerCardNumber][3],
          cardList[randomComputerCardNumber][4],
          cardList[randomComputerCardNumber][5],
          cardList[randomComputerCardNumber][6],
          cardList[randomComputerCardNumber][7],
          cardList[randomComputerCardNumber][8],
          cardList[randomComputerCardNumber][9],
          cardList[randomComputerCardNumber][10],
          cardList[randomComputerCardNumber][11]
        );

    }


    gameStart = () => {
      playerArea = document.createElement('div');
      playerArea.className = 'playerArea';
      gameDisplay.appendChild(playerArea);

      centralArea = document.createElement('div');
      if (playerTurn == true) {
        centralArea.innerHTML = 'You go first!';
      } else {
        centralArea.innerHTML = 'Computer goes first';
      }
      centralArea.className = 'centralArea';
      gameDisplay.appendChild(centralArea);

      computerArea = document.createElement('div');
      computerArea.className = 'computerArea';
      gameDisplay.appendChild(computerArea);
      generateCards();

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


// gamePlay = (num1, num2) => {
//   let gameScore = 0;
//   let seconds = 30;
//
//   creatingUpperDisplay = () => {
//     timer.className = 'upperDisplayElementsContainer';
//     timerContent.className = 'upperDisplayElements';
//     calculationDisplay.className = 'upperDisplayElements';
//     calculationDisplay.innerHTML = 'Addition';
//     difficultyDisplay.className = 'upperDisplayElements';
//     timer.appendChild(timerContent);
//     timer.appendChild(calculationDisplay);
//     timer.appendChild(difficultyDisplay);
//   }
//   const timer = document.createElement('div');
//   const timerContent = document.createElement('p');
//   const calculationDisplay = document.createElement('p');
//   const difficultyDisplay = document.createElement('p');
//   creatingUpperDisplay();
//
//   settingDifficultyDisplay = () => {
//     if (num1 == 19) {
//       difficultyDisplay.innerHTML = 'Difficulty: Easy';
//     } else if (num1 == 49) {
//       difficultyDisplay.innerHTML = 'Difficulty: Medium';
//     } else if (num1 == 99) {
//       difficultyDisplay.innerHTML = 'Difficulty: Hard';
//     }
//   }
//   settingDifficultyDisplay();
//
//   const game = document.createElement('div');
//   game.className = 'gameClass';
//   const gameContent = document.createElement('p');
//   gameContent.style.fontSize = '40px';
//   game.appendChild(gameContent);
//
//   const answerArea = document.createElement('p');
//   answerArea.className = 'answerArea';
//   game.appendChild(answerArea);
//   let submittedAnswer = '';
//
//   displayAnswer = () => {
//     answerArea.innerHTML = `${submittedAnswer}`;
//   }
//   setInterval(displayAnswer, 10);
//
//   const answerButtonsArea = document.createElement('div');
//   answerButtonsArea.className = 'buttons';
//
//   const answerButtonsArea1 = document.createElement('div');
//   const answerButtonsArea2 = document.createElement('div');
//   const answerButtonsArea3 = document.createElement('div');
//   const answerButtonsArea4 = document.createElement('div');
//   const answerButtonsArea5 = document.createElement('div');
//
//   answerButtonsArray = [answerButtonsArea1, answerButtonsArea2, answerButtonsArea3, answerButtonsArea4, answerButtonsArea5];
//
//   differentButtonSections = () => {
//     for (i=0; i<answerButtonsArray.length; i++) {
//       answerButtonsArea.appendChild(answerButtonsArray[i]);
//     }
//   }
//   differentButtonSections();
//
//   addNumber = (number) => {
//     if (submittedAnswer.length < 5) {
//       if (number <= 9) {
//         submittedAnswer += number;
//       } else if (number == 10) {
//         submittedAnswer += '-';
//       }
//     }
//     if (number == 11) {
//       submittedAnswer = submittedAnswer.substr(0, submittedAnswer.length-1);
//     } else if (number == 12) {
//       submittedAnswer = '';
//     }
//   }
//
//   const answerZero = document.createElement('button');
//   answerZero.addEventListener('click', function() {addNumber(0)});
//   const answerOne = document.createElement('button');
//   answerOne.addEventListener('click', function() {addNumber(1)});
//   const answerTwo = document.createElement('button');
//   answerTwo.addEventListener('click', function() {addNumber(2)});
//   const answerThree = document.createElement('button');
//   answerThree.addEventListener('click', function() {addNumber(3)});
//   const answerFour = document.createElement('button');
//   answerFour.addEventListener('click', function() {addNumber(4)});
//   const answerFive = document.createElement('button');
//   answerFive.addEventListener('click', function() {addNumber(5)});
//   const answerSix = document.createElement('button');
//   answerSix.addEventListener('click', function() {addNumber(6)});
//   const answerSeven = document.createElement('button');
//   answerSeven.addEventListener('click', function() {addNumber(7)});
//   const answerEight = document.createElement('button');
//   answerEight.addEventListener('click', function() {addNumber(8)});
//   const answerNine = document.createElement('button');
//   answerNine.addEventListener('click', function() {addNumber(9)});
//   const answerMinus = document.createElement('button');
//   answerMinus.addEventListener('click', function() {addNumber(10)});
//   const answerDelete = document.createElement('button');
//   answerDelete.addEventListener('click', function() {addNumber(11)});
//   const answerClear = document.createElement('button');
//   answerClear.addEventListener('click', function() {addNumber(12)});
//
//   buttonArray = [answerZero, answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix, answerSeven, answerEight, answerNine, answerMinus, answerDelete, answerClear];
//
//   buttonArrangement = () => {
//     for (i=0; i<buttonArray.length; i++) {
//       buttonArray[i].setAttribute('type', 'button');
//       switch (i) {
//         case (11):
//           buttonArray[i].setAttribute('class', 'deleteButton');
//           buttonArray[i].innerHTML = 'Delete';
//           answerButtonsArea4.appendChild(buttonArray[i]);
//         break;
//         case (10):
//           buttonArray[i].setAttribute('class', 'answerButtons');
//           buttonArray[i].innerHTML = '-';
//           answerButtonsArea5.appendChild(buttonArray[i]);
//         break;
//         case (12):
//           buttonArray[i].setAttribute('class', 'clearButton');
//           buttonArray[i].innerHTML = 'Clear';
//           answerButtonsArea5.appendChild(buttonArray[i]);
//         break;
//         default:
//           buttonArray[i].setAttribute('class', 'answerButtons');
//           buttonArray[i].innerHTML = i;
//           if (i > 6 && i < 10) {
//             answerButtonsArea1.appendChild(buttonArray[i]);
//           } else if (i > 3 && i < 7) {
//             answerButtonsArea2.appendChild(buttonArray[i]);
//           } else if (i > 0 && i < 4) {
//             answerButtonsArea3.appendChild(buttonArray[i]);
//           } else {
//             answerButtonsArea4.appendChild(buttonArray[i]);
//           }
//       }
//     }
//   }
//   buttonArrangement();
//   game.appendChild(answerButtonsArea);
//
//   const body = document.querySelector('body');
//   const button = document.querySelector('div');
//   const homeButton = document.querySelector('.homeButton');
//   body.insertBefore(timer, button);
//   body.insertBefore(game, button);
//   timerContent.innerHTML = `Time Left: ${seconds}`;
//
//   mediaQuery = (windowSize) => {
//     if (windowSize.matches) {
//       game.style.width = '90%';
//       timer.style.width = '100%';
//       timerContent.style.fontSize = '2.6vw';
//       calculationDisplay.style.fontSize = '2.6vw';
//       difficultyDisplay.style.fontSize = '2.6vw';
//       gameContent.style.fontSize = '5vw';
//       game.style.height = '50%';
//       answerArea.style.fontSize = '5vw';
//       answerButtonsArea.style.fontSize = '5vw';
//     } else {
//       game.style.width = '60%';
//       timer.style.width = '90%';
//       timerContent.style.fontSize = '20px';
//       calculationDisplay.style.fontSize = '20px';
//       difficultyDisplay.style.fontSize = '20px';
//       gameContent.style.fontSize = '40px';
//       answerArea.style.fontSize = '30px';
//       answerButtonsArea.style.fontSize = '30px';
//     }
//   }
//   let windowSize = window.matchMedia("(max-width: 600px)");
//   mediaQuery(windowSize);
//   windowSize.addListener(mediaQuery);
//
//   ready = () => {
//     gameContent.innerHTML = 'Ready...';
//   };
//   getSet = () => {
//     gameContent.innerHTML = 'Get set...';
//   };
//   go = () => {
//     gameContent.innerHTML = 'Go!';
//   };
//   gameStart = () => {
//     answerArea.removeAttribute('placeholder');
//     gameContent.innerHTML = `${number1} + ${number2}`;
//     setInterval(countdown, 1000);
//   };
//
//   setTimeout(ready, 0);
//   setTimeout(getSet, 1000);
//   setTimeout(go, 2000);
//   setTimeout(gameStart, 3000);
//
//   let number1 = parseInt(Math.random()*num1) + 1;
//   let number2 = parseInt(Math.random()*num2) + 1;
//   let correctAnswer = number1 + number2;
//   checker = () => {
//     if (submittedAnswer == correctAnswer) {
//       gameScore++;
//       let number1 = parseInt(Math.random()*num1) + 1;
//       let number2 = parseInt(Math.random()*num2) + 1;
//       gameContent.innerHTML = `${number1} + ${number2}`;
//       correctAnswer = number1 + number2;
//       submittedAnswer = '';
//       game.style.background = 'rgb(33, 245, 22)';
//       setTimeout(backgroundNormal, 250);
//     };
//   };
//   setInterval(checker, 10);
//
//   backgroundNormal = () => {
//     game.style.background = 'white'
//   };
//
//   countdown = () => {
//     if (seconds === 0) {
//       seconds = -1;
//       timerContent.innerHTML = 'Out of time!';
//       gameOver();
//     } else if (seconds > 0) {
//       seconds--;
//       timerContent.innerHTML = `Time Left: ${seconds}`;
//     };
//   };
//
//   gameOverDisplay = () => {
//     const container = document.querySelector('.container');
//     homeButton.classList.toggle('fadeIn');
//     const buttonArea = document.createElement('div');
//     buttonArea.className = 'buttons';
//     buttonArea.style.textAlign = 'center';
//
//     const newButtonForReplay = document.createElement('button');
//     newButtonForReplay.setAttribute('class', 'gameType');
//     newButtonForReplay.setAttribute('type', 'button');
//     newButtonForReplay.innerHTML = 'Play Again';
//     newButtonForReplay.style.margin = '5px';
//
//     const newLinkForDifficulty = document.createElement('a');
//     newLinkForDifficulty.setAttribute('href', 'addition.html');
//     const newButtonForDifficulty = document.createElement('button');
//     newButtonForDifficulty.setAttribute('class', 'gameType');
//     newButtonForDifficulty.setAttribute('type', 'button');
//     newButtonForDifficulty.innerHTML = 'Change Difficulty';
//     newButtonForDifficulty.style.margin = '5px';
//
//     newLinkForDifficulty.appendChild(newButtonForDifficulty);
//
//     buttonArea.appendChild(newButtonForReplay);
//     buttonArea.appendChild(newLinkForDifficulty);
//
//     body.insertBefore(buttonArea, button);
//     buttonArea.classList.add('disappear');
//
//     fadeForReplayButtons = () => {
//       buttonArea.classList.toggle('fadeIn');
//       homeButton.classList.remove('disappear', 'fadeIn');
//     }
//     setTimeout(fadeForReplayButtons, 500);
//
//     replayTypeDecider = () => {
//       game.parentNode.removeChild(game);
//       timer.parentNode.removeChild(timer);
//       clearTimeout(gameStart);
//       buttonArea.removeChild(newLinkForDifficulty);
//       buttonArea.removeChild(newButtonForReplay);
//       if (num1 == 19) {
//         gamePlay(19, 19);
//       } else if (num1 == 49) {
//         gamePlay(49, 49);
//       } else if (num1 == 99) {
//         gamePlay(99, 99);
//       }
//     };
//     newButtonForReplay.addEventListener('click', replayTypeDecider);
//   }
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
//   };
// };
//
// easyGame = () => {
//   content.parentNode.removeChild(content);
//   gamePlay(19, 19);
// };
//
// mediumGame = () => {
//   content.parentNode.removeChild(content);
//   gamePlay(49, 49);
// };
//
// hardGame = () => {
//   content.parentNode.removeChild(content);
//   gamePlay(99, 99);
// };
//
// easyDifficulty.addEventListener('click', easyGame);
// mediumDifficulty.addEventListener('click', mediumGame);
// hardDifficulty.addEventListener('click', hardGame);

})
