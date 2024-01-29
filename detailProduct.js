import { getProducts } from "./api.js";

const displayProductDetail = async () => {
  try {
    const cardContainer = document.getElementById("card-container");
    const product = await getProducts();
    cardContainer.innerHTML = "";
    console.log(product);

    product.forEach((product) => {
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
              <p class="card-text text-truncate">
                ${product.description}
              </p>
              <p class="card-text">${product.price} €</p>
              <a href="detailProduct.html?id=${product._id}" class="btn btn-primary">Details</a>
              <a href="#" class="btn btn-primary">Buy</a>
            </div>
          </div>
        </div>`;
    });
  } catch (error) {
    console.error(error);
  }
};
displayProductDetail();
