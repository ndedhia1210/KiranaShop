import React from "react";
import { StyleSheet } from "react-native";

import colors from "../../styles/colors";
import LottieView from "lottie-react-native";

export function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      style={styles.overlay}
      source={require("../../../assets/animation/loading.json")}
      autoPlay
      loop
    />
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    position: "absolute",
    backgroundColor: colors.sb_bright,
    height: "100%",
    opacity: 0.8,
    width: "100%",
    zIndex: 1,
  },
});
