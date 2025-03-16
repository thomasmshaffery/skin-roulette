/**
 * Load API Call on site
 */
window.onload = getGuns();
/**
 * Set DOM variables
 */
const animatedBackground = document.getElementById("background");

/**
 * Gun skin retrieval
 */
let guns = [];
let cardOne;
let cardTwo;

async function getGuns() {
  const url = `https://valorant-api.com/v1/weapons/skins`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Could not retrieve data.");
    }

    const data = await response.json();
    for (let i = 0; i < data.data.length; i++) {
      generateGuns(data.data[i]);
    }
  } catch (error) {
    console.error(error);
  }

  displayCards();
}

function generateGuns(Object) {
  let gun = {
    uuid: Object.uuid,
    name: Object.displayName,
    image: Object.displayIcon,
  };

  if (Object.displayIcon != null) {
    guns.push(gun);
  }
}

/**
 * Displaying Cards
 */

function getRandomGun() {
  return guns[Math.floor(Math.random() * guns.length)];
}

function getCardImage(card) {
  return card.image;
}

function displayCards() {
  cardOne = getRandomGun();
  cardTwo = getRandomGun();

  while (cardOne.uuid == cardTwo.uuid) {
    setCard(cardTwo);
  }

  document.images[0].src = cardOne.image;
  document.images[1].src = cardTwo.image;

  const oneTitle = document.getElementById("titleOne");
  const twoTitle = document.getElementById("titleTwo");

  oneTitle.innerHTML = cardOne.name;
  twoTitle.innerHTML = cardTwo.name;
}
