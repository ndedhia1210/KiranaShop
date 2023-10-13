import { StyleSheet, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

import { colors } from "../styles";
import { Controller } from "react-hook-form";

function AppTextInput(props) {
  const {
    name,
    control,
    label,
    rules = {},
    multiline = false,
    numberOfLines = 1,
    disabled = false,
    secureTextEntry = false,
    textContentType = "none",
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            label={label}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.inputTextBox}
            mode="outlined"
            outlineColor={error ? colors.sb_red_100 : colors.sb_gray_100}
            activeOutlineColor={error ? colors.sb_red_100 : colors.sb_blue_100}
            multiline={multiline}
            numberOfLines={numberOfLines}
            disabled={disabled}
            secureTextEntry={secureTextEntry}
            textContentType={textContentType}
          />
          {error && (
            <Text style={styles.errorMessage}>{error.message || "Error"}</Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputTextBox: {
    backgroundColor: colors.sb_bright,
    outline: "none",
  },
  errorMessage: {
    color: colors.sb_red_100,
    alignSelf: "stretch",
  },
});

export default AppTextInput;
