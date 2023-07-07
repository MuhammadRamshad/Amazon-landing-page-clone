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

let control = document.querySelector("#control");

control.addEventListener("click", function (e) {
  let div = document.getElementById("third-sec-slider");
  let target = e.target;
  switch (target.id) {
    case "btnScrollLeft":
      div.scrollLeft -= 250;
      break;

    case "btnScrollRight":
      div.scrollLeft += 250;
      break;
  }
});

window.addEventListener("load", function () {
  const thumbnails = document.getElementsByClassName("thumbnail");
  const mainProductImage = document.getElementById("product-image");
  const productDescription = document.getElementById("product-description");
  const productPrice = document.getElementById("product-price");

  // Add click event listener to each thumbnail
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
      // Get the source and alt attributes of the clicked thumbnail
      const newImageSrc = this.getAttribute("src");
      const newImageAlt = this.getAttribute("alt");
      const newImageTitle = this.getAttribute("title");

      // Update the main product image and its description
      mainProductImage.setAttribute("src", newImageSrc);
      mainProductImage.setAttribute("alt", newImageAlt);
      productDescription.textContent = newImageAlt;
      productPrice.textContent = newImageTitle;
    });
  }
});

window.addEventListener("load", function () {
  const thumbnail = document.getElementsByClassName("thumb");
  const mainProductImag = document.getElementById("product-img");
  const productDesc = document.getElementById("product-desc");
  const productPric = document.getElementById("product-pric");

  // Add click event listener to each thumbnail
  for (let i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("click", function () {
      // Get the source and alt attributes of the clicked thumbnail
      const newImageSrc = this.getAttribute("src");
      const newImageAlt = this.getAttribute("alt");
      const newImageTitle = this.getAttribute("title");

      // Update the main product image and its description
      mainProductImag.setAttribute("src", newImageSrc);
      mainProductImag.setAttribute("alt", newImageAlt);
      productDesc.textContent = newImageAlt;
      productPric.textContent = newImageTitle;
    });
  }
});

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ............................................................
