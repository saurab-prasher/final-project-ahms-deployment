console.log("hello world!");

const hamburgerBtn = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu__list");
const hamburgerClose = document.querySelector(".hamburger-icon-close");
const searchIcon = document.querySelector(".search-icon");
const input = document.querySelector(".search-icon-input");
const pageTitle = document.querySelector("title")?.textContent;
const productBtnContainer = document.querySelector(".product__btn-container");
const newsPromotionForm = document.querySelector(".news-promotions__form");
const addToCartBtn = document.querySelector(".product__cart-btn");
let totalCartCount = 0;

searchIcon.addEventListener("click", () => {
  if (input.classList.contains("visible")) {
    input.classList.remove("visible");
    input.classList.add("hidden");
  } else if (input.classList.contains("hidden")) {
    input.classList.remove("hidden");
    input.classList.add("visible");
    input.focus();
  }
});

hamburgerBtn.addEventListener("click", () => {
  hamburgerMenu.classList.add("visible");
  hamburgerMenu.classList.remove("hidden");
  document.body.classList.add("stop-scrolling");
});
hamburgerClose.addEventListener("click", () => {
  hamburgerMenu.classList.add("hidden");
  hamburgerMenu.classList.remove("visible");
  document.body.classList.remove("stop-scrolling");
});

const changeColorMultipleElem = (element, color) => {
  document.querySelectorAll(element).forEach((item) => {
    item.style.color = color;
  });
};

const changeElemColor = (element, color) => {
  document.querySelector(element).style.color = color;
};

const changeElemBackgroundColor = (element, color) => {
  document.querySelector(element).style.backgroundColor = color;
};
// change font color of navigation
if (pageTitle.trim() === "Men's Clothing".trim()) {
  changeColorMultipleElem(".home__header-social-links", "#555");
  changeElemColor(".navbar-container", "#555");
  changeElemColor(".home__header", "#555");
  changeElemBackgroundColor(".home__header", "#faf9f8");
  changeElemColor(".hamburger-icon", "#000");
  changeElemBackgroundColor(".hamburger-icon", "transparent");
} else if (
  pageTitle.trim() === "Women's Clothing".trim() ||
  pageTitle.trim() === "Kids Clothing".trim() ||
  pageTitle.trim() === "Beauty".trim() ||
  pageTitle.trim() === "Contact Page".trim()
) {
  console.log(pageTitle);
  changeElemColor(".navbar-container", "#555");
  changeColorMultipleElem(".home__header-social-links", "#555");
  changeElemColor(".home__header", "#555");
  changeElemColor(".hamburger-icon", "#000");
  changeElemBackgroundColor(".hamburger-icon", "transparent");
}

// Home page slider

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,

    dots: true,
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

function validate(e) {
  e.preventDefault();
  let firstName = document.querySelector(".news-promotions-fname");
  let lastName = document.querySelector(".news-promotions-lname");
  let email = document.querySelector(".news-promotions-email");
  let error = document.querySelector(".error");

  let namePattern = /^[a-z ,.'-]+$/i;

  if (firstName.value == "") {
    error.textContent = "Please enter firstname";
  } else if (!namePattern.test(firstName.value)) {
    error.textContent = " Please enter firstname with letter only";
  } else error.textContent = "";
  setTimeout(() => {
    error.textContent = "";
  }, 3000);

  firstName.value = "";
  lastName.value = "";
  email.value = "";
}

newsPromotionForm.addEventListener("submit", validate);

productBtnContainer?.addEventListener("click", (e) => {
  const span = document.createElement("span");
  span.classList.add("cart-count");
  document.querySelector(".show-quantity").textContent = totalCartCount;
  if (e.target.classList.contains("add")) {
    totalCartCount++;
    document.querySelector(".cart-count").textContent = totalCartCount;
    document.querySelector(".show-quantity").textContent = totalCartCount;
  } else if (e.target.classList.contains("minus")) {
    if (totalCartCount > 0) {
      totalCartCount--;
      document.querySelector(".cart-count").textContent = totalCartCount;
    }
  }
});
