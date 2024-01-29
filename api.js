import { token } from "./config.js";

const URL = "https://striveschool-api.herokuapp.com/api/product/";

export const deleteProduct = async (productId) => {
  await fetch(URL + productId, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
  });
};

export const modifyProduct = async (product) => {
  const response = await fetch(URL + product._id, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(product),
  });
  const data = await response.json();
};

export const addProduct = async (dataItem) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(dataItem),
  });
  const data = await response.json();
  return data;
};

export const getProducts = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  return await response.json();
};
