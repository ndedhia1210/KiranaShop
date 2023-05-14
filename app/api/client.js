import { create } from "apisauce";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.baseURL,
});

export default apiClient;
