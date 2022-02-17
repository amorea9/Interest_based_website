const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

// put this link in landing page
// productlist.html?category=TheGood

// THIS IS THE OLD WRONG LINK (BAD LINK, DONT TOUCH)
// const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion?groupby=category";

const url =
  "https://kea22-2fbe.restdb.io/rest/badfootfashion?filter=" + category;

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

  // category header
  if (product.category === "TheUgly") {
    myClone.querySelector(".category_name").textContent = "The Ugly";
    myClone.querySelector(".category_description").textContent =
      "You couldn't even pay us to wear this footwear. If you own any of these, shame on you.";
  }

  if (product.category === "TheBad") {
    myClone.querySelector(".category_name").textContent = "The Bad";
    myClone.querySelector(".category_description").textContent =
      "This footwear is terrible, but there are definitely people out there who would wear them.";
  }

  if (product.category === "TheGood") {
    myClone.querySelector(".category_name").textContent = "The Good";
    myClone.querySelector(".category_description").textContent =
      "The best of the worst. It doesn't get any better than this, unfortunately.";
  }

  //grab parent

  const parent = document.querySelector("main");

  //append it

  parent.appendChild(myClone);
}
