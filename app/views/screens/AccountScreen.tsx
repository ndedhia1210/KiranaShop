import React, { useContext } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import { useForm } from "react-hook-form";
import { useToast } from "react-native-toast-notifications";

import Screen from "../components/Screen";
import { defaultStyles, colors } from "../styles";
import AuthContext, { AuthContextType } from "../../auth/context";
import asyncStorage from "../../store/asyncStorage";
import { USER_OBJECT_KEY } from "../../store/constants";
import TextInput from "../components/TextInput";
import { UserDetails } from "../../models";
import useApi from "../../api/hooks/useApi";
import user from "../../api/user";
import { RESPONSE_CODES } from "../../api/responseCodes";
import ActivityIndicator from "../components/ActivityIndicator";
import { TOAST_TYPE, showNotificationToast } from "../../utility/toastHelper";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PHONE_NUMBER_REGEX = /^[0-9]+$/;

function AccountScreen(props) {
  const authContext: AuthContextType = useContext(AuthContext);
  const { name, username, phoneNumber, email, address } = authContext.user;
  const updateUserApi = useApi(user.updateUser);
  const toast = useToast();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<UserDetails>({
    defaultValues: {
      name,
      phoneNumber,
      email,
      address,
      username,
    },
  });

  const handleLogout = () => {
    authContext.setUserObject(null);
    asyncStorage.removeData(USER_OBJECT_KEY);
  };

  const handleSave = async (data: UserDetails) => {
    Keyboard.dismiss();
    try {
      const updateUser = await updateUserApi.request(data);
      if (updateUser?.data?.code === RESPONSE_CODES.SUCCESS) {
        authContext.setUserObject(data);
        reset(data);
        showNotificationToast(
          "User account details saved successfully",
          TOAST_TYPE.SUCCESS,
          toast
        );
        asyncStorage.storeDataObject(USER_OBJECT_KEY, data);
      } else {
        console.log("Error when calling v1/updateUser api - ", updateUser.data);
        showNotificationToast(
          "User account details failed to save. Please try again.",
          TOAST_TYPE.FAILURE,
          toast
        );
      }
    } catch (e) {
      console.log("Something went wrong when updating user account details", e);
      showNotificationToast(
        "User account details failed to save. Please try again.",
        TOAST_TYPE.FAILURE,
        toast
      );
    }
  };

  const keyboardVerticalOffset = Platform.OS === "ios" ? 20 : 0;

  return (
    <Screen style={styles.container}>
      <ActivityIndicator visible={updateUserApi.loading} />
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
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
          />
          <TextInput
            label="Username"
            disabled={true}
            name="username"
            control={control}
          />
          <TextInput
            label="Phone number"
            name="phoneNumber"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: PHONE_NUMBER_REGEX,
                message: "Phone number should only contain numbers",
              },
            }}
          />
          <TextInput
            label="Email"
            name="email"
            control={control}
            rules={{
              pattern: {
                value: EMAIL_REGEX,
                message: "Email format should be like example@email.com",
              },
            }}
          />
          <TextInput
            label="Address"
            name="address"
            control={control}
            multiline={true}
            numberOfLines={3}
          />
        </View>
        {isDirty && (
          <View style={styles.formButtonContainer}>
            <Button
              textColor={colors.sb_dark}
              buttonColor={colors.sb_yellow_100}
              style={styles.fixedButton}
              mode="contained"
              onPress={handleSubmit(handleSave)}
            >
              <Text style={defaultStyles.buttonText}>Save</Text>
            </Button>
            <Button
              textColor={colors.sb_dark}
              buttonColor={colors.sb_gray_100}
              style={styles.fixedButton}
              mode="contained"
              onPress={() => reset()}
            >
              <Text style={defaultStyles.buttonText}>Reset</Text>
            </Button>
          </View>
        )}
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
  formButtonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
  },
  fixedButton: {
    borderRadius: 5,
    width: "49%",
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 20,
  },
});

export default AccountScreen;
