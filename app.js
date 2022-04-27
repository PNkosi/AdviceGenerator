const adviceEl = document.querySelector(".advice");
const adviceID = document.querySelector(".adviceID");
const adviceBtn = document.querySelector(".advice-btn");

window.onload = () => {
  getAdvice();
};

adviceBtn.addEventListener("click", getAdvice);

function getAdvice() {
  fetch("https://api.adviceslip.com/advice?t=" + Math.random())
    .then((res) => {
      return res.json();
    })

    .then((adviceData) => {
      const adviceSlip = adviceData.slip;
      adviceID.textContent = `#${adviceSlip.id}`;
      adviceEl.textContent = adviceSlip.advice;
    })

    .catch((error) => {
      console.log(error);
    });
}
