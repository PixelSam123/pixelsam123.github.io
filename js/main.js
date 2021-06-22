"use strict";

function setLookMode(lookMode) {
  // Primary look class switching
  if (lookMode == "dark_mode") {
    document.getElementsByTagName("html")[0].className = "dark";
  } else {
    document.getElementsByTagName("html")[0].className = "";
  }
  // Dark mode toggle button look
  body
    .getElementsByTagName("nav")[0]
    .getElementsByTagName("button")[0]
    .getElementsByClassName("material-icons-outlined")[0].textContent = lookMode;
}
function applyLookMode() {
  if (localStorage.darkmode == "true") {
    setLookMode("dark_mode");
  } else {
    setLookMode("light_mode");
  }
}
document.getElementById("toggle-dark-mode-button").addEventListener("click", function () {
  localStorage.darkmode == "true"
    ? (localStorage.darkmode = "false")
    : (localStorage.darkmode = "true");
  applyLookMode();
});
applyLookMode();
