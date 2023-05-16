const button = document.getElementById("getStartedbtn");

let glowIntensity = 10;
let glowDirection = 1;

setInterval(function () {
  glowIntensity += glowDirection;

  if (glowIntensity == 20 || glowIntensity == 10) {
    glowDirection = -glowDirection;
  }

  button.style.boxShadow = `0px 0px ${glowIntensity}px 3px rgba(255, 255, 255, 0.5)`;
}, 200);

function getStarted() {
  window.location.href = "pages/login.html";
}

button.addEventListener("click", getStarted);
