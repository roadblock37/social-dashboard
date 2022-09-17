document.getElementById("theme-toggle").addEventListener("click", handleTheme);

function handleTheme() {
  let checkBox = document.getElementById("theme-toggle");
  if (checkBox.checked === true) {
    document.documentElement.className = "theme-light";
    console.log("theme changed to light");
  } else {
    document.documentElement.className = "theme-dark";
  }
}
