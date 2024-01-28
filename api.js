import { token } from "./config";

const URL = "https://striveschool-api.herokuapp.com/api/product/";

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
  console.log(data);
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
