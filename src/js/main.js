var mobileMenu = document.querySelector('.mobile-menu');
var homeNav = document.querySelector('nav.homepage_var');
var navClose = document.querySelector('.navclose');
var floatNav = document.querySelector('.floating_nav');

var fadeNavbar = function(e) {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  if (top != 0) {
    floatNav.className = "floating_nav scrolled";
  }
  else {
    floatNav.className = "floating_nav";
  }
};

var openMobileNav = function(e) {
  e.preventDefault();
  mobileMenu.className = "mobile-menu open";
  homeNav.className = "homepage_var open";
};

var closeMobileNav = function(e) {
  e.preventDefault();
  mobileMenu.className = "mobile-menu";
  homeNav.className = "homepage_var";
}

window.addEventListener("scroll", fadeNavbar);
mobileMenu.addEventListener("click", openMobileNav);
navClose.addEventListener("click", closeMobileNav);