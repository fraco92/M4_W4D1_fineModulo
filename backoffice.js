export const addButton = document.getElementById("addButton");

export const nameInput = document.getElementById("name-input");
export const brandInput = document.getElementById("brand-input");
export const descriptionInput = document.getElementById("description-input");
export const imgInput = document.getElementById("img-input");
export const priceInput = document.getElementById("price-input");

export const productsTable = document.getElementById("products-table");

import {
  getProducts,
  addProduct,
  deleteProduct,
  modifyProduct,
} from "./api.js";
import { getModifiedProduct } from "./components/modifyModal.js";
import { productsList } from "./components/productList.js";

const displayProducts = (products) => {
  productsTable.innerHTML = productsList(products);

  addButton.onclick = async () => {
    const newProduct = {
      name: nameInput.value,
      brand: brandInput.value,
      description: descriptionInput.value,
      imageUrl: imgInput.value,
      price: priceInput.value,
    };
    const product = await addProduct(newProduct);
    products.push(product);
    displayProducts(products);
  };

  products.forEach((product, index) => {
    const deleteButton = document.getElementById("delete-" + product._id);
    const saveButton = document.getElementById("save-" + product._id);

    if (deleteButton) {
      deleteButton.addEventListener("click", () => {
        const confirmDelete = confirm(
          "Are you sure you want to delete this product?"
        );
        if (confirmDelete) {
          deleteProduct(product._id);
          displayProducts(products.filter((prod) => prod._id !== product._id));
        }
      });
    }

    if (saveButton) {
      saveButton.addEventListener("click", () => {
        const modifiedProduct = getModifiedProduct(product._id);
        modifiedProduct._id = product._id;
        modifyProduct(modifiedProduct);
        products[index] = modifiedProduct;
        displayProducts(products);

        const backdropElement = document.querySelector(".modal-backdrop");
        backdropElement.parentNode.removeChild(backdropElement);
      });
    }
  });
};

const mainBackoffice = async () => {
  try {
    const products = await getProducts();

    displayProducts(products);
  } catch (error) {
    console.log(error);
  }
};
mainBackoffice();
