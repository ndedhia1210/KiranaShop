import { create } from "apisauce";
import settings from "../config/settings";
import asyncStorage from "../store/asyncStorage";
import { TOKEN_KEY } from "../store/constants";

const apiClient = create({
  baseURL: settings.baseURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
  const token = await asyncStorage.getDataObject(TOKEN_KEY);
  if (!token) return;
  request.headers["authorization"] = `bearer ${token}`;
});

export default apiClient;
