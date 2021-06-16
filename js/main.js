"use strict";
// Page look mode
function setLookMode(lookMode, invertedLookMode) {
  // Page background and text color look
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  // a links look
  const aElements = body.getElementsByTagName("main")[0].getElementsByTagName("a");
  const aElementsCount = aElements.length;
  if (aElementsCount != 0) {
    for (let index = 0; index < aElementsCount; index++) {
      aElements[index].setAttribute("id", lookMode);
    }
  }
  // Dark mode toggle button look
  body
    .getElementsByTagName("nav")[0]
    .getElementsByTagName("button")[0]
    .getElementsByClassName("material-icons-outlined")[0].textContent = lookMode;
  // Inverted look mode objects (for example, lines should be white on a dark background)
  body.getElementsByClassName(
    "small-separator"
  )[0].className = `small-separator ${invertedLookMode}`;
}
function applyLookMode() {
  if (sessionStorage.darkmode == "true") {
    setLookMode("dark_mode", "dark_mode_inverted");
  } else {
    setLookMode("light_mode", "light_mode_inverted");
  }
}
function toggleDarkMode() {
  sessionStorage.darkmode == "true"
    ? (sessionStorage.darkmode = "false")
    : (sessionStorage.darkmode = "true");
  applyLookMode();
}
applyLookMode();

// Choose window style for IntelliJ look pro tip
if (navigator.appVersion.indexOf("Win") != -1) {
  const windowElements = body.getElementsByClassName("window");
  const windowElementsCount = windowElements.length;
  if (windowElementsCount > 0) {
    for (let index = 0; index < windowElementsCount; index++) {
      windowElements[index].className = "window windows10";
    }
  }
}
