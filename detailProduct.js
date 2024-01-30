import { getProductDetail } from "./api.js";

const params = new URLSearchParams(location.search);
const productId = params.get("id");

const displayProductDetail = async () => {
  try {
    const cardContainer = document.getElementById("card-container");
    const product = await getProductDetail(productId);
    cardContainer.innerHTML = "";
    console.log(product);

    cardContainer.innerHTML += `
        <div class="col">
          <div class="card" style="width: 18rem">
            <img
              src="${product.imageUrl}"
              class="card-img-top"
              alt="${product.name}"
            />
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">
                ${product.description}
              </p>
              <p class="card-text">${product.price} €</p>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>`;
  } catch (error) {
    console.error(error);
  }
};
displayProductDetail();
