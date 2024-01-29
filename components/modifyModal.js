export const modifyModal = (product) => {
  return `  <div class="modal" id="modifyModal-${
    product._id
  }" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalLabel">Modify info product</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
  <div class="modal-body">
  <form class="d-flex" role="search">
  <input
    id="modify-name-input-${product._id}"
    class="form-floating me-2"
    type="text"
    placeholder="Item name"
    aria-label="Search"
    value="${product.name}"
  />
  <input
    id="modify-brand-input-${product._id}"
    class="form-control me-2"
    type="text"
    placeholder="Brand"
    aria-label="Search"
    value="${product.brand}"
  />
  <input
    id="modify-description-input-${product._id}"
    class="form-control me-2"
    type="text"
    placeholder="Description"
    aria-label="Search"
    value="${product.description}"
  />
  <input
    id="modify-img-input-${product._id}"
    class="form-control me-2"
    type="text"
    placeholder="imageURL"
    aria-label="Search"
    value="${product.imgUrl}"
  />
  <input
    id="modify-price-input-${product._id}"
    class="form-control me-4"
    type="number"
    placeholder="Price"
    aria-label="Search"
    value="${product.price.toFixed(2)}"
  />
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button id="save-${
    product._id
  }" type="button" class="btn btn-primary">Save changes</button>
</div>
</div>
</div>
</div>`;
};

export const getModifiedProduct = (productId) => {
  const nameInput = document.getElementById(`modify-name-input-${productId}`);
  const brandInput = document.getElementById(`modify-brand-input-${productId}`);
  const descriptionInput = document.getElementById(
    `modify-description-input-${productId}`
  );
  const imgInput = document.getElementById(`modify-img-input-${productId}`);
  const priceInput = document.getElementById(`modify-price-input-${productId}`);

  return {
    name: nameInput.value,
    brand: brandInput.value,
    description: descriptionInput.value,
    imageUrl: imgInput.value,
    price: parseFloat(priceInput.value),
  };
};
