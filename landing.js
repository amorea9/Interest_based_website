const url = "https://kea22-2fbe.restdb.io/rest/badfootfashion?";

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
}
//get random ID
function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}
//array with IDs
const items = [
  "620b769cf701f460000a1185",
  "620b784ff701f460000a11a7",
  "620b7535f701f460000a115d",
  "620b7af5f701f460000a11e1",
  "620b759bf701f460000a1164",
  "620b78b9f701f460000a11b1",
  "620b795ff701f460000a11c0",
  "620b7612f701f460000a1175",
  "620b7bb5f701f460000a11ec",
  "620b72e2f701f460000a1121",
  "620b7357f701f460000a1132",
  "620b7463f701f460000a1149",
  "620b7c66f701f460000a11f3",
  "620b6a46f701f460000a100b",
];
//print random ID
console.log(random_item(items));
//insert random ID in the url
document
  .querySelector(".surprise_link")
  .setAttribute("href", `productpage.html?id=${random_item(items)}`);
