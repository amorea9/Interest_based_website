const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion/" + id;
//API KEY 6208141b34fd621565858416
const options = {
  headers: {
    "x-apikey": "6208141b34fd621565858416",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showProduct(data));

// OLD SHOWPRODUCT CODE - NO TEMPLATE
/*
function showProduct(product) {
  console.log(product);
  document.querySelector(".product-page-h1").textContent = product.title;
  //   document.querySelector(
  //     ".product-image-section img"
  //   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".product-image-section img").alt = product.title;
  document.querySelector(".description-line").textContent = product.description;
  document.querySelector(".comment-box").textContent = product.userComment;
}
*/

function showProduct(product) {
  console.log(product);

  // change content
  document.querySelector(".product-page-h1").textContent = product.title;
  document.querySelector(
    ".product-image-section img"
  ).src = `https://carolinethostrup.dk/BFF/assets/${product.image}`;
  document.querySelector(".product-image-section img").alt = product.title;
  document.querySelector(".description-line").textContent = product.description;
  document.querySelector(".comment-box p").textContent = product.userComment;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `Bad Foot Fashion | ${product.title}`;

  // ratings - comfort
  console.log(`comfort = ${product.comfort}`);
  const comfortRating = product.comfort;
  if (comfortRating >= "1") {
    document
      .querySelector(".comfortRatings .rating-1")
      .classList.add("ratingActive");
  }
  if (comfortRating >= "2") {
    document
      .querySelector(".comfortRatings .rating-2")
      .classList.add("ratingActive");
  }
  if (comfortRating >= "3") {
    document
      .querySelector(".comfortRatings .rating-3")
      .classList.add("ratingActive");
  }
  if (comfortRating >= "4") {
    document
      .querySelector(".comfortRatings .rating-4")
      .classList.add("ratingActive");
  }
  if (comfortRating >= "5") {
    document
      .querySelector(".comfortRatings .rating-5")
      .classList.add("ratingActive");
  }

  // ratings - ugliness
  console.log(`ugliness = ${product.ugliness}`);
  const uglinessRating = product.ugliness;
  if (uglinessRating >= "1") {
    document
      .querySelector(".uglinessRatings .rating-1")
      .classList.add("ratingActive");
  }
  if (uglinessRating >= "2") {
    document
      .querySelector(".uglinessRatings .rating-2")
      .classList.add("ratingActive");
  }
  if (uglinessRating >= "3") {
    document
      .querySelector(".uglinessRatings .rating-3")
      .classList.add("ratingActive");
  }
  if (uglinessRating >= "4") {
    document
      .querySelector(".uglinessRatings .rating-4")
      .classList.add("ratingActive");
  }
  if (uglinessRating >= "5") {
    document
      .querySelector(".uglinessRatings .rating-5")
      .classList.add("ratingActive");
  }
}
