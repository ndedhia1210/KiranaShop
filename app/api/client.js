import { create } from "apisauce";
import settings from "../config/settings";
import asyncStorage from "../store/asyncStorage";
import { TOKEN_KEY } from "../store/constants";

const apiClient = create({
  baseURL: settings.baseURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  // TODO: use react-native-device-info library to get the unique device id
  // This can be done once we create an apple developer account to create a build for installing in actual apple device
  request.headers["deviceId"] = "deviceId3";
  const token = await asyncStorage.getDataObject(TOKEN_KEY);
  console.log(token);
  if (!token) return;
  request.headers["authorization"] = `bearer ${token}`;
});

export default apiClient;
