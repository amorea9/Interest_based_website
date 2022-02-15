const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("category");

const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion" + category;

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
  const template = document.querySelector("#item_template").content;

  //clone it
  const myClone = template.cloneNode(true);

  //change content
  myClone
    .querySelector(".alink")
    .setAttribute("href", `product.html?id=${product.id}`);

  myClone.querySelector(".item_name").textContent = product.productdisplayname;
  myClone.querySelector(".price").textContent = `DKK ${product.price},-`;
  myClone.querySelector(
    ".item img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  myClone.querySelector(".discount").textContent = `-${product.discount}%`;
  myClone.querySelector(".item img").alt = product.productdisplayname;

  if (product.soldout) {
    myClone.querySelector(".item").classList.add("item_sold_out"); //change this class to fix opacity
  }
  if (product.discount) {
    myClone.querySelector(".item").classList.add("item_discounted");
    myClone.querySelector(".price").classList.add("new_price");
    myClone.querySelector(".new_price").textContent = `DKK ${Math.ceil(
      product.price - (product.price / 100) * product.discount
    )},-`;
    myClone.querySelector(
      ".old_price"
    ).textContent = `Was DKK ${product.price},-`;
  }

  //grab parent

  const parent = document.querySelector(".product_list");

  //append it

  parent.appendChild(myClone);
}
