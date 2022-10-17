// swiperJS
var swiper = new Swiper(".Vehicle_Slider", {
  grabCursor: true,
  spaceBetween: 20,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    desableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Theme Toggle
let ThemeToggle = document.querySelector(".ThemeToggle");
let toggleBtn = document.querySelector(".toggleBtn");

toggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
};

// Main Logic
document.querySelectorAll(".ThemeToggle .themeBtn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;

    document.querySelector(":root").style.setProperty("--main", color);
  };
});
