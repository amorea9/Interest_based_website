// const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion?groupby=category";

// //API KEY 6208141b34fd621565858416
// const options = {
//   headers: {
//     "x-apikey": "6208141b34fd621565858416",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((data) => handleProductList(data));

// function handleProductList(data) {
//   console.log(data);
//   data.forEach(showProduct);
// }

// function showProduct(product) {
//   console.log(product);

//   //grab template
//   const template = document.querySelector("template").content;

//   //clone it
//   const myClone = template.cloneNode(true);

//   //change content
//   myClone.querySelector(".a_category").textContent = product.category;
//   myClone
//     .querySelector(".alink")
//     .setAttribute("href", `productlist.html?groupby=category`);
//   // myClone.querySelector(
//   //   ".alink img"
//   // ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

//   //grab parent
//   const parent = document.querySelector(".buttons_landing_page");

//   //append it

//   parent.appendChild(myClone);
// }
