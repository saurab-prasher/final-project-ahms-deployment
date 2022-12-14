const displayedImageMain = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".product__gallery--card");
const productHeading = document.querySelector(".product__heading");
const productDescription = document.querySelector(".product__description");
const productPrice = document.querySelector(".product__price");
const userReviewList = document.querySelector(".user-reviews-list");
const reviewForm = document.querySelector(".form-review");
const reviewBtn = document.querySelector(".review__btn");

const reviewSubmit = document.querySelector(".form-review-submit");

totalCartCount = localStorage.getItem("totalCart") || 0;
document.querySelector(".show-quantity").textContent = totalCartCount;
document.querySelector(".cart-count").textContent = totalCartCount;

const imageGalleryArray = [
  {
    id: 1,
    src: "/images/men-denim-jacket.jpg",
    alt: "Hooded Denim Jacket",
    description:
      "Denim jacket in flexible, washed, stretch cotton denim with sleeves and a detachable hood in sweatshirt fabric with soft, brushed inside. Buttons at front, mock chest pockets with flap and button, and ribbing at cuffs and hem.",
    price: "$34.99",
  },
  {
    id: 2,
    src: "/images/slider-image-1.jpg",
    alt: "Oversized Fit Hoodie",
    description:
      "Oversized sweatshirt hoodie in cotton-blend fabric with soft, brushed inside. Lined, drawstring hood, long raglan sleeves, kangaroo pocket, and ribbing at cuffs and hem.",
    price: "$74.99",
  },
  {
    id: 3,
    src: "/images/slider-image-6.jpg",
    alt: "Relaxed Fit Sweatshirt",
    description:
      "Relaxed-fit sweatshirt in cotton-blend fabric with soft, brushed inside. Dropped shoulders and ribbing at neck, cuffs, and hem.",
    price: "$54.99",
  },
  {
    id: 4,
    src: "/images/slider-image-3.jpg",
    alt: "Slipover sweatshirt",
    description:
      "Denim jacket in flexible, washed, stretch cotton denim with sleeves and a detachable hood in sweatshirt fabric with soft, brushed inside. Buttons at front, mock chest pockets with flap and button, and ribbing at cuffs and hem.",
    price: "$104.99",
  },
  {
    id: 5,
    src: "/images/home-img.jpg",
    alt: "Regular Fit Crew-neck T-shirts",
    description:
      "Relaxed-fit t-shirt with a round neckline. Plus, this style is made with organic cotton, free from any harmful chemicals to protect our natural resources and farmers’ safety.",
    price: "$32.99",
  },
];

// let tempImage = ``;
imageGalleryArray.forEach(({ src, alt, description, price }) => {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", src);
  newImage.setAttribute("alt", alt);
  thumbBar.appendChild(newImage);
  productHeading.textContent = alt;
  productDescription.textContent = description;
  productPrice.textContent = price;

  newImage.addEventListener("click", (e) => {
    const elem = e.target;
    displayedImageMain.setAttribute("src", elem.getAttribute("src"));
    productHeading.textContent = alt;
    productDescription.textContent = description;
    productPrice.textContent = price;
  });

  //   tempImage += `<img src="images/${image}" alt="pc2" />`;
});

const userReviews = [
  {
    id: 1,
    date: "18 Oct 2022",
    review:
      "Really nice colour it looks exactly like the picture really good for a winter vibe.",
    boughtIn: "Bought: Gray in size S",
  },
  {
    id: 2,
    date: "26 Jan 2022",
    review:
      "I buy these hoodies all the time for my teens. They are comfortable and durable.",
    boughtIn: "Bought: Blue in size M",
  },
  {
    id: 3,
    date: "13 Jun 2022",
    review:
      "I am very satisfied with this….so far everything I buy from the men section is nice and baggy just the way I like it.",
    boughtIn: "Bought: Black in size XL",
  },
  {
    id: 4,
    date: "19 Sept 2021",
    review:
      "CUTE hoodie-- super comfortable. Love the fact that the hood is large enough to actually put up comfortably. ",
    boughtIn: "Bought: Blue in size S",
  },
  {
    id: 5,
    date: "4 Oct 2021",
    review:
      "LOVE this so much, perfect quality and fit, decently thick but not so much so you cant through a jacket over top",
    boughtIn: "Bought: Gray in size S",
  },
];

const populateReviews = (arr) => {
  let temp = "";

  arr.forEach(({ date, review, boughtIn }) => {
    temp += `
    <li class="user-reviews-description">
    <span class="user-reviews-date"> ${date}</span>
    <span class="user-reviews-bought">${boughtIn}</span>
  ${review}
  </li>`;
  });

  userReviewList.innerHTML += temp;
};

const addReview = (arr) => {
  let temp = "";

  arr.forEach(({ date, review, boughtIn }) => {
    temp = `
    <li class="user-reviews-description">
    <span class="user-reviews-date"> ${date}</span>
    <span class="user-reviews-bought">${boughtIn}</span>
  ${review}
  </li>`;
  });
  userReviewList.innerHTML += temp;
};

populateReviews(userReviews);

reviewBtn.addEventListener("click", () => {
  reviewForm.classList.toggle("form-display");
});
reviewSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector(".form-review-input");

  if (input.value) {
    const newUserReviews = [
      ...userReviews,
      {
        id: Math.floor(Math.random() * 100),
        date: new Date().toDateString(),
        review: input.value,
        boughtIn: "Bought: Gray in size S",
      },
    ];

    addReview(newUserReviews);
    input.value = "";
  }
});
