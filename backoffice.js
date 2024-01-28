export const addButton = document.getElementById("addButton");
export const modifyButton = document.getElementById("modifyButton");
export const deleteButton = document.getElementById("deleteButton");

export const nameInput = document.getElementById("name-input");
export const brandInput = document.getElementById("brand-input");
export const descriptionInput = document.getElementById("description-input");
export const imgInput = document.getElementById("img-input");
export const priceInput = document.getElementById("price-input");

export const productsTable = document.getElementById("products-table");

import { getProducts, addProduct } from "./api.js";
import { productsList } from "./components.js";

const mainBackoffice = async () => {
  try {
    const products = await getProducts();
    productsTable.innerHTML = productsList(products);
    addButton.addEventListener("click", () => {
      const newProduct = {
        name: nameInput.value,
        brand: brandInput.value,
        description: descriptionInput.value,
        imageUrl: imgInput.value,
        price: priceInput.value,
      };
      addProduct(newProduct);
    });
  } catch (error) {
    console.log(error);
  }
};
mainBackoffice();
