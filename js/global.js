// PINK-ARROW FUNCTION: Scroll to Welcome Section using scrollIntoView
document.getElementById("scroll-button").addEventListener("click", function() {
  document.getElementById("welcome").scrollIntoView({ behavior: "smooth" });
});

//function to hide navbar
window.addEventListener('scroll', function() {
  let scrolled = window.scrollY;
  let navbar = document.getElementById("navbar");
  let itemsToHide = document.querySelectorAll(".toggle-visibility");
  let menuIcon = document.getElementById("open-menu");
  let logo = document.getElementById("logo");

  if(scrolled > 60) {
    navbar.classList.add("hide-navbar");
    menuIcon.classList.add("highlight-items");
    logo.classList.add("highlight-items");
  }else{
    navbar.classList.remove("hide-navbar");
    menuIcon.classList.remove("highlight-items");
    logo.classList.remove("highlight-items");
  };

  itemsToHide.forEach(item => {
    if(scrolled > 60) {
      item.classList.add("hide-icons");
    }else{
      item.classList.remove("hide-icons");
    };
  })
  
});

// HAMBURGER MENU: on click, show menu.
document.getElementById("open-menu").addEventListener('click', function() {
  document.getElementById("menu").classList.add("show-menu");
});

// CLOSE MENU ICON: on click, close menu.
document.getElementById("close-menu").addEventListener('click', function() {
  document.getElementById("menu").classList.remove("show-menu");
});

//slideshow function
const slides = [
  "./img/hero_image_one.jpg",
  "./img/hero_image_two.jpg",
  "./img/hero_image_three.jpg",
];

let counter = 0;
const sliderDiv = document.getElementById("slideshow");

function slideShowBg() {

  sliderDiv.style.opacity = 0.8;

  setTimeout(()=>{
    counter = (counter + 1) % slides.length;
    sliderDiv.style.backgroundImage = `url(${slides[counter]})`;
    sliderDiv.style.opacity = 1;
  }, 400);
}

sliderDiv.style.backgroundImage = `url(${slides[counter]})`;
setInterval(slideShowBg, 8000);