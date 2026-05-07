const button = document.querySelector(".button div");
const adviceText = document.querySelector(".the-advice p");
const adviceNumber = document.querySelector(".Advice-numder p");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceText.textContent = `"${data.slip.advice}"`;
      adviceNumber.textContent = `Advice #${data.slip.id}`;
    });
}


getAdvice();


button.addEventListener("click", getAdvice);