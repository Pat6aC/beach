var topButton = document.getElementById("topBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
} 

let elements = document.getElementsByTagName('h2');
let e;

for (e = 0; e < elements.length; e++) {
elements[e].addEventListener('click', playWaves)
}

function playWaves() {
  var waveSound = document.getElementById('wave-sound');
  if (waveSound.paused) 
  waveSound.play();
  else
  waveSound.pause();
}