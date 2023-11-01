import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Screen } from "../components/common";
import ProductDetails from "../components/product/ProductDetails";
import { colors } from "../styles";

export function ProductDetailsScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        style={styles.back}
        onPress={() => navigation.pop()}
      />
      <ProductDetails details={route.params.productDetails} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.sb_bright_100,
  },
  back: {
    position: "absolute",
    top: 20,
    left: 8,
    zIndex: 1,
  },
});
