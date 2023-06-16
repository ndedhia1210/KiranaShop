import React, { useState, useContext } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";

import Screen from "../components/Screen";
import { colors } from "../styles";
import AuthContext from "../../auth/context";
import asyncStorage from "../../store/asyncStorage";
import { USER_OBJECT_KEY } from "../../store/constants";
import TextInput from "../components/TextInput";
import DismissKeyboardView from "../components/DismissKeyboardView";

function AccountScreen(props) {
  const authContext = useContext(AuthContext);
  const [name, setName] = useState(authContext.user.name);
  const [phone, setPhone] = useState(authContext.user.phone);
  const [email, setEmail] = useState(authContext.user.email);
  const [address, setAddress] = useState(authContext.user.address);

  const handleLogout = () => {
    authContext.setUser(null);
    asyncStorage.removeData(USER_OBJECT_KEY);
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  return (
    <Screen style={styles.container}>
      <DismissKeyboardView>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={keyboardVerticalOffset}
          style={styles.keyboardAvoidView}
        >
          <Text style={styles.headerText}>Profile</Text>
          <ScrollView>
            <Image style={styles.profileDp} />
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
              labelStyle={styles.buttonLabel}
            >
              Logout
            </Button>
          </ScrollView>
        </KeyboardAvoidingView>
      </DismissKeyboardView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: "center",
    marginTop: 30,
    width: "100%",
    height: 50,
  },
  buttonLabel: {
    lineHeight: 36,
    fontSize: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
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
    marginTop: 20,
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
});

export default AccountScreen;
