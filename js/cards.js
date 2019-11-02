document.addEventListener('DOMContentLoaded', () => {

  const allCardsDisplay = document.createElement('div');
  allCardsDisplay.className = 'cardDisplay';

  cardCreation = (imageSource, cardNameContent, attackValue, defenceValue, speedValue,
     stealthValue, strengthValue) => {

    imageSetup = () => {
      const image = document.createElement('img');
      image.className = 'image';
      image.setAttribute('src', imageSource);
      card.appendChild(image);
    }

    nameSetup = () => {
      const cardName = document.createElement('p');
      cardName.innerHTML = cardNameContent;
      cardName.className = 'cardName';
      cardName.style.fontWeight = 'bold';
      cardName.style.fontSize = '110%';
      textArea.appendChild(cardName);
    }

    statsSetup = (textArea, attackValue, defenceValue, speedValue,
       stealthValue, strengthValue) => {

      attackSetup = () => {
        const attack = document.createElement('p');
        attack.className = 'stat';
        attack.innerHTML = 'Attack:';
        textArea.appendChild(attack);

        const attackStat = document.createElement('p');
        attackStat.className = 'statValue';
        attackStat.innerHTML = attackValue;
        textArea.appendChild(attackStat);
      }

      defenceSetup = () => {
        const defence = document.createElement('p');
        defence.className = 'stat';
        defence.innerHTML = 'Defence:';
        textArea.appendChild(defence);

        const defenceStat = document.createElement('p');
        defenceStat.className = 'statValue';
        defenceStat.innerHTML = defenceValue;
        textArea.appendChild(defenceStat);
      }

      speedSetup = () => {
        const speed = document.createElement('p');
        speed.className = 'stat';
        speed.innerHTML = 'Speed:';
        textArea.appendChild(speed);

        const speedStat = document.createElement('p');
        speedStat.className = 'statValue';
        speedStat.innerHTML = speedValue;
        textArea.appendChild(speedStat);
      }

      stealthSetup = () => {
        const stealth = document.createElement('p');
        stealth.className = 'stat';
        stealth.innerHTML = 'Stealth:';
        textArea.appendChild(stealth);

        const stealthStat = document.createElement('p');
        stealthStat.className = 'statValue';
        stealthStat.innerHTML = stealthValue;
        textArea.appendChild(stealthStat);
      }

      strengthSetup = () => {
        const strength = document.createElement('p');
        strength.className = 'stat';
        strength.innerHTML = 'Strength:';
        textArea.appendChild(strength);

        const strengthStat = document.createElement('p');
        strengthStat.className = 'statValue';
        strengthStat.innerHTML = strengthValue;
        textArea.appendChild(strengthStat);
      }

      attackSetup(card, attackValue);
      defenceSetup(card, defenceValue);
      speedSetup(card, speedValue);
      stealthSetup(card, stealthValue);
      strengthSetup(card, strengthValue);

    }

    const card = document.createElement('div');
    card.className = 'card';

    imageSetup(card, imageSource);

    const textArea = document.createElement('div');
    textArea.className = 'textArea';
    card.appendChild(textArea);

    nameSetup(textArea, cardNameContent);
    statsSetup(textArea, attackValue, defenceValue, speedValue, stealthValue, strengthValue);
    allCardsDisplay.appendChild(card);
  }

  cardCreation('../images/20191102_132951.jpg', 'Royal Footsoldier', 5, 6, 6, 4, 5);
  cardCreation('../images/20191102_133046.jpg', 'Royal Spearman', 6, 5, 4, 3, 6);
  cardCreation('../images/20191102_133133.jpg', 'Royal Archer', 6, 3, 7, 6, 5);
  cardCreation('../images/20191102_133200.jpg', 'Royal Knight', 7, 7, 2, 2, 8);
  cardCreation('../images/20191102_133225.jpg', 'Kingsguard', 8, 6, 6, 4, 7);
  cardCreation('../images/20191102_133255.jpg', 'The King', 9, 10, 3, 3, 9);
  cardCreation('../images/20191102_134921.jpg', 'Dragon Knight', 6, 4, 5, 6, 6);
  cardCreation('../images/20191102_134904.jpg', 'Dragon Archer', 7, 2, 8, 9, 5);
  cardCreation('../images/20191102_134936.jpg', 'Dragonguard', 8, 5, 5, 6, 7);
  cardCreation('../images/20191102_135038.jpg', 'The Dragonking', 10, 9, 2, 4, 9);
  cardCreation('../images/20191102_134949.jpg', 'Dark Ninja', 8, 2, 8, 10, 5);
  cardCreation('../images/20191102_135005.jpg', 'The Executioner', 7, 3, 7, 7, 6);
  cardCreation('../images/20191102_134823.jpg', 'Ogre Brute', 8, 1, 1, 2, 10);
  cardCreation('../images/20191102_134957.jpg', 'Assassin', 5, 2, 9, 9, 4);
  cardCreation('../images/20191102_135026.jpg', 'Distant Swordsman', 8, 8, 6, 5, 7);
  cardCreation('../images/20191102_133442.jpg', 'King\'s Horse', 2, 7, 10, 1, 7);
  cardCreation('../images/20191102_135050.jpg', 'Dragonsteed', 2, 4, 10, 2, 7);
  cardCreation('../images/20191102_134213.jpeg', 'King on Horse', 8, 10, 10, 2, 8);
  cardCreation('../images/20191102_135115.jpg', 'Dragon on Steed', 9, 7, 10, 4, 8);
  cardCreation('../images/20191102_135450-1.jpg', 'Royal Castle', 0, 10, 0, 0, 10);

  const content = document.querySelector('.content');
  const homeButton = document.querySelector('.homepage2')
  content.insertBefore(allCardsDisplay, homeButton);

})
