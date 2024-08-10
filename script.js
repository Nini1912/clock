const secondsHand = document.querySelector(".second");
const minutesHand = document.querySelector(".minute");
const hoursHand = document.querySelector(".hour");
const body = document.querySelector("body");

const timeBox = document.createElement("div");
timeBox.classList.add("time");
body.appendChild(timeBox);

setInterval(setClock, 1000);

function setClock() {
  const date = new Date();

  const secondsRatio = date.getSeconds();
  const minutesRatio = date.getMinutes();
  const hoursRatio = date.getHours();

  secondsHand.style.transform = `rotate(${secondsRatio * 6}deg)`;
  minutesHand.style.transform = `rotate(${minutesRatio * 6}deg)`;
  hoursHand.style.transform = `rotate(${hoursRatio * 30}deg)`;

  timeBox.innerHTML = `<p>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}, ${
    date.getMonth() + 1
  }.${date.getDate()}.${date.getFullYear()}</p>`;
}

setClock();

