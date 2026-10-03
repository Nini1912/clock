const secondsHand = document.querySelector("[data-second-hand]");
const minutesHand = document.querySelector("[data-minute-hand]");
const hoursHand = document.querySelector("[data-hour-hand]");
const digitalTime = document.querySelector("[data-digital-time]");
const dateDisplay = document.querySelector("[data-date]");

const timeFormatter = new Intl.DateTimeFormat(undefined, {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

const dateFormatter = new Intl.DateTimeFormat(undefined, {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
});

function setRotation(element, degrees) {
  element.style.setProperty("--rotation", `${degrees}deg`);
}

function setClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes() + seconds / 60;
  const hours = (now.getHours() % 12) + minutes / 60;

  setRotation(secondsHand, seconds * 6);
  setRotation(minutesHand, minutes * 6);
  setRotation(hoursHand, hours * 30);

  digitalTime.textContent = timeFormatter.format(now);
  dateDisplay.textContent = dateFormatter.format(now);
}

setClock();
setInterval(setClock, 1000);
