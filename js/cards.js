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

  cardCreation('../images/20191102_132951.jpeg', 'Royal Footsoldier', 5, 6, 6, 4, 5);
  cardCreation('../images/20191102_133046.jpeg', 'Royal Spearman', 6, 5, 4, 3, 6);
  cardCreation('../images/20191102_133133.jpeg', 'Royal Archer', 6, 5, 7, 6, 5);
  cardCreation('../images/20191102_133200.jpeg', 'Royal Knight', 7, 8, 2, 2, 8);
  cardCreation('../images/20191102_133225.jpeg', 'Kingsguard', 8, 6, 6, 4, 7);
  cardCreation('../images/20191102_133255.jpeg', 'The King', 9, 10, 3, 3, 9);
  cardCreation('../images/20191102_134921.jpeg', 'Dragon Knight', 6, 4, 5, 6, 6);
  cardCreation('../images/20191102_134904.jpeg', 'Dragon Archer', 6, 2, 8, 8, 4);
  cardCreation('../images/20191102_134936.jpeg', 'Dragonguard', 8, 5, 5, 6, 7);
  cardCreation('../images/20191102_135038.jpeg', 'The Dragonking', 10, 9, 2, 4, 9);
  cardCreation('../images/20191102_134949.jpeg', 'Dark Ninja', 8, 2, 8, 10, 5);
  cardCreation('../images/20191102_135005.jpeg', 'The Executioner', 7, 3, 7, 7, 6);
  cardCreation('../images/20191102_134823.jpeg', 'Ogre Brute', 8, 1, 1, 2, 10);
  cardCreation('../images/20191102_134957.jpeg', 'Assassin', 5, 2, 9, 9, 4);
  cardCreation('../images/20191102_135026.jpeg', 'Distant Swordsman', 8, 8, 6, 5, 7);
  cardCreation('../images/20191102_133442.jpeg', 'King\'s Horse', 2, 7, 9, 1, 7);
  cardCreation('../images/20191102_135050.jpeg', 'Dragonsteed', 2, 4, 10, 2, 7);
  cardCreation('../images/20191102_134213.jpeg', 'King on Horse', 8, 9, 8, 2, 8);
  cardCreation('../images/20191102_135115.jpeg', 'Dragon on Steed', 9, 7, 9, 3, 8);
  cardCreation('../images/20191102_135450.jpeg', 'Royal Castle', 3, 10, 0, 0, 10);
  cardCreation('../images/20191201_172415.jpeg', 'The Gentleman', 9, 4, 7, 9, 6);
  cardCreation('../images/20191201_172442.jpeg', 'The Red Wizard', 10, 2, 5, 4, 6);
  cardCreation('../images/20191201_172510.jpeg', 'The Werewolf', 8, 3, 8, 2, 8);
  cardCreation('../images/20191201_172553.jpeg', 'Warrior Dwarf', 6, 4, 5, 8, 6);
  cardCreation('../images/20191201_172622.jpeg', 'Skeleton Soldier', 6, 1, 8, 7, 2);
  cardCreation('../images/20191201_172718.jpeg', 'Skeleton King', 6, 4, 8, 5, 3);
  cardCreation('../images/20191201_172626.jpeg', 'The Mummy', 7, 4, 4, 6, 6);
  cardCreation('../images/20191201_172633.jpeg', 'Desert Soldier', 8, 6, 7, 5, 7);
  cardCreation('../images/20191201_172756.jpeg', 'Desert Warrior', 9, 8, 7, 6, 8);
  cardCreation('../images/20191201_172642.jpeg', 'Desert Knight', 9, 7, 6, 6, 8);
  cardCreation('../images/20191201_172702.jpeg', 'Desert Gladiator', 10, 9, 4, 3, 9);
  cardCreation('../images/20191201_172748.jpeg', 'Desert Emperor', 5, 4, 7, 7, 5);

  const content = document.querySelector('.content');
  const homeButton = document.querySelector('.homepage')
  content.insertBefore(allCardsDisplay, homeButton);

})
