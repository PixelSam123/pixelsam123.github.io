function setLookMode(lookMode, secondaryLookMode) {
  document.body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
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
setTimeout(() => applyLookMode(), 5);
function toggleDarkMode() {
  sessionStorage.darkmode == "true"
    ? (sessionStorage.darkmode = "false")
    : (sessionStorage.darkmode = "true");
  applyLookMode();
}
