import { UserDetails } from "../models";
import client from "./client";

const getUser = (username: string) =>
  client.get("/v1/getUser", {
    username,
  });

const updateUser = (user: UserDetails) => {
  const { name, username, email, phoneNumber, address } = user;
  return client.post("/v1/updateUser", {
    name,
    username,
    email,
    phoneNumber,
    address,
  });
};

export default {
  getUser,
  updateUser,
};
