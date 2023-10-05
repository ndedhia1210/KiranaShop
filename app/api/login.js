import client from "./client";

const login = (username, password) =>
  client.post("/v1/auth", {
    username,
    password,
  });

export default {
  login,
};
