import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../styles/colors";
import { QUANTITY_UNITS } from "../../../constants/enums";

interface props {
  value: number | string;
  unit: QUANTITY_UNITS;
  striked?: boolean;
  color?: string;
  size?: number;
  style?: any;
}

export function Quantity({
  value,
  unit,
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
      {value} {unit}
    </Text>
  );
}

const styles = StyleSheet.create({
  strikedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});
