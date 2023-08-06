import client from "./client";

const auth = (username, password) =>
  client.post("/auth", { username, password });

export default {
  auth,
};
