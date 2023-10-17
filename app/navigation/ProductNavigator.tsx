import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CategoryListScreen from "../views/screens/CategoryListScreen";
import ProductListScreen from "../views/screens/ProductListScreen";
import ProductDetailsScreen from "../views/screens/ProductDetailsScreen";

const Stack = createStackNavigator();

const ProductNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={"Categories"} component={CategoryListScreen} />
      <Stack.Screen name={"Productlist"} component={ProductListScreen} />
      <Stack.Screen name={"ProductDetails"} component={ProductDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
