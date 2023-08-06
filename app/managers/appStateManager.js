import DeviceInfo from "react-native-device-info";
import { useContext } from "react";

import asyncStorage from "../store/asyncStorage";
import { APP_STATE } from "../store/constants";
import AppContext from "./appContext";

export default AppStateManager = () => {
  const state = useContext(AppContext);
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const initializeAppState = async () => {
    try {
      let appState = await asyncStorage.getDataObject(APP_STATE);
      if (!appState) {
        appState = {
          user: null,
          token: "",
          deviceId: DeviceInfo.getUniqueId(),
        };
        await asyncStorage.storeDataObject(APP_STATE, appState);
      }
      return appState;
    } catch (error) {
      console.error(`Error occured while initializing app state - ${error}`);
    }
  };

  const cleanupAppState = async () => {
    try {
      await asyncStorage.removeData(APP_STATE);
    } catch (error) {
      console.error(`Error occured while cleaning up app state - ${error}`);
    }
  };

  return {
    initializeAppState,
    cleanupAppState,
  };
};
