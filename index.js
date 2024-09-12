const adviceBtn = document.getElementById("advice-btn");
const adviceId = document.getElementById("advice-id");
const advice = document.getElementById("advice");

adviceBtn.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      adviceId.textContent = `ADVICE #${data.slip.id}`;
      advice.textContent = `"${data.slip.advice}"`;
    });
});
