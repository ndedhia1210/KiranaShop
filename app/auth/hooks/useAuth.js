import { useContext } from "react";
import AuthContext from "../context";
import { USER_OBJECT_KEY, TOKEN_KEY } from "../../store/constants";
import asyncStorage from "../../store/asyncStorage";

export default useAuth = () => {
  const { user, setUser, token, setToken } = useContext(AuthContext);

  const logIn = async (authApi, getUserApi, username, password) => {
    const authResponse = await authApi.request(username, password);
    if (!authResponse.ok) {
      return;
    }
    await asyncStorage.storeDataObject(TOKEN_KEY, authResponse.data);
    setToken(authResponse.data);
    const getUserResponse = await getUserApi.request();
    if (!getUserResponse.ok) {
      return;
    }
    setUser(getUserResponse.data);
    console.log(getUserResponse.data);
    asyncStorage.storeDataObject(USER_OBJECT_KEY, getUserResponse.data);
  };

  const logOut = () => {
    setToken(null);
    setUser(null);
    asyncStorage.removeData(TOKEN_KEY);
    asyncStorage.removeData(USER_OBJECT_KEY);
  };

  return { user, token, logIn, logOut };
};
