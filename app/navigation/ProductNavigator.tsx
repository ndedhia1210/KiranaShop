import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import {
  CategoryListScreen,
  ProductListScreen,
  ProductDetailsScreen,
} from "../views/screens";

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
