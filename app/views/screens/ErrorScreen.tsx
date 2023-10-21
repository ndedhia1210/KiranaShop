import React from "react";
import { StyleSheet, Text } from "react-native";

import { Screen } from "../components/common";
import { defaultStyles, colors } from "../styles";

export function ErrorScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={styles.heading}>Oops!</Text>
      <Text style={styles.text}>An error occurred while loading...</Text>
      <Text style={styles.text}>Please restart the app.</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: colors.sb_bright,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    ...defaultStyles.text,
    color: colors.sb_red_100,
    textAlign: "center",
    fontSize: 50,
    paddingBottom: 10,
  },
  text: {
    ...defaultStyles.text,
    color: colors.sb_red_100,
    textAlign: "center",
    paddingBottom: 5,
  },
});
