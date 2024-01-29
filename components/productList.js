import { modifyModal } from "./modifyModal.js";

export const productsList = (data) => {
  return data
    .map((product, index) => {
      return `<tr>
  <th scope="row">${index + 1}</th>
  <td>${product._id}</td>
  <td>${product.name}</td>
  <td>${product.brand}</td>
  <td>${product.price.toFixed(2)}</td>
  <td>
  <button id="modifyButton" type="button" class="btn btn-dark me-1" data-bs-toggle="modal" data-bs-target="#modifyModal-${
    product._id
  }">
  Modify
  </button>


          ${modifyModal(product)}


  <button id="delete-${product._id}" type="button" class="btn btn-danger">
  <ion-icon name="trash"></ion-icon>
  </button>
  </td>
</tr>`;
    })
    .join("");
};
