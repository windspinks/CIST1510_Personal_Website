let navButton = document.querySelector('.nav-button');
let nav = document.querySelector('nav');
//Test for mobile/small window, don't allow menu locking on touchscreen
window.addEventListener('touchstart', function onFirstTouch() {
  window.USER_IS_TOUCHING = true;
  // we only need to know once that a human touched the screen, so we can stop listening now
  window.removeEventListener('touchstart', onFirstTouch, false);
}, false);

let navMenuIsLocked = false;

navButton.addEventListener('mouseover', function(e) {
  if (!navMenuIsLocked) {
    this.classList.add('menu-active');
    let menuLinks = this.nextElementSibling;
    menuLinks.style.maxHeight = menuLinks.scrollHeight + 'px';
  }
});

navButton.addEventListener('click', function(e) {
  //Only lock menu open on click if user not using touchscreen
  if (!window.USER_IS_TOUCHING) {
    navMenuIsLocked = !navMenuIsLocked;
  }
});

nav.addEventListener('mouseleave', function(e) {
  if (!navMenuIsLocked) {
    let menuLinks = navButton.nextElementSibling;
    navButton.classList.toggle('menu-active');
    menuLinks.style.maxHeight = null;
  }
});
