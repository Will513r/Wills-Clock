require("dotenv").config();
const apiKey = process.env.API_KEY;

function displayImage(data) {
  const imageElement = document.createElement("img");
  imageElement.src = data.urls.regular;
  imageElement.alt = data.alt_description || "Random Image";

  const imageContainer = document.getElementById("random-image");
  imageContainer.innerHTML = "";
  imageContainer.appendChild(imageElement);
}

async function getRandomImage() {
  try {
    const response = await fetch("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const data = await response.json();
    displayImage(data);
  } catch (error) {
    console.log("Error fetching random image:", error);
  }
}
