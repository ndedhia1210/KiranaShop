import React from "react";
import Constants from "expo-constants";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

/*
 * Wrapper component for the screens which adds a padding to the top based on the
 * status bar height of the device.
 *
 * Every screen of the app should be wrapped by this 'Screen' component.
 */
export function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <StatusBar barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
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
