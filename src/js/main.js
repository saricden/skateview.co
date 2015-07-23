var mobileMenu = document.querySelector('.mobile-menu');
var nav = document.querySelector('nav');
var navClose = document.querySelector('.navclose');
var floatNav = document.querySelector('.floating_nav');
var navBtn = document.querySelector('.nav-btn');
var sideHeads = document.querySelectorAll('.sidehead');
var sidePanelHeights = [];

var toggleSidePanel = function() {
  var parent = this.parentNode;
  if (parent.className == "sidepanel open") {
    parent.className = "sidepanel";
  }
  else {
    for (i = 0; i < sideHeads.length; i++) {
      sideHeads[i].parentNode.className = "sidepanel";
    }
    parent.className = "sidepanel open";
  }
};

var fadeNavbar = function(e) {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  if (top != 0) {
    navBtn.className = "nav-btn scrolled";
    floatNav.className = "floating_nav scrolled";
    nav.className = "scrolled";
  }
  else {
    navBtn.className = "nav-btn";
    floatNav.className = "floating_nav";
    nav.className = "";
  }
};

var openMobileNav = function(e) {
  e.preventDefault();
  mobileMenu.className = "mobile-menu open";
  nav.className = "homepage_var open";
};

var closeMobileNav = function(e) {
  e.preventDefault();
  mobileMenu.className = "mobile-menu";
  nav.className = "homepage_var";
}

window.addEventListener("scroll", fadeNavbar);
if (mobileMenu) {
  mobileMenu.addEventListener("click", openMobileNav);
}
if (navClose) {
  navClose.addEventListener("click", closeMobileNav);
}
if (sideHeads) {
  for (i = 0; i < sideHeads.length; i++) {
    sideHeads[i].addEventListener("click", toggleSidePanel);
  }
}