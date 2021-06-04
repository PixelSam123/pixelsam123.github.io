const body = document.body;
const contentBar = document.getElementById("header-content-bar").childNodes;
const homepageHeader = document.getElementsByTagName("header")[0];

let currentContentNumber = 0;
function toHeaderContent(contentNumber) {
  currentContentNumber = contentNumber;
  contentBar[1].innerHTML = "&#9702;";
  contentBar[3].innerHTML = "&#9702;";
  contentBar[5].innerHTML = "&#9702;";
  contentBar[7].innerHTML = "&#9702;";
  switch (contentNumber) {
    case 0:
      homepageHeader.style.background =
        "url(https://assets.gamepur.com/wp-content/uploads/2021/03/10123835/Lush-Caves-lit-up-with-torches.jpg)";
      contentBar[1].innerHTML = "&#8226;";
      break;
    case 1:
      homepageHeader.style.background =
        "url(https://s31092.pcdn.co/wp-content/uploads/2021/04/Minecraft-Caves-Cliffs.jpg)";
      contentBar[3].innerHTML = "&#8226;";
      break;
    case 2:
      homepageHeader.style.background =
        "url(https://www.minecraft.net/content/dam/community/fy21/minecraft/communitynews-assets/hero_sustainability_42221.png.transform/minecraft-image-large/image.png)";
      contentBar[5].innerHTML = "&#8226;";
      break;
    case 3:
      homepageHeader.style.background =
        "url(https://www.minecraft.net/content/dam/games/minecraft/screenshots/snapshot-21w16a-header.jpg.transform/minecraft-image-large/image.jpg)";
      contentBar[7].innerHTML = "&#8226;";
      break;
  }
  homepageHeader.style.backgroundSize = "cover";
  homepageHeader.style.backgroundPosition = "center";
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
