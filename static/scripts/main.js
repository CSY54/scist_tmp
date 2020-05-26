"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementsByClassName('navbar-burger')[0];
  var target = document.getElementById(nav.dataset.target);
  var links = document.getElementsByClassName("navbar-item");
  nav.addEventListener('click', function () {
    nav.classList.add('is-active');
    target.classList.add('is-active');
  });
  Array.from(links).forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-active");
      target.classList.remove('is-active');
    });
  });
  Array.from(document.querySelectorAll('h2')).forEach(function (el) {
    return el.classList.add('wow', 'bounceIn');
  });
  Array.from(document.querySelectorAll('.box, .card, .text-only')).forEach(function (el) {
    return el.classList.add('wow', 'bounceInUp');
  });
  new WOW().init();
});
