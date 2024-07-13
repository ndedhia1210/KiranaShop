import React from "react";
import { StyleSheet } from "react-native";

import LottieView from "lottie-react-native";

export function ComponentLoadingIndicator({ visible = false }) {
  if (!visible) return null;

  return (
    <LottieView
      style={styles.overlay}
      source={require("../../../assets/animation/componentLoading.json")}
      autoPlay
      loop
    />
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
  },
});
