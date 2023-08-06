import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import { Formik } from "formik";

import { defaultStyles, colors } from "../styles";
import Screen from "../components/Screen";
import AuthApi from "../../api/auth";
import UserApi from "../../api/user";
import useApi from "../../api/hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import TextInput from "../components/TextInput";
import useAuth from "../../auth/hooks/useAuth";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/Button";

function LoginScreen(props) {
  const authApi = useApi(AuthApi.auth);
  const getUserApi = useApi(UserApi.getUser);
  const { logIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  const handleLogin = (username, password) => {
    Keyboard.dismiss();
    setLoading(true);
    logIn(authApi, getUserApi, username, password)
      .then(() => {
        if (authApi.error) {
          console.log(authApi.errorMessage);
          setErrorMessage(authApi.errorMessage);
        } else if (getUserApi.error) {
          console.log(authApi.errorMessage);
          setErrorMessage(getUserApi.errorMessage);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(
          "Something went wrong. Please contact technical support."
        );
        setLoading(false);
      });
  };

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={loading} />
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
          <Formik
            style={styles.form}
            initialValues={{ username: "", password: "" }}
            onSubmit={({ username, password }) => {
              console.log(username, password);
              handleLogin(username, password);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <>
                <TextInput
                  label="Username"
                  value={values.username}
                  onChangeText={handleChange("username")}
                />
                <TextInput
                  label="Password"
                  value={values.password}
                  secureTextEntry={true}
                  textContentType="password"
                  onChangeText={handleChange("password")}
                />
                {errorMessage && <ErrorMessage error={errorMessage} />}
                <Button
                  label={"Login"}
                  textColor={colors.sb_dark}
                  buttonColor={colors.sb_yellow_100}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
          <Button
            label={"Register"}
            textColor={colors.sb_bright}
            buttonColor={colors.sb_blue_100}
            onPress={() => console.log("Register")}
          />
          <Button
            label={"Reset Password"}
            textColor={colors.sb_bright}
            buttonColor={colors.sb_blue_100}
            onPress={() => console.log("Reset Password")}
          />
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
