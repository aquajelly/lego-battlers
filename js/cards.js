document.addEventListener('DOMContentLoaded', () => {

  const allCardsDisplay = document.createElement('div');
  allCardsDisplay.className = 'cardDisplayClass';

  cardCreation = () => {

    imageSetup = () => {
      const image = document.createElement('img');
      image.setAttribute('src', '../images/favicon.ico');
      image.setAttribute('width', '100px');
      image.setAttribute('heigh', '100px');
      card.appendChild(image);
    }

    nameSetup = () => {
      const cardName = document.createElement('p');
      cardName.innerHTML = 'Test Card Number 1';
      cardName.style.fontWeight = 'bold';
      cardName.style.fontSize = '110%';
      card.appendChild(cardName);
    }

    statsSetup = (card) => {

      attackSetup = () => {
        const attack = document.createElement('p');
        attack.className = 'stat';
        attack.innerHTML = 'Attack: 1';
        card.appendChild(attack);
      }

      defenceSetup = () => {
        const defence = document.createElement('p');
        defence.className = 'stat';
        defence.innerHTML = 'Defence: 2';
        card.appendChild(defence);
      }

      speedSetup = () => {
        const speed = document.createElement('p');
        speed.className = 'stat';
        speed.innerHTML = 'Speed: 3';
        card.appendChild(speed);
      }

      stealthSetup = () => {
        const stealth = document.createElement('p');
        stealth.className = 'stat';
        stealth.innerHTML = 'Stealth: 4';
        card.appendChild(stealth);
      }

      strengthSetup = () => {
        const strength = document.createElement('p');
        strength.className = 'stat';
        strength.innerHTML = 'Strength: 5';
        card.appendChild(strength);
      }

      attackSetup(card);
      defenceSetup(card);
      speedSetup(card);
      stealthSetup(card);
      strengthSetup(card);

    }

    const card = document.createElement('div');
    card.className = 'card';

    imageSetup(card);
    nameSetup(card);
    statsSetup(card);
    allCardsDisplay.appendChild(card);
  }

  cardCreation();

  const content = document.querySelector('.content');
  const homeButton = document.querySelector('.homepage2')
  content.insertBefore(allCardsDisplay, homeButton);

})
