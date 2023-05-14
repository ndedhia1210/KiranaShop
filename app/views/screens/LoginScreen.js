import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Button } from "react-native-paper";

import { defaultStyles, colors } from "../styles";
import Screen from "../components/Screen";
import AuthContext from "../../auth/context";
import auth from "../../api/login";
import asyncStorage from "../../store/asyncStorage";
import { USER_OBJECT_KEY } from "../../store/constants";
import useApi from "../../api/hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import TextInput from "../components/TextInput";

function LoginScreen(props) {
  const loginApi = useApi(auth.login);
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  const handleLogin = async () => {
    Keyboard.dismiss();
    const result = await loginApi.request(username, password);
    if (!result.ok) {
      // TODO: set state variable to true which will enable the display of error message
      console.log(result.data);
      return;
    }
    authContext.setUser(result.data);
    asyncStorage.storeDataObject(USER_OBJECT_KEY, result.data);
  };

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loginApi.loading} />
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.keyboardAvoidView}
      >
        <Text style={styles.appName}>KiranaShop</Text>
        <Image
          style={styles.logo}
          source={require("../../assets/AppLogo.png")}
        />
        <View style={styles.form}>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            textColor={colors.sb_dark}
            buttonColor={colors.sb_yellow_100}
            style={styles.button}
            mode="contained"
            onPress={handleLogin}
          >
            <Text style={defaultStyles.buttonText}>Login</Text>
          </Button>
          <Button
            textColor={colors.sb_dark}
            buttonColor={colors.sb_blue_100}
            style={styles.button}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <Text style={defaultStyles.buttonText}>
              Request for new password
            </Text>
          </Button>
          <Text style={styles.note}>
            Note: Please contact shopkeeper for new password!
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
    paddingHorizontal: 25,
    width: "100%",
  },
  appName: {
    ...defaultStyles.text,
    fontSize: 50,
    alignSelf: "center",
  },
  keyboardAvoidView: {
    width: "100%",
  },
  logo: {
    margin: 20,
    width: 150,
    height: 150,
    alignSelf: "center",
  },
  form: {
    width: "100%",
    gap: 15,
    maxWidth: 500,
  },
  button: {
    borderRadius: 5,
    justifyContent: "center",
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 6,
  },
  inputTextBox: {
    backgroundColor: colors.sb_bright,
    outline: "none",
  },
  note: {
    alignSelf: "center",
    fontSize: 15,
  },
});

export default LoginScreen;
