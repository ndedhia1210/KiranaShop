import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";

/*
 * Wrapper component for the screens which adds a padding to the top based on the
 * status bar height of the device.
 *
 * Every screen of the app should be wrapped by this 'Screen' component.
 */
function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    // ^^ Adds top padding to avoid content bleeding into the status bar of device
    flex: 1,
  },
});

export default Screen;
