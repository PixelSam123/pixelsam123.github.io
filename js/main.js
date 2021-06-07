const headerImage1 = new Image();
headerImage1.src =
  "https://assets.gamepur.com/wp-content/uploads/2021/03/10123835/Lush-Caves-lit-up-with-torches.jpg";
headerImage1.id = "header-image";
const headerImage2 = new Image();
headerImage2.src =
  "https://www.ultimatepocket.com/wp-content/uploads/2021/06/heres-when-to-expect-minecrafts-1-17-caves-cliffs-update.jpg";
headerImage2.id = "header-image";
const headerImage3 = new Image();
headerImage3.src =
  "https://www.minecraft.net/content/dam/community/fy21/minecraft/communitynews-assets/hero_sustainability_42221.png.transform/minecraft-image-large/image.png";
headerImage3.id = "header-image";
const headerImage4 = new Image();
headerImage4.src =
  "https://www.minecraft.net/content/dam/games/minecraft/screenshots/snapshot-21w16a-header.jpg.transform/minecraft-image-large/image.jpg";
headerImage4.id = "header-image";
const body = document.body;
const contentBar = document.getElementById("header-content-bar").childNodes;
const homepageHeader = document.getElementsByTagName("header")[0];
let headerElement = document.getElementById("header-image");

let currentContentNumber = 0;
function toHeaderContent(contentNumber) {
  currentContentNumber = contentNumber;
  contentBar[1].innerHTML = "&#9702;";
  contentBar[3].innerHTML = "&#9702;";
  contentBar[5].innerHTML = "&#9702;";
  contentBar[7].innerHTML = "&#9702;";
  switch (contentNumber) {
    case 0:
      headerElement.parentNode.replaceChild(headerImage1, headerElement);
      headerElement = document.getElementById("header-image");
      contentBar[1].innerHTML = "&#8226;";
      break;
    case 1:
      headerElement.parentNode.replaceChild(headerImage2, headerElement);
      headerElement = document.getElementById("header-image");
      contentBar[3].innerHTML = "&#8226;";
      break;
    case 2:
      headerElement.parentNode.replaceChild(headerImage3, headerElement);
      headerElement = document.getElementById("header-image");
      contentBar[5].innerHTML = "&#8226;";
      break;
    case 3:
      headerElement.parentNode.replaceChild(headerImage4, headerElement);
      headerElement = document.getElementById("header-image");
      contentBar[7].innerHTML = "&#8226;";
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
