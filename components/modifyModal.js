export const modifyModal = (product) => {
  return `<div class="modal-body">
  <form class="d-flex" role="search">
  <input
    id="modify-name-input"
    class="form-floating me-2"
    type="text"
    placeholder="Item name"
    aria-label="Search"
    value="${product.name}"
  />
  <input
    id="modify-brand-input"
    class="form-control me-2"
    type="text"
    placeholder="Brand"
    aria-label="Search"
    value="${product.brand}"
  />
  <input
    id="modify-description-input"
    class="form-control me-2"
    type="text"
    placeholder="Description"
    aria-label="Search"
    value="${product.description}"
  />
  <input
    id="modify-img-input"
    class="form-control me-2"
    type="text"
    placeholder="imageURL"
    aria-label="Search"
    value="${product.imgUrl}"
  />
  <input
    id="modify-price-input"
    class="form-control me-4"
    type="number"
    placeholder="Price"
    aria-label="Search"
    value="${product.price}"
  />
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button id="save-${product._id}" type="button" class="btn btn-primary">Save changes</button>
</div>`;
};

export const getModifiedProduct = () => {
  const nameInput = document.getElementById("modify-name-input");
  const brandInput = document.getElementById("modify-brand-input");
  const descriptionInput = document.getElementById("modify-description-input");
  const imgInput = document.getElementById("modify-img-input");
  const priceInput = document.getElementById("modify-price-input");

  return {
    name: nameInput.value,
    brand: brandInput.value,
    description: descriptionInput.value,
    imageUrl: imgInput.value,
    price: priceInput.value,
  };
};
