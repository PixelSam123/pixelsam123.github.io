"use strict";

const headerRadioButtons = body
  .querySelector("#header-radio-button-group")
  .getElementsByTagName("input");
let headerImageElement = body.querySelector("#header-image");
let currentHeaderNumber;
let headerSwitchAnimationIsOngoing = false;
// switchHeader event listeners bound to header radio buttons
const switchHeader = function (requestedHeaderNumber, headerSwitchAnimationDuration = 250) {
  if (headerSwitchAnimationIsOngoing) {
    headerRadioButtons[currentHeaderNumber].checked = true;
  } else if (requestedHeaderNumber != currentHeaderNumber) {
    currentHeaderNumber = requestedHeaderNumber;
    headerRadioButtons[requestedHeaderNumber].checked = true;
    body.querySelector("#header-title").textContent =
      headerContentList[requestedHeaderNumber].title;
    body.querySelector("#header-description").textContent =
      headerContentList[requestedHeaderNumber].description;
    body.querySelector("#header-link").href = headerContentList[requestedHeaderNumber].article_url;
    const requestedHeaderImageElement = preloadedHeaderImages[requestedHeaderNumber];
    headerImageElement.parentNode.appendChild(requestedHeaderImageElement);
    headerSwitchAnimationIsOngoing = true;
    requestedHeaderImageElement.animate(
      {
        opacity: [0, 1],
        easing: ["ease-out"],
      },
      headerSwitchAnimationDuration
    );
    setTimeout(function () {
      headerImageElement.parentNode.removeChild(headerImageElement);
      headerImageElement = body.querySelector("#header-image");
      headerSwitchAnimationIsOngoing = false;
    }, headerSwitchAnimationDuration);
    sessionStorage.sessionCurrentHeaderNumber = String(requestedHeaderNumber);
  }
};

const preloadedHeaderImages = [];
let headerContentList;
fetch("resources/header-content-list.json")
  .then((response) => response.json())
  .then((fetchedHeaderContentList) => {
    headerContentList = fetchedHeaderContentList;
    duplicateElement(headerRadioButtons[0], fetchedHeaderContentList.length - 1);
    for (let index = 0; index < fetchedHeaderContentList.length; index++) {
      preloadedHeaderImages[index] = headerImageElement.cloneNode(true);
      preloadedHeaderImages[index].src = fetchedHeaderContentList[index].image_url;
      headerRadioButtons[index].addEventListener("click", () => switchHeader(index));
    }
    if (!("sessionCurrentHeaderNumber" in sessionStorage)) {
      sessionStorage.sessionCurrentHeaderNumber = "0";
    }
    switchHeader(parseInt(sessionStorage.sessionCurrentHeaderNumber), 0);
  });
const cycleHeader = function (cycleTo) {
  const maximumHeaderNumber = headerRadioButtons.length - 1;
  let headerNumber = currentHeaderNumber;
  switch (cycleTo) {
    case "next":
      headerNumber += 1;
      if (headerNumber > maximumHeaderNumber) headerNumber = 0;
      break;
    case "prev":
      headerNumber -= 1;
      if (headerNumber < 0) headerNumber = maximumHeaderNumber;
      break;
  }
  switchHeader(headerNumber);
};
const headerCycleButtons = body
  .querySelector("#header-cycle-button-container")
  .getElementsByTagName("button");
headerCycleButtons[0].addEventListener("click", () => cycleHeader("prev"));
headerCycleButtons[1].addEventListener("click", () => cycleHeader("next"));

const articleSnippets = body.getElementsByClassName("article-snippet");
fetch("resources/article-content-list.json")
  .then((response) => response.json())
  .then((fetchedArticleContentList) => {
    duplicateElement(articleSnippets[0], fetchedArticleContentList.length - 1);
    for (let index = 0; index < articleSnippets.length; index++) {
      const articleHeaderTitle = fetchedArticleContentList[index].header_title;
      articleSnippets[index].querySelector("h3").innerText = articleHeaderTitle;
      articleSnippets[index].querySelector("p").innerText =
        fetchedArticleContentList[index].header_description;
      articleSnippets[index].querySelector("a").href =
        fetchedArticleContentList[index].article_url_header + articleHeaderTitle;
      articleSnippets[index].querySelector("img").src =
        fetchedArticleContentList[index].header_image_url;
    }
  });

const thumbnailInfoGroup = body.getElementsByClassName("thumbnail-info-group");
fetch(
  "https://api.allorigins.win/raw?url=https://www.youtube.com/feeds/videos.xml?channel_id=UCkIkjfzUY-32W9K5L56p9jA"
)
  .then((response) => response.text())
  .then((text) => new DOMParser().parseFromString(text, "text/xml"))
  .then((youtubeFeedXml) => {
    const youtubeFeedEntries = youtubeFeedXml.getElementsByTagName("entry");
    duplicateElement(thumbnailInfoGroup[0], youtubeFeedEntries.length - 1);
    for (let index = 0; index < thumbnailInfoGroup.length; index++) {
      thumbnailInfoGroup[index].querySelector("h3").innerText =
        youtubeFeedEntries[index].querySelector("title").textContent;
      thumbnailInfoGroup[index].querySelector("p").innerText =
        youtubeFeedEntries[index].querySelector("description").textContent;
      thumbnailInfoGroup[index].querySelector("a").href = youtubeFeedEntries[index]
        .querySelector("link")
        .getAttribute("href");
      thumbnailInfoGroup[index].querySelector("img").src = youtubeFeedEntries[index]
        .querySelector("thumbnail")
        .getAttribute("url");
    }
  });
