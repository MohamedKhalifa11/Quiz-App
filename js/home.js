let popupBtn = document.querySelector(".popup-btn")
let popupDiv = document.querySelector(".popup-div")
let startQuiz = document.querySelector(".start-quiz")
let hidePopup = document.querySelector(".hide-popup")

popupBtn.onclick = () => {
  popupDiv.style.display = "block";
}

hidePopup.onclick = () => {
  popupDiv.style.display = "none";
}

startQuiz.onclick = () => {
  window.location.href = "quiz.html";
}