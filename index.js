// const display =document.getElementById("display");
// let timer = null
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start( ){

//     if(!isRunning){
//         startTime = Date.now() -elapsedTime;
//         timer = setInterval(update, 10);
//         isRunning = true
//     }
// }

// function stop(){

// }

// function reset(){

// }

// function update(){

//     const currentTime = Date.now();
//     elapsedTime = currentTime -startTime;

//     let hours = Math.floor(elapsedTime /(1000*60*60));
//     let minutes = Math.floor(elapsedTime / (1000*60)%60);
//     let seconds = Math.floor(elapsedTime / 1000%60);

// }

// const start = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const reset = document.getElementById("reset");
// const display = document.getElementById("display");

// let interval;
// let seconds = 0;
// let timer = null;
// let elapsedTime = 0;

// start.addEventListener("click", () => {
//   stopButton.disabled = false;
//   reset.disabled = false;
//   start.disabled = true;
//   interval = setInterval(() => {
//     seconds++;
//   }, 1000);
// });

// stopButton.addEventListener("click", () => {
//   clearInterval(interval);

//   stopButton.disabled = true;
// });

// reset.addEventListener("click", () => {
//   clearInterval(interval);
//   startTime = 0;
//   elapsedTime = 0;
//   let stopButton = false;
//   display.timer = "00:00:00";
// });

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
// }

// const start = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const reset = document.getElementById("reset");
// const display = document.getElementById("display");

// let interval = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function updateDisplay(hours, minutes, seconds) {
//   hours = hours.toString().padStart(2, "0");
//   minutes = minutes.toString().padStart(2, "0");
//   seconds = seconds.toString().padStart(2, "0");
//   display.textContent = `${hours}:${minutes}:${seconds}`;
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);

//   updateDisplay(hours, minutes, seconds);
// }

// start.addEventListener("click", () => {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     interval = setInterval(update, 10);
//     isRunning = true;

//     start.disabled = true;
//     stopButton.disabled = false;
//     reset.disabled = false;
//   }
// });

// stopButton.addEventListener("click", () => {
//   clearInterval(interval);
//   isRunning = false;

//   start.disabled = false;
//   stopButton.disabled = true;
// });

// reset.addEventListener("click", () => {
//   clearInterval(interval);
//   isRunning = false;
//   elapsedTime = 0;

//   start.disabled = false;
//   stopButton.disabled = true;
//   reset.disabled = true;

//   updateDisplay(0, 0, 0);
// });

// const start = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const reset = document.getElementById("reset");
// const display = document.getElementById("display");

// let interval = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function formatTime(number) {
//   return number < 10 ? "0" + number : number;
// }

// function updateDisplay(hours, minutes, seconds) {
//   display.textContent =
//     formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);

//   updateDisplay(hours, minutes, seconds);
// }

// start.addEventListener("click", () => {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     interval = setInterval(update, 10);
//     isRunning = true;

//     start.disabled = true;
//     stopButton.disabled = false;
//     reset.disabled = false;
//   }
// });

// stopButton.addEventListener("click", () => {
//   clearInterval(interval);
//   isRunning = false;

//   start.disabled = false;
//   stopButton.disabled = true;
// });

// reset.addEventListener("click", () => {
//   clearInterval(interval);
//   isRunning = false;
//   elapsedTime = 0;

//   start.disabled = false;
//   stopButton.disabled = true;
//   reset.disabled = true;

//   updateDisplay(0, 0, 0);
// });

// const start = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const reset = document.getElementById("reset");
// const display = document.getElementById("display");

// let interval = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function updateDisplay(hours, minutes, seconds) {
//   if (hours < 10) hours = "0" + hours;
//   if (minutes < 10) minutes = "0" + minutes;
//   if (seconds < 10) seconds = "0" + seconds;
//   if (milliseconds < 10) milliseconds = "0" + milliseconds;

//   display.textContent = hours + ":" + minutes + ":" + seconds;
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
//   let milliseconds = Math.floor((elapsedTime % 1000) / 10);

//   updateDisplay(hours, minutes, seconds);
// }

// start.addEventListener("click", () => {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     interval = setInterval(update, 10);
//     isRunning = true;

//     start.disabled = true;
//     stopButton.disabled = false;
//     reset.disabled = false;
//   }
// });

// stopButton.addEventListener("click", () => {
//   clearInterval(interval);
//   isRunning = false;

//   start.disabled = false;
//   stopButton.disabled = true;
// });

// reset.addEventListener("click", () => {
//   clearInterval(interval);
//   isRunning = false;
//   elapsedTime = 0;

//   start.disabled = false;
//   stopButton.disabled = true;
//   reset.disabled = true;

//   display.textContent = "00:00:00:00";
// });

const start = document.getElementById("start");
const stopButton = document.getElementById("stop");
const reset = document.getElementById("reset");
const display = document.getElementById("display");

let interval = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay(hours, minutes, seconds, milliseconds) {
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  if (milliseconds < 10) milliseconds = "0" + milliseconds;

  display.textContent =
    hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliseconds = Math.floor((elapsedTime % 1000) / 10);

  updateDisplay(hours, minutes, seconds, milliseconds);
}

start.addEventListener("click", () => {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    interval = setInterval(update, 10);
    isRunning = true;

    start.disabled = true;
    stopButton.disabled = false;
    reset.disabled = false;
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;

  start.disabled = false;
  stopButton.disabled = true;
});

reset.addEventListener("click", () => {
  clearInterval(interval);
  isRunning = false;
  elapsedTime = 0;

  start.disabled = false;
  stopButton.disabled = true;
  reset.disabled = true;

  display.textContent = "00:00:00:00";
});
