import React from "react";
import { StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import defaultStyle from "../styles/styles";
import colors from "../styles/colors";

function CategoryListScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={defaultStyle.text}>Coming soon...</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: colors.sb_blue_100,
  },
});

export default CategoryListScreen;
