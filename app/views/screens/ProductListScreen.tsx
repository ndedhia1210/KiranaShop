import React from "react";
import { StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import ProductList from "../components/Product/ProductList";

function ProductListScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        style={styles.back}
        onPress={() => navigation.pop()}
      />
      <Text style={styles.headerText}>{route.params.categoryDetails.name}</Text>
      <ProductList categoryDetails={route.params.categoryDetails} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    marginTop: 20,
    marginBottom: 15,
    fontSize: 35,
    alignSelf: "center",
    textAlign: "center",
  },
  back: {
    position: "absolute",
    top: 20,
    left: 8,
  },
});

export default ProductListScreen;
