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
// Scroll line numbers together with content
const lineNumbers = body.querySelector(".window-content p");
const windowTextContent = body.querySelector(".window-content textarea");
windowTextContent.addEventListener("scroll", function () {
  lineNumbers.scrollTop = windowTextContent.scrollTop;
});
