export default function Time() {
  let date = new Date();

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let days = weekDays[date.getDay()];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  return `${days}, ${formatHours()}`;

  function formatHours() {
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return `${hours}:${minutes}`;
  }
}
