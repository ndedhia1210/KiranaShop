import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import CartItemList from "../components/Cart/CartItemList";

function CartScreen({ navigation, route }) {
  return (
    <Screen style={styles.container}>
      {/* <MaterialCommunityIcons
        name="chevron-left"
        size={40}
        style={styles.back}
        onPress={() => navigation.navigate("Categories")}
      /> */}
      <Text style={styles.headerText}>Your cart</Text>
      <CartItemList />
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
    top: 65,
    left: 8,
  },
});

export default CartScreen;
