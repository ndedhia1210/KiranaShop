import client from "./client";

const getUser = (username) =>
  client.get("/v1/getUser", {
    username,
  });

export default {
  getUser,
};
