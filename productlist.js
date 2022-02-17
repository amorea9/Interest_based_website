// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");

const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion?category=";

//API KEY 6208141b34fd621565858416
const options = {
  headers: {
    "x-apikey": "6208141b34fd621565858416",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => handleProductList(data));

function handleProductList(data) {
  console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);

  //grab template
  const template = document.querySelector("template").content;

  //clone it
  const myClone = template.cloneNode(true);

  //change content
  myClone
    .querySelector(".imgLink")
    .setAttribute("href", `productpage.html?id=${product._id}`);

  myClone.querySelector(".productName").textContent = product.title;
  myClone.querySelector(
    "img"
  ).src = `https://carolinethostrup.dk/BFF/assets/${product.image}`;

  //grab parent

  const parent = document.querySelector("main");

  //append it

  parent.appendChild(myClone);
}
