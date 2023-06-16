import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import React from "react";
import { colors } from "../../styles";

export default function CategoryItem(props) {
  const { categoryDetails, navigation } = props;
  return (
    <TouchableHighlight
      style={styles.item}
      onPress={() => navigation.navigate("Productlist", { categoryDetails })}
      underlayColor={colors.sb_orange_100}
    >
      <View>
        <Text style={styles.text}>{categoryDetails.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 3,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: colors.sb_orange_200,
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    color: colors.sb_dark,
    textAlign: "center",
    lineHeight: 30,
  },
});
