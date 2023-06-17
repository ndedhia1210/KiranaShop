import React from "react";
import { StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import { defaultStyles, colors } from "../styles";

function OrderListScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.text}>Orders list screen coming soon...</Text>
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

export default OrderListScreen;
