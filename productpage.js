const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion?" + id;
//API KEY 6208141b34fd621565858416
const options = {
  headers: {
    "x-apikey": "6208141b34fd621565858416",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showProduct(data));

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
