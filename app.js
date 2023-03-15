function handleToggleMenu () {
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".header_menu-list");
if (!menuToggle || !menu) return;
menuToggle.addEventListener("click", function () {
menu.classList.add("is-active");
});
document.addEventListener("click", function(e) {
    if(!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove("is-active");
    }
})
}
handleToggleMenu ();

//Scoll down header
window.onscroll = function() {myFunction()};

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
