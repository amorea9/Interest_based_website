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
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  document.querySelector(".product-image-section img").alt = product.title;
  document.querySelector(".description-line").textContent = product.description;
  document.querySelector(".comment-box p").textContent = product.userComment;

  // change meta title
  document.querySelector(
    "head title"
  ).textContent = `Bad Foot Fashion | ${product.title}`;

  console.log(product.comfort);
  const comfortRating = product.comfort;
  if (comfortRating === "4") {
    document.querySelector(".rating-1").classList.add(".ratingActive");
  }

  // showRating();
}

// function showRating(product) {
//   // ratings (except it's not working and i'm tiredddd)
//   console.log(product.comfort);
//   const comfortRating = product.comfort;
//   if (comfortRating === "5") {
//     document.querySelector(".rating-1").classList.add(".ratingActive");
//   }
// }
