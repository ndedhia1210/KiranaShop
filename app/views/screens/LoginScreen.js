import React, { useState, useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import { defaultStyles, colors } from "../styles";
import Screen from "../components/Screen";
import AuthContext from "../../auth/context";

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function authenticate() {
    authContext.setUser({});
  }

  return (
    <Screen style={styles.container}>
      <Text style={styles.appName}>KiranaShop</Text>
      <Image style={styles.logo} source={require("../../assets/AppLogo.png")} />
      <View style={styles.form}>
        <TextInput
          style={styles.inputTextBox}
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.inputTextBox}
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          textColor={colors.sb_dark}
          buttonColor={colors.sb_yellow_100}
          style={styles.button}
          mode="contained"
          onPress={authenticate}
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
          <Text style={defaultStyles.buttonText}>Request for new password</Text>
        </Button>
        <Text style={styles.note}>
          Note: Please contact shopkeeper for new password!
        </Text>
      </View>
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
  },
  logo: {
    margin: 20,
    width: 150,
    height: 150,
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
    backgroundColor: colors.sb_gray_100,
    outline: "none",
  },
  note: {
    alignSelf: "center",
    fontSize: 15,
  },
});

export default LoginScreen;
