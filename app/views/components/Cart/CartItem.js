import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React, { useContext } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../styles";
import { removeFromCart } from "../../../utility/cartUtils";
import AuthContext from "../../../auth/context";

export default function CartItem(props) {
  const authContext = useContext(AuthContext);
  const { itemDetails, refreshCart } = props;

  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => {
        console.log(itemDetails.name);
      }}
      underlayColor={colors.sb_orange_100}
    >
      <>
        <View style={styles.image}></View>
        <View>
          <Text style={styles.name}>{itemDetails.name}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.quantity}>500g</Text>
            <Text style={styles.price}>Rs. {itemDetails.price}/-</Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="delete"
          size={40}
          style={styles.deleteIcon}
          onPress={async () => {
            await removeFromCart(authContext.user.username, itemDetails);
            refreshCart();
          }}
        />
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 3,
    minHeight: 80,
    borderRadius: 5,
    backgroundColor: colors.sb_gray_100,
    flexDirection: "row",
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 500,
    color: colors.sb_dark,
    marginTop: 8,
    marginRight: 100,
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: colors.sb_blue_100,
    marginRight: 10,
    borderRadius: 5,
  },
  detailRow: {
    flex: 1,
    flexDirection: "row",
  },
  quantity: {
    fontSize: 17,
    marginTop: 7,
  },
  price: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 10,
    fontWeight: 600,
  },
  deleteIcon: {
    color: colors.sb_red_100,
    position: "absolute",
    right: 10,
    top: 20,
  },
});
