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
  <button id="modifyButton" type="button" class="btn btn-dark me-1">
  Modify
  </button>
  <button id="deleteButton" type="button" class="btn btn-danger">
  Delete
  </button>
  </td>
</tr>`;
    })
    .join("");
};
