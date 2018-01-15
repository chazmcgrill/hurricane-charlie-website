var hamburger = document.querySelector('.hamburger');
var menu = document.querySelector('.menu');
var nav = document.querySelector('nav');

(function setWidth() {
  if (window.innerWidth > 640) {
    nav.classList.remove('hidden');
  }
})()

window.addEventListener('resize', function(event) {
  if (event.target.innerWidth >= 640) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
    hamburger.classList.remove('is-active');
  }
});

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('hidden');
}, false);
