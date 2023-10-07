import { StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import { colors } from "../styles";

function AppTextInput(props) {
  const {
    label,
    value,
    onChangeText = () => {},
    multiline = false,
    numberOfLines = 1,
    disabled = false,
    secureTextEntry = false,
    textContentType = "none",
  } = props;

  return (
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.inputTextBox}
      mode="outlined"
      outlineColor={colors.sb_gray_100}
      activeOutlineColor={colors.sb_blue_100}
      multiline={multiline}
      numberOfLines={numberOfLines}
      label={label}
      value={value}
      onChangeText={onChangeText}
      disabled={disabled}
      secureTextEntry={secureTextEntry}
      textContentType={textContentType}
    />
  );
}

const styles = StyleSheet.create({
  inputTextBox: {
    backgroundColor: colors.sb_bright,
    outline: "none",
  },
});

export default AppTextInput;
