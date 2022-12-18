const productsArray = [
  {
    id: "1",
    title: "Kape",
    price: 250,
  },
  {
    id: "2",
    title: "Pancit Bihon",
    price: 350,
  },
  {
    id: "3",
    title: "Palabok",
    price: 400,
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);

  if (productData) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { productsArray, getProductData };
