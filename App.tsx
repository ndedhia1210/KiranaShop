import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AnimatedSplash from "react-native-animated-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AuthContext, { AuthContextType } from "./app/auth/context";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import asyncStorage from "./app/store/asyncStorage";
import { USER_OBJECT_KEY } from "./app/store/constants";
import { ErrorScreen } from "./app/views/screens";
import { AsyncStatus } from "./app/constants/enums";
import { colors } from "./app/views/styles";

export default function App() {
  const [user, setUser] = useState<AuthContextType>();
  const [appStatus, setAppStatus] = useState(AsyncStatus.Idle);

  const setUserObject = (userObj) => {
    setUser(userObj);
  };

  const restoreUserSession = async () => {
    const userObj = await asyncStorage.getDataObject(USER_OBJECT_KEY);
    if (!userObj) return;
    setUser(userObj);
  };

  useEffect(() => {
    async function prepare() {
      try {
        setAppStatus(AsyncStatus.Loading);
        await restoreUserSession();
        setAppStatus(AsyncStatus.Succeeded);
      } catch (error) {
        console.log("Error loading app", error);
        setAppStatus(AsyncStatus.Failed);
      }
    }

    prepare();
  }, []);

  // Render respective experience based on success/failure to load App component
  function renderSwitch() {
    switch (appStatus) {
      case AsyncStatus.Succeeded:
        return user ? <AppNavigator /> : <AuthNavigator />;
      case AsyncStatus.Failed:
        return <ErrorScreen />;
    }
  }

  function isAppLoaded() {
    return (
      appStatus === AsyncStatus.Succeeded || appStatus === AsyncStatus.Failed
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AnimatedSplash
        translucent={true}
        isLoaded={isAppLoaded()}
        logoImage={require("./app/assets/AppLogo.png")}
        backgroundColor={colors.sb_red_100}
        logoHeight={150}
        logoWidth={150}
      >
        <AuthContext.Provider value={{ user, setUserObject }}>
          <NavigationContainer theme={navigationTheme}>
            {renderSwitch()}
          </NavigationContainer>
        </AuthContext.Provider>
      </AnimatedSplash>
    </GestureHandlerRootView>
  );
}
