const btn = document.querySelector("button");
const bdy = document.querySelector("body");

btn.addEventListener("click", function () {
  btn.classList.toggle("button--night");
  bdy.classList.toggle("body--night");

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
