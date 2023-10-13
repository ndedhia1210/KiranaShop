import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ToastProvider } from "react-native-toast-notifications";

import CategoryListScreen from "../views/screens/CategoryListScreen";
import AccountScreen from "../views/screens/AccountScreen";
import CartScreen from "../views/screens/CartScreen";
import OrderListScreen from "../views/screens/OrderListScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <ToastProvider>
    <Tab.Navigator>
      <Tab.Screen
        name="Categories"
        component={CategoryListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Order List"
        component={OrderListScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="text-box-search-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </ToastProvider>
);

export default AppNavigator;
