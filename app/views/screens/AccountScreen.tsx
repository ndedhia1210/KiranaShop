import React, { useState, useContext } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";

import Screen from "../components/Screen";
import { defaultStyles, colors } from "../styles";
import AuthContext, { AuthContextType } from "../../auth/context";
import asyncStorage from "../../store/asyncStorage";
import { USER_OBJECT_KEY } from "../../store/constants";
import TextInput from "../components/TextInput";

function AccountScreen(props) {
  const authContext: AuthContextType = useContext(AuthContext);
  const [name, setName] = useState(authContext.user.name);
  const [phone, setPhone] = useState(authContext.user.phoneNumber);
  const [email, setEmail] = useState(authContext.user.email);
  const [address, setAddress] = useState(authContext.user.address);

  const handleLogout = () => {
    authContext.setUserObject(null);
    asyncStorage.removeData(USER_OBJECT_KEY);
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.keyboardAvoidView}
      >
        <Text style={styles.headerText}>Profile</Text>
        <Image style={styles.profileDp} source={null} />
        <View style={styles.form}>
          <TextInput
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            label="Username"
            disabled={true}
            value={authContext.user.username}
          />
          <TextInput
            label="Phone number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
          <TextInput
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            label="Address"
            multiline={true}
            value={address}
            numberOfLines={3}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        <Button
          textColor={colors.sb_dark}
          buttonColor={colors.sb_bright}
          style={styles.button}
          mode="contained"
          onPress={handleLogout}
        >
          <Text style={defaultStyles.buttonText}>Logout</Text>
        </Button>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: "center",
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 30,
    width: "100%",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: colors.sb_bright_100,
    alignItems: "center",
    overflow: "scroll",
  },
  form: {
    width: "100%",
    gap: 15,
    maxWidth: 500,
  },
  headerText: {
    marginTop: 45,
    fontSize: 35,
    alignSelf: "center",
  },
  keyboardAvoidView: {
    width: "100%",
  },
  profileDp: {
    marginTop: 30,
    marginBottom: 30,
    height: 150,
    width: 150,
    borderRadius: 75,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.sb_gray_100,
    backgroundColor: colors.sb_gray_100,
  },
  text: {
    ...defaultStyles.text,
    color: colors.sb_dark,
  },
});

export default AccountScreen;
