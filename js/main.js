"use strict";
function setLookMode(lookMode, secondaryLookMode) {
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  const textareaElements = body.getElementsByTagName("textarea");
  const textAreaElementsCount = textareaElements.length;
  if (textAreaElementsCount != 0) {
    for (let index = 0; index < textAreaElementsCount; index++) {
      textareaElements[index].setAttribute("id", secondaryLookMode);
    }
  }
}
function applyLookMode() {
  if (sessionStorage.darkmode == "true") {
    setLookMode("dark-mode", "darker-mode");
    body
      .getElementsByTagName("nav")[0]
      .getElementsByTagName("button")[0]
      .getElementsByClassName("material-icons-outlined")[0].textContent = "dark_mode";
  } else {
    setLookMode("", "");
    body
      .getElementsByTagName("nav")[0]
      .getElementsByTagName("button")[0]
      .getElementsByClassName("material-icons-outlined")[0].textContent = "light_mode";
  }
}
function toggleDarkMode() {
  sessionStorage.darkmode == "true"
    ? (sessionStorage.darkmode = "false")
    : (sessionStorage.darkmode = "true");
  applyLookMode();
}

applyLookMode();
