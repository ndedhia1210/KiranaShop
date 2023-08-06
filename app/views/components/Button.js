import { StyleSheet, Text } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

import { colors } from "../styles";

function AppButton(props) {
  const {
    label,
    textColor = colors.sb_bright,
    buttonColor = colors.sb_blue_100,
    onPress = () => {},
    onSubmit = () => {},
  } = props;

  return (
    <Button
      textColor={textColor}
      buttonColor={buttonColor}
      style={styles.button}
      labelStyle={styles.buttonLabel}
      mode="contained"
      onPress={onPress}
      onSubmit={onSubmit}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    justifyContent: "center",
    height: 50,
    marginTop: 6,
  },
  buttonLabel: {
    lineHeight: 36,
    fontSize: 20,
  },
});

export default AppButton;
