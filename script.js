let yesClicked = false;
const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const img = document.querySelector(".img");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const secondQuestion = document.querySelectorAll(".question")[1];

yesBtn.addEventListener("click", () => {
  if (!yesClicked) {
    question.innerHTML = "21 Desember 2024 ❤";
    secondQuestion.innerHTML = "what's your answer?"; 
    img.src = "https://i.pinimg.com/736x/35/44/70/354470b3c03b8f20036af3c962b97698.jpg";
    yesBtn.innerHTML = "reply";
    yesClicked = true;
  } else {
    window.location.href = "https://wa.me/6281383225316?text=reply%20message%20whatever";
  }
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
