import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../../styles";

function ProductItem(props) {
  const { productDetails } = props;
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => {
        navigation.navigate("ProductDetails", { productDetails });
      }}
      underlayColor={colors.sb_orange_100}
    >
      <>
        <View style={styles.image}></View>
        <View style={styles.detailRowContainer}>
          <Text style={styles.name}>{productDetails.name}</Text>
          <View style={styles.detailRow}>
            <Text style={styles.quantity}>500g</Text>
            <Text style={styles.price}>Rs. {productDetails.price}/-</Text>
          </View>
        </View>
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 3,
    height: 80,
    borderRadius: 5,
    backgroundColor: colors.sb_orange_200,
    flexDirection: "row",
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.sb_dark,
    marginTop: 8,
  },
  image: {
    height: 60,
    width: 60,
    backgroundColor: colors.sb_gray_100,
    marginRight: 10,
    borderRadius: 5,
  },
  detailRowContainer: {
    flex: 1,
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
    fontSize: 22,
    marginTop: 5,
    marginLeft: "auto",
    fontWeight: "600",
  },
});

export default ProductItem;
