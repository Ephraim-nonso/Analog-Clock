const secondHand = document.querySelector(".seconds-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  // Here is for the Seconds hand.
  const now = new Date();
  const seconds = now.getSeconds();

  const secondsDegree = ((seconds/60) * 360) + 90;

  secondHand.style.transform = `rotate(${secondsDegree}deg)`;


  // Here is for the minute hand.

  const minute = now.getMinutes();
  const minutesDegree = ((minute/60) * 360) + 90;

  minuteHand.style.transform = `rotate(${minutesDegree}deg)`

  // Here is for the hour hand.

  const hour = now.getHours();
  const hoursDegree = ((hour/60) * 360) + 90;

  hourHand.style.transform = `rotate(${hoursDegree}deg)`
  console.log(hour);
}

setInterval(setDate, 1000);
