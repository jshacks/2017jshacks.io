// countdown
var deadline = 'October 21 2016 23:59:59 GMT+0300';

function getTimeRemaining(deadline) {
  var t = Date.parse(deadline) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, deadline) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.js-countdown-days');
  var hoursSpan = clock.querySelector('.js-countdown-hours');
  var minutesSpan = clock.querySelector('.js-countdown-minutes');
  var secondsSpan = clock.querySelector('.js-countdown-seconds');

  function updateClock() {
    var t = getTimeRemaining(deadline);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

initializeClock('js-countdown', deadline);