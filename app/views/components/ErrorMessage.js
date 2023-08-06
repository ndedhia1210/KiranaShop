import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { colors } from "../styles";

function ErrorMessage({ error }) {
  //   useEffect(() => {
  //     if (!error) return null;
  //   }, [error]);

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: {
    color: colors.sb_red_100,
  },
});

export default ErrorMessage;
