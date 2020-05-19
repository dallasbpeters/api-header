(function () {
  var hamburger = {
    navToggle: document.querySelector(".menu-icon"),
    nav: document.querySelector(".brand-header--nav"),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    },
  };

  hamburger.navToggle.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
})();
