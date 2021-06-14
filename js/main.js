function setLookMode(lookMode, secondaryLookMode) {
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  for (let index = 0; index < 3; index++) {
    document
      .getElementById("pro-tip-textarea-container")
      .getElementsByTagName("textarea")
      [index].setAttribute("id", secondaryLookMode);
  }
}
function applyLookMode() {
  sessionStorage.darkmode == "true"
    ? setLookMode("dark-mode", "darker-mode")
    : setLookMode("", "");
}
applyLookMode();

function toggleDarkMode() {
  sessionStorage.darkmode == "true"
    ? (sessionStorage.darkmode = "false")
    : (sessionStorage.darkmode = "true");
  applyLookMode();
}
