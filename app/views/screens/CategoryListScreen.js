import React from "react";
import { StyleSheet, Text } from "react-native";

import Screen from "../components/Screen";
import CategoryList from "../components/Category/CategoryList";


function CategoryListScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <Text style={defaultStyle.headerText}>Categories</Text>
      <CategoryList navigation={navigation} />
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
  },
});

export default CategoryListScreen;
