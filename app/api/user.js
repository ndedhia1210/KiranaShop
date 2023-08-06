import client from "./client";

const getUser = () => client.get("/getUser");

export default {
  getUser,
};
