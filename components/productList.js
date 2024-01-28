import { modifyModal } from "./modifyModal.js";

export const productsList = (data) => {
  return data
    .map((product, index) => {
      return `<tr>
  <th scope="row">${index + 1}</th>
  <td>${product._id}</td>
  <td>${product.name}</td>
  <td>${product.brand}</td>
  <td>${product.price}</td>
  <td>
  <button id="modifyButton" type="button" class="btn btn-dark me-1" data-bs-toggle="modal" data-bs-target="#modifyModal">
  Modify
  </button>

  <div class="modal" id="modifyModal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="ModalLabel">Modify info product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
          ${modifyModal(product)}
     </div>
    </div>
  </div>

  <button id="delete-${product._id}" type="button" class="btn btn-danger">
  Delete
  </button>
  </td>
</tr>`;
    })
    .join("");
};
