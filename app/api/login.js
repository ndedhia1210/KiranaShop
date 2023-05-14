import client from "./client";

const login = (username, password) =>
  client.post("/login", { username, password });

export default {
  login,
};
