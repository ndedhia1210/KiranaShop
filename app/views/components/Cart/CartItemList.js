import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useIsFocused } from "@react-navigation/native";

import CartItem from "./CartItem";
import { colors } from "../../styles";
import { fetchFromCart, updateCartBadge } from "../../../utility/cartUtils";
import AuthContext from "../../../auth/context";
import BadgeContext from "../../../context/badgeContext";

function CartItemList(props) {
  const authContext = useContext(AuthContext);
  const badgeContext = useContext(BadgeContext);
  const [cartItems, setCartItems] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  const isFocused = useIsFocused();

  useEffect(() => {
    const loadCart = async () => {
      const cartItemList = await fetchFromCart(authContext.user.username);
      setCartItems(cartItemList ? cartItemList : []);
      cartItemList?.length > 0 &&
        setTotalPrice(
          cartItemList
            .map((item) => item.price)
            .reduce((prev, next) => prev + next)
        );
      updateCartBadge(
        authContext.user.username,
        badgeContext.setBadgeItemCount
      );
    };
    loadCart();
  }, [isFocused, refresh]);

  const refreshCart = () => {
    setRefresh(!refresh);
  };

  return cartItems && cartItems.length > 0 ? (
    <>
      <FlatList
        data={cartItems}
        numColumns={1}
        keyExtractor={(item, index) => item.name}
        renderItem={({ item }) => (
          <CartItem itemDetails={item} refreshCart={refreshCart} />
        )}
        style={styles.scrollView}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: Rs. {totalPrice}/-</Text>
      </View>
      <View style={styles.placeOrderContainer}>
        <Text style={styles.placeOrderText}>
          Place Order ({cartItems.length} items)
        </Text>
      </View>
    </>
  ) : (
    <View style={styles.emptyMessageContainer}>
      <Text style={styles.line1}>Cart empty</Text>
      <Text style={styles.line2}>
        Try adding some products from categories to your cart.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 5,
  },
  emptyMessageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    height: "80%",
  },
  line1: {
    fontSize: 26,
    lineHeight: 35,
    fontWeight: 500,
    color: colors.sb_gray_200,
  },
  line2: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
    color: colors.sb_gray_200,
  },
  totalContainer: {
    backgroundColor: colors.sb_gray_50,
    borderTopColor: colors.sb_gray_100,
    borderTopWidth: 1,
    minHeight: 50,
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  totalText: {
    fontSize: 26,
  },
  placeOrderContainer: {
    backgroundColor: colors.sb_green_100,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  placeOrderText: {
    fontSize: 22,
    fontWeight: 500,
  },
});

export default CartItemList;
