import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import React, { useContext } from "react";
import { useToast } from "react-native-toast-notifications";
import { useNavigation } from "@react-navigation/native";

import { defaultStyles, colors } from "../../styles";
import { addToCart, updateCartBadge } from "../../../utility/cartUtils";
import AuthContext from "../../../auth/context";
import BadgeContext from "../../../context/badgeContext";

export default function ProductDetails({ details }) {
  const authContext = useContext(AuthContext);
  const badgeContext = useContext(BadgeContext);
  const toast = useToast();
  const navigation = useNavigation();

  const addItemToCart = async () => {
    await addToCart(authContext.user.username, details);
    toast.show(`${details.name} is added to your cart!`, {
      type: "success",
      placement: "top",
      duration: 2000,
      animationDuration: 200,
      animationType: "slide-in",
      renderToast: (toast) => (
        <View
          style={{
            padding: 15,
            backgroundColor: colors.sb_green_100,
            width: "80%",
            marginTop: 50,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ color: colors.sb_bright, fontSize: 16, fontWeight: 500 }}
          >
            {toast.message}
          </Text>
        </View>
      ),
    });
    navigation.pop();
    updateCartBadge(authContext.user.username, badgeContext.setBadgeItemCount);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.image}></View>
        <Text style={styles.title}>{details.name}</Text>
        <Text style={styles.price}>Price - Rs. {details.price}/-</Text>
        <Text style={styles.price}>Quantity - 500g</Text>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          This is an example description of the product. This is an example
          description of the product. This is an example description of the
          product. This is an example description of the product. This is an
          example description of the product. This is an example description of
          the product. This is an example description of the product. This is an
          example description of the product. This is an example description of
          the product. This is an example description of the product. This is an
          example description of the product.
        </Text>
        <View style={styles.spacer}></View>
      </ScrollView>
      <Button
        textColor={colors.sb_dark}
        buttonColor={colors.sb_yellow_100}
        style={styles.button}
        mode="contained"
        onPress={addItemToCart}
        labelStyle={styles.buttonLabel}
      >
        Add to cart
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    marginTop: 30,
    fontSize: 40,
    flexWrap: "wrap",
  },
  price: {
    fontWeight: 600,
    marginTop: 20,
    fontSize: 24,
    flexWrap: "wrap",
  },
  image: {
    height: 200,
    width: 200,
    backgroundColor: colors.sb_orange_200,
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 10,
  },
  descriptionTitle: {
    fontWeight: 600,
    marginTop: 20,
    fontSize: 24,
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    justifyContent: "center",
    height: 50,
    position: "absolute",
    bottom: 10,
    zIndex: 1,
    alignSelf: "center",
    width: "100%",
  },
  buttonLabel: {
    lineHeight: 36,
    fontSize: 20,
  },
  spacer: {
    height: 80,
  },
});
