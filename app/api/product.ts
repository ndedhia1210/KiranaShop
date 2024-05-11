import client from "./client";

const getProductsByCategory = (categoryId: string) =>
  client.get(`/v1/getProductsByCategory?categoryId=${categoryId}`, {});

export default {
  getProductsByCategory,
};
