const animatedBackground = document.getElementById("background");

/**
 * Gun skin retrieval
 */

async function getGuns() {
  const url = `https://valorant-api.com/v1/weapons/skins`;
  try {
    const response = await fetch(url);
    console.log(response);
  } catch (error) {
    console.error.log(error.message);
  }
}
