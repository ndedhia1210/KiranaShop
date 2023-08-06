import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Formik } from "formik";

import Screen from "../components/Screen";
import { defaultStyles, colors } from "../styles";
import TextInput from "../components/TextInput";
import useAuth from "../../auth/hooks/useAuth";
import Button from "../components/Button";

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  return (
    <Screen style={styles.container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={styles.keyboardAvoidView}
      >
        <Text style={styles.headerText}>Profile</Text>
        <Image style={styles.profileDp} />
        <View style={styles.form}>
          <Formik
            style={styles.form}
            initialValues={{
              name: user.name,
              phone: user.phone,
              email: user.email,
              address: user.address,
              username: user.username,
            }}
            onSubmit={({ name, phone, email, address, username }) => {
              console.log(name, phone, email, address, username);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <>
                <TextInput
                  label="Name"
                  value={values.name}
                  onChangeText={handleChange("name")}
                />
                <TextInput
                  label="Username"
                  value={values.username}
                  disabled={true}
                  onChangeText={handleChange("username")}
                />
                <TextInput
                  label="Phone number"
                  value={values.phone}
                  onChangeText={handleChange("phone")}
                />
                <TextInput
                  label="Email"
                  value={values.email}
                  onChangeText={handleChange("email")}
                />
                <TextInput
                  label="Address"
                  value={values.address}
                  multiline={true}
                  numberOfLines={3}
                  onChangeText={handleChange("address")}
                />
              </>
            )}
          </Formik>
        </View>
        <Button
          label={"Logout"}
          textColor={colors.sb_dark}
          buttonColor={colors.sb_bright}
          onPress={() => logOut()}
        />
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
