function convertSeconds(seconds) {
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minute = Math.floor(seconds / 60);
  seconds %= 60;
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  console.log(hours + ":" + minute + ":" + seconds);
}

convertSeconds(3665);
