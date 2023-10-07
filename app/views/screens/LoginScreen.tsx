import React, { useState, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button } from "react-native-paper";

import { defaultStyles, colors } from "../styles";
import Screen from "../components/Screen";
import AuthContext, { AuthContextType } from "../../auth/context";
import auth from "../../api/login";
import user from "../../api/user";
import asyncStorage from "../../store/asyncStorage";
import { TOKEN_KEY, USER_OBJECT_KEY } from "../../store/constants";
import useApi from "../../api/hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import TextInput from "../components/TextInput";
import { RESPONSE_CODES } from "../../api/responseCodes";

function LoginScreen(props) {
  const loginApi = useApi(auth.login);
  const getUserApi = useApi(user.getUser);
  const authContext: AuthContextType = useContext(AuthContext);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState<string>();

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  const handleLogin = async () => {
    Keyboard.dismiss();
    try {
      const authResponse = await loginApi.request(username, password);
      if (authResponse?.data?.code === RESPONSE_CODES.SUCCESS) {
        await asyncStorage.storeDataObject(
          TOKEN_KEY,
          authResponse?.data?.accessToken
        );
        const user = await getUserApi.request(username);
        if (user?.data?.code === RESPONSE_CODES.SUCCESS) {
          authContext.setUserObject(user.data);
          asyncStorage.storeDataObject(USER_OBJECT_KEY, user.data);
        } else {
          console.log("Error when calling v1/getUser api - ", user.data);
          setErrorMessage(user.data?.errorMessage);
        }
      } else {
        console.log("Error when calling v1/auth api - ", authResponse.data);
        setErrorMessage(authResponse.data?.errorMessage);
      }
    } catch (e) {
      console.log("Something went wrong when trying to login - ", e);
      setErrorMessage("Something went wrong. Retry login.");
    }
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
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
        <View style={styles.form}>
          <TextInput
            label="Username"
            value={username}
            onChangeText={(text) => {
              errorMessage && setErrorMessage("");
              setUsername(text);
            }}
          />
          <TextInput
            label="Password"
            value={password}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={(text) => {
              errorMessage && setErrorMessage("");
              setPassword(text);
            }}
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
    backgroundColor: colors.sb_bright,
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
  errorMessage: {
    ...defaultStyles.text,
    color: colors.sb_red_100,
    alignSelf: "center",
  },
});

export default LoginScreen;
