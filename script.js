const animatedBackground = document.getElementById("background");

/**
 * Gun skin retrieval
 */

let guns = [];

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
  console.log(guns);
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
