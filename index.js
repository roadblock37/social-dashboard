document.getElementById("theme-toggle").addEventListener("click", handleTheme);

function handleTheme() {
  const label = document.getElementById("theme-label");
  let checkBox = document.getElementById("theme-toggle");
  if (checkBox.checked === true) {
    document.documentElement.className = "theme-light";
    label.innerText = "Light Mode";

    console.log("theme changed to light");
  } else {
    document.documentElement.className = "theme-dark";
    label.innerText = "Dark Mode";
  }
}
