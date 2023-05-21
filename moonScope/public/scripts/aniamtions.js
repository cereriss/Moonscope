const continueButton = document.getElementById("btn-continue");
const firstSection = document.getElementById("firstSection");
const secondSection = document.getElementById("secondSection");

continueButton.addEventListener("click", () => {
  firstSection.style.animation = "scrollRight 1s forwards";
  firstSection.style.display = "none";
  secondSection.style.display = "block";
});
