"use strict";
// Page look mode
function setLookMode(lookMode, secondaryLookMode) {
  // Page background and text color
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  // a links
  const aElements = body.getElementsByTagName("main")[0].getElementsByTagName("a");
  const aElementsCount = aElements.length;
  if (aElementsCount != 0) {
    for (let index = 0; index < aElementsCount; index++) {
      aElements[index].setAttribute("id", lookMode);
    }
  }
  // Dark mode toggle button
  body
    .getElementsByTagName("nav")[0]
    .getElementsByTagName("button")[0]
    .getElementsByClassName("material-icons-outlined")[0].textContent = lookMode;
}
function applyLookMode() {
  if (sessionStorage.darkmode == "true") {
    setLookMode("dark_mode", "darker_mode");
  } else {
    setLookMode("light_mode", "");
  }
}
function toggleDarkMode() {
  sessionStorage.darkmode == "true"
    ? (sessionStorage.darkmode = "false")
    : (sessionStorage.darkmode = "true");
  applyLookMode();
}
applyLookMode();

// Text formatting for fake windows
