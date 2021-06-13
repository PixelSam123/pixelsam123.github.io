function setLookMode(lookMode, secondaryLookMode) {
  body.getElementsByTagName("main")[0].setAttribute("id", lookMode);
  for (let index = 0; index < 3; index++) {
    document
      .getElementById("pro-tip-textarea-container")
      .getElementsByTagName("textarea")
      [index].setAttribute("id", secondaryLookMode);
  }
}

darkModeIsOn = false;
function toggleDarkMode() {
  darkModeIsOn = !darkModeIsOn;
  darkModeIsOn ? setLookMode("dark-mode", "darker-mode") : setLookMode("", "");
}
