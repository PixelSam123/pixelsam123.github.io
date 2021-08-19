"use strict";
const body = document.body;

function applyLookMode() {
  if (localStorage.darkmode == "true") {
    document.querySelector("html").className = "dark";
    body.querySelector(".material-icons-outlined").textContent = "dark_mode";
  } else {
    document.querySelector("html").className = "";
    body.querySelector(".material-icons-outlined").textContent = "light_mode";
  }
}
body.querySelector("#toggle-dark-mode-button").addEventListener("click", function () {
  localStorage.darkmode == "true"
    ? (localStorage.darkmode = "false")
    : (localStorage.darkmode = "true");
  applyLookMode();
});
applyLookMode();

// Reusable functions
function duplicateElement(sourceElement, duplicateCount) {
  for (let index = 1; index <= duplicateCount; index++) {
    sourceElement.parentNode.appendChild(sourceElement.cloneNode(true));
  }
}
