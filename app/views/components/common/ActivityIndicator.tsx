import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import Lottie from "lottie-react-native";

import colors from "../../styles/colors";

export function ActivityIndicator({ visible = false }) {
  if (!visible) return null;

  const animationProgress = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={styles.overlay}>
      <Lottie
        progress={animationProgress.current}
        source={require("../../../assets/animation/loading.json")}
      />
    </View>
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
