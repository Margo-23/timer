const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const waitButton = document.querySelector('.wait');
const resetButton = document.querySelector('.reset');

startButton.addEventListener('click', function (){
  clearInterval(interval);
    clearInterval(interval);
    interval = setInterval(startTime, 1000);
});

waitButton.addEventListener('click', function (e) {
  clicks++;
  if (clicks == 1) 
      setTimeout("waitFunck ();", 249); 
  setTimeout("clicks = 0;", 299);
});

function waitFunck (){
  if (clicks == 2){
    clearInterval(interval);
  }
}


resetButton.addEventListener('click', function (){
  clearInterval(interval);
  hour = 0;
  minute = 0;
  second = 0;
  interval = setInterval(startTime, 1000);
});

stopButton.addEventListener('click', function(){
  clearInterval(interval);
  hour = 0;
  minute = 0;
  second = 0;
  hourElement.innerHTML = "00";
  minuteElement.innerHTML = "00";
  secondElement.innerHTML = "00";
})



let hour = 0;
let minute = 0;
let second = 0;
let interval;
let clicks = 0;


function startTime () {
  second++;

  if (second < 9) {
    secondElement.innerHTML = `0${second}`;
  }
  if (second > 9 ){
    secondElement.innerHTML = second;
  }
  if (second > 59) {
    minute++;
    minuteElement.innerHTML = `0${minute}`;
    second = 0;
    secondElement.innerHTML = `0${second}`;
  }

  if (minute < 9) {
    minuteElement.innerHTML = `0${minute}`;
  }
  if (minute > 9 ){
    minuteElement.innerHTML = minute;
  }
  if (minute > 59) {
    hour++;
    hourElement.innerHTML = `0${minute}`;
    minute = 0;
    minuteElement.innerHTML = `0${minute}`;
  }

  if (hour < 9) {
    hourElement.innerHTML = `0${hour}`;
  }
  if (hour > 9 ){
    hourElement.innerHTML = hour;
  }
}

