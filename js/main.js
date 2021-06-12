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

const body = document.body;

fetch(
  "https://api.allorigins.win/raw?url=https://www.youtube.com/feeds/videos.xml?channel_id=UCkIkjfzUY-32W9K5L56p9jA"
)
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/xml"))
  .then((youtubeFeedXml) => {
    function replaceTitleOrDescription(index, elementToReplace, replaceSourceElement) {
      body
        .getElementsByClassName("video-section-container")
        [index].getElementsByTagName("div")[0]
        .getElementsByTagName(elementToReplace)[0].innerText = youtubeFeedXml
        .getElementsByTagName("entry")
        [index].getElementsByTagName(replaceSourceElement)[0].textContent;
    }
    for (let index = 0; index < 4; index++) {
      replaceTitleOrDescription(index, "h3", "title");
      replaceTitleOrDescription(index, "p", "media:description");
      body
        .getElementsByClassName("video-section-container")
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

const contentBar = document.getElementById("header-content-bar").childNodes;
const homepageHeader = document.getElementsByTagName("header")[0];
let headerElement = document.getElementById("header-image");

let currentContentNumber = 0;
function replaceHeaderImage(headerImage) {
  body.getElementsByTagName("header")[0].appendChild(headerImage);
  setTimeout(() => headerElement.parentNode.removeChild(headerElement), 300);
  setTimeout(() => (headerElement = document.getElementById("header-image")), 300);
}
replaceHeaderImage(headerImage1);
function toHeaderContent(contentNumber) {
  if (contentNumber != currentContentNumber) {
    currentContentNumber = contentNumber;
    contentBar[1].textContent = "◦";
    contentBar[3].textContent = "◦";
    contentBar[5].textContent = "◦";
    contentBar[7].textContent = "◦";
    switch (contentNumber) {
      case 0:
        replaceHeaderImage(headerImage1);
        contentBar[1].textContent = "•";
        break;
      case 1:
        replaceHeaderImage(headerImage2);
        contentBar[3].textContent = "•";
        break;
      case 2:
        replaceHeaderImage(headerImage3);
        contentBar[5].textContent = "•";
        break;
      case 3:
        replaceHeaderImage(headerImage4);
        contentBar[7].textContent = "•";
        break;
    }
  }
}
function cycleHeaderContent(cycleTo) {
  let contentNumber = currentContentNumber;
  switch (cycleTo) {
    case "next":
      contentNumber += 1;
      if (contentNumber > 3) {
        contentNumber = 0;
      }
      break;
    case "previous":
      contentNumber -= 1;
      if (contentNumber < 0) {
        contentNumber = 3;
      }
      break;
  }
  toHeaderContent(contentNumber);
  currentContentNumber = contentNumber;
}

function setLookMode(lookMode, secondaryLookMode) {
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  for (let index = 0; index < 3; index++) {
    document
      .getElementById("pro-tip-textarea-container")
      .getElementsByTagName("textarea")
      [index].setAttribute("id", secondaryLookMode);
  }
}
darkModeIsOn = false;
function toggleDarkMode() {
  darkModeIsOn = !darkModeIsOn;
  darkModeIsOn ? setLookMode("dark-mode", "darker-mode") : setLookMode("", "");
}
