"use strict";
const body = document.body;

const windowElements = body.getElementsByClassName("window");
const windowElementsCount = windowElements.length;

// Choose window style for IntelliJ look pro tip
if (navigator.appVersion.indexOf("Win") != -1) {
  if (windowElementsCount > 0) {
    for (let index = 0; index < windowElementsCount; index++) {
      windowElements[index].className = "window windows10";
    }
  }
}
// Disable window shadows (I assume embedding if this script is run inside the fake window HTML)
for (let index = 0; index < windowElementsCount; index++) {
  windowElements[index].classList.add("no-shadow");
}
