"use strict";
function setLookMode(lookMode, secondaryLookMode) {
  /* Page background and text color */
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  /* Textarea elements */
  const textareaElements = body.getElementsByTagName("textarea");
  const textAreaElementsCount = textareaElements.length;
  if (textAreaElementsCount != 0) {
    for (let index = 0; index < textAreaElementsCount; index++) {
      textareaElements[index].setAttribute("id", secondaryLookMode);
    }
  }
  /* a links */
  const aElements = body.getElementsByTagName("main")[0].getElementsByTagName("a");
  const aElementsCount = aElements.length;
  if (aElementsCount != 0) {
    for (let index = 0; index < aElementsCount; index++) {
      aElements[index].setAttribute("id", lookMode);
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
