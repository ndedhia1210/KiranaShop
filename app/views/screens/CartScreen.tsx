import React from "react";
import { StyleSheet, Text } from "react-native";

import { Screen } from "../components/common";
import { defaultStyles, colors } from "../styles";

export function CartScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Cart screen coming soon...</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: colors.sb_blue_100,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    ...defaultStyles.text,
    color: colors.sb_bright,
  },
});
