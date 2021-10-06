// Banner Slider
$(document).ready(function () {
  $("#banner-slider").owlCarousel({
    items: 1,
    nav: false,
    autoplay: true,
    pagination: true,
    dots: true,
    loop: true,
    animateIn: "fade",
  });
});

// Scroll Sticky header
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main-header").className = "sticky";
  } else {
    document.getElementById("main-header").className = "";
  }
}

// Responsive Navigation
$(".hamburger").on("click", function () {
  $("header nav").css("transform", "translateX(0)");
  $("header nav").css("transform", "translateX(0)");
});
$(".close").on("click", function () {
  $("header nav").css("transform", "translateX(-100%)");
  $("header nav").css("transform", "translateX(-100%)");
});
