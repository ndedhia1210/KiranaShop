import client from "./client";

const getCategories = () => client.get("/v1/getCategories", {});

export default {
  getCategories,
};
