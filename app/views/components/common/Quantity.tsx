import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../styles/colors";

export enum QUANTITY_UNITS {
  KG = "kg",
  GM = "gm",
  ML = "ml",
  L = "l",
}

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
