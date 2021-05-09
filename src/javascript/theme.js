const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "light") {
  document.body.classList.add("light-theme");
  document
    .querySelector(".btn-toggle .ion-ios-moon")
    .classList.add("setting__theme--is-active");
} else {
  document
    .querySelector(".btn-toggle .ion-ios-sunny")
    .classList.add("setting__theme--is-active");
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");
  document
    .querySelector(".btn-toggle .ion-ios-sunny")
    .classList.toggle("setting__theme--is-active");
    document
    .querySelector(".btn-toggle .ion-ios-moon")
    .classList.toggle("setting__theme--is-active");
  let theme = "dark";
  if (document.body.classList.contains("light-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);
});
