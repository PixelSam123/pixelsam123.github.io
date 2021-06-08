function loadHeaderImage(src) {
  headerImage = new Image();
  headerImage.src = src;
  headerImage.id = "header-image";
  return headerImage;
}
const headerImage1 = loadHeaderImage(
  "https://assets.gamepur.com/wp-content/uploads/2021/03/10123835/Lush-Caves-lit-up-with-torches.jpg"
);
const headerImage2 = loadHeaderImage(
  "https://www.ultimatepocket.com/wp-content/uploads/2021/06/heres-when-to-expect-minecrafts-1-17-caves-cliffs-update.jpg"
);
const headerImage3 = loadHeaderImage(
  "https://www.minecraft.net/content/dam/community/fy21/minecraft/communitynews-assets/hero_sustainability_42221.png.transform/minecraft-image-large/image.png"
);
const headerImage4 = loadHeaderImage(
  "https://www.minecraft.net/content/dam/games/minecraft/screenshots/snapshot-21w16a-header.jpg.transform/minecraft-image-large/image.jpg"
);

fetch("./videos.xml")
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/xml"))
  .then((youtubeFeedXml) => {
    for (let index = 0; index < 4; index++) {
      body
        .getElementsByClassName("section-text")
        [index].getElementsByTagName("h3")[0].textContent = youtubeFeedXml
        .getElementsByTagName("entry")
        [index].getElementsByTagName("title")[0].textContent;
      body
        .getElementsByClassName("section-text")
        [index].getElementsByTagName("p")[0].textContent = youtubeFeedXml
        .getElementsByTagName("entry")
        [index].getElementsByTagName("media:description")[0].textContent;
      body
        .getElementsByClassName("section-container")
        [index].getElementsByTagName("img")[0]
        .setAttribute(
          "src",
          youtubeFeedXml
            .getElementsByTagName("entry")
            [index].getElementsByTagName("media:thumbnail")[0]
            .getAttribute("url")
        );
    }
  });

const body = document.body;
const contentBar = document.getElementById("header-content-bar").childNodes;
const homepageHeader = document.getElementsByTagName("header")[0];
let headerElement = document.getElementById("header-image");

let currentContentNumber = 0;

function replaceHeaderImage(headerImage) {
  headerElement.parentNode.replaceChild(headerImage, headerElement);
  headerElement = document.getElementById("header-image");
}
function toHeaderContent(contentNumber) {
  currentContentNumber = contentNumber;
  contentBar[1].textContent = "&#9702;";
  contentBar[3].textContent = "&#9702;";
  contentBar[5].textContent = "&#9702;";
  contentBar[7].textContent = "&#9702;";
  switch (contentNumber) {
    case 0:
      replaceHeaderImage(headerImage1);
      contentBar[1].textContent = "&#8226;";
      break;
    case 1:
      replaceHeaderImage(headerImage2);
      contentBar[3].textContent = "&#8226;";
      break;
    case 2:
      replaceHeaderImage(headerImage3);
      contentBar[5].textContent = "&#8226;";
      break;
    case 3:
      replaceHeaderImage(headerImage4);
      contentBar[7].textContent = "&#8226;";
      break;
  }
}
function cycleHeaderContent(cycleTo) {
  switch (cycleTo) {
    case "next":
      currentContentNumber += 1;
      if (currentContentNumber > 3) {
        currentContentNumber = 0;
      }
      break;
    case "previous":
      currentContentNumber -= 1;
      if (currentContentNumber < 0) {
        currentContentNumber = 3;
      }
      break;
  }
  toHeaderContent(currentContentNumber);
}
