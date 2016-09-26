var $window      = $(window);
var $body        = $('body');
var $header      = $('.Header');
var $menuButton  = $('.js-Header-menuButton');
var $menuItem    = $('.js-Menu-item');

var menuBarHeight = $('.Header-nav').outerHeight();
var ideaDistance = $('.IdeaSection').position().top - menuBarHeight;

window.addEventListener("resize", function() {
  var menuBarHeight = $('.Header-nav').outerHeight();
  var ideaDistance = $('.IdeaSection').position().top - menuBarHeight;
});

$(window).resize(function() {
  var menuBarHeight = $('.Header-nav').outerHeight();
  var ideaDistance = $('.IdeaSection').position().top - menuBarHeight;
});


// mobile menu button
$menuButton.on('click', function() {
  $body.toggleClass('menu-open');
});


// show menu-bar
$window.scroll(function() {
  if ( $window.scrollTop() >= ideaDistance ) {
      $header.addClass('is-visible');
  } else {
    $header.removeClass('is-visible');
  }
});

$menuItem.on('click', function() {
  var target = $(this).attr('href');
  var offset = ($body.hasClass('menu-open')) ? -192 - menuBarHeight : 0 - menuBarHeight; // hardcoded $menu-travel from header.scss

  $body.removeClass('menu-open');
  $(target).velocity('scroll', { duration: 500, easing: 'easeInOutCubic', offset: offset });
})


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
  var daysSpan = clock.querySelector('.js-Countdown-days');
  var hoursSpan = clock.querySelector('.js-Countdown-hours');
  var minutesSpan = clock.querySelector('.js-Countdown-minutes');
  var secondsSpan = clock.querySelector('.js-Countdown-seconds');

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




















































