document.querySelector("#open-nav-sm").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".nav-sm ul").classList.add("show");
});

document.querySelector(".btn-close").addEventListener("click", function () {
  document.querySelector(".nav-sm ul").classList.remove("show");
});
