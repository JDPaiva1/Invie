var $burguerButton = document.getElementById('burguer-button');
var $menu = document.getElementById('menu');
var $body = document.body;

var consulta = window.matchMedia('(max-width:500px)');
consulta.addListener(mediaQuery);

function mediaQuery() {
  if (consulta.matches) {
    $burguerButton.addEventListener('touchstart', toggleMenu);
  } else {
    console.log('no se cumplio');
    $burguerButton.removeEventListener('touchstart', toggleMenu);
  }
}
mediaQuery();

function toggleMenu() {
  $menu.classList.toggle('active');
  $burguerButton.classList.toggle('icon-close');
}
function showMenu() {
  $menu.classList.add('active');
  $burguerButton.classList.toggle('icon-close');
}
function hideMenu() {
  $menu.classList.remove('active');
  $burguerButton.classList.toggle('icon-close');
}

var gestos = new Hammer($body);
gestos.on('swiperight', showMenu);
gestos.on('swipeleft', hideMenu);

var bLazy = new Blazy({
  selector: 'img'
});