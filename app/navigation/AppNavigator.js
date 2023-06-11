import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useEffect, useContext } from "react";
import { ToastProvider } from "react-native-toast-notifications";

import AccountScreen from "../views/screens/AccountScreen";
import CartScreen from "../views/screens/CartScreen";
import OrderListScreen from "../views/screens/OrderListScreen";
import ProductNavigator from "./ProductNavigator";
import { colors } from "../views/styles";
import BadgeContext from "../context/badgeContext";
import AuthContext from "../auth/context";
import { updateCartBadge } from "../utility/cartUtils";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const authContext = useContext(AuthContext);
  const [badgeItemCount, setBadgeItemCount] = useState(0);

  useEffect(() => {
    const initializeApp = async () => {
      updateCartBadge(authContext.user.username, setBadgeItemCount);
    };
    initializeApp();
  }, []);

  return (
    <ToastProvider>
      <BadgeContext.Provider value={{ badgeItemCount, setBadgeItemCount }}>
        <Tab.Navigator>
          <Tab.Screen
            name="Categories"
            component={ProductNavigator}
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
              tabBarBadge: badgeItemCount > 0 ? badgeItemCount : null,
              tabBarBadgeStyle: {
                backgroundColor: colors.sb_red_100,
                color: colors.sb_bright,
                paddingTop: 1,
                fontWeight: 500,
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
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
      </BadgeContext.Provider>
    </ToastProvider>
  );
};

export default AppNavigator;
