import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../styles/colors";

interface props {
  value: number | string;
  striked?: boolean;
  color?: string;
  size?: number;
  style?: any;
}

export function Price({
  value,
  striked = false,
  color = colors.sb_dark,
  size = 24,
  style = {},
}) {
  return (
    <Text
      style={[
        { fontSize: size },
        { color },
        striked && styles.strikedText,
        style,
      ]}
    >
      Rs. {value}/-
    </Text>
  );
}

const styles = StyleSheet.create({
  strikedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
