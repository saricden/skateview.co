var fadeNavbar = function(e) {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
  if (top != 0) {
    document.querySelector('.floating_nav').className = "floating_nav scrolled";
  }
  else {
    document.querySelector('.floating_nav').className = "floating_nav";
  }
};

window.addEventListener("scroll", fadeNavbar);