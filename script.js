let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  slideIndex = index;
  const slideWidth = slides[0].offsetWidth;
  const slideContainer = document.querySelector(".slide-container");
  slideContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

setInterval(() => {
  showSlide(slideIndex + 1);
}, 3000);
