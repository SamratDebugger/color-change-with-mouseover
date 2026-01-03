const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("mouseover", function (event) {
    body.style.backgroundColor = event.target.id;
  });
});
