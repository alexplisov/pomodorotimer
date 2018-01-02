'use strict';

let minutes      = 25,
    seconds      = 0,
    cap          = 25,
    tumbler      = document.getElementById('tumbler'),
    reset        = document.getElementById('reset'),
    timerMinutes = document.getElementById('minutes'),
    timerSeconds = document.getElementById('seconds'),
    clip         = new Audio('./sound.mp3'),
    interval;

const count = () => {
  if (seconds <= 0) {
    seconds = 60;
    minutes -= 1;
  }
  seconds -= 1;
  timerSeconds.innerHTML = seconds;
  addZeroChar(timerSeconds);
  if (minutes <= 0 && seconds <= 0) {
    if (cap === 25) {
      cap = 5;
    }
    else if (cap === 5) {
      cap = 25;
    }
    minutes = cap;
    clip.play();
  }
  timerMinutes.innerHTML = minutes;
  addZeroChar(timerMinutes);
};

const resetTimer = () => {
  timerMinutes.innerHTML = cap === 25 ? cap : '0' + cap;
  timerSeconds.innerHTML = '00';
  tumbler.innerHTML = 'start';
  minutes = 25,
  seconds = 0,
  cap     = 25,
  clearInterval(interval);
};

const switchTumbler = () => {
  switch(tumbler.innerHTML) {
    case 'start':
      tumbler.innerHTML = 'stop';
      interval = setInterval(count, 1000);
      break;
    case 'stop':
      tumbler.innerHTML = 'start';
      clearInterval(interval);
      break;
  }
};

const addZeroChar = element => {
  if (element.innerHTML.length === 1) {
    element.innerHTML = '0' + element.innerHTML;
  }
};

tumbler.onclick = switchTumbler;
reset.onclick = resetTimer;
