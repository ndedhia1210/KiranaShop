import React from "react";
import { StyleSheet, View } from "react-native";

import colors from "../../styles/colors";
import { Price } from "./Price";
import { Quantity } from "./Quantity";
import { Tag } from "./Tag";
import { QUANTITY_UNITS, TAG_TYPE } from "../../../constants/enums";

interface props {
  newPrice: number | string;
  oldPrice?: number | string;
  quantity: number | string;
  quantityUnit: QUANTITY_UNITS;
  tagType?: TAG_TYPE;
  tagContent?: string;
}

export function PriceQuantityOption({
  newPrice,
  oldPrice = undefined,
  quantity,
  quantityUnit,
  tagType = undefined,
  tagContent = undefined,
}) {
  return (
    <View style={styles.rightSide}>
      <View>
        <View style={styles.priceContainer}>
          <Price value={newPrice} size={26} />
          {oldPrice && (
            <Price
              style={styles.oldPrice}
              value={oldPrice}
              size={20}
              color={colors.sb_red_100}
              striked={true}
            />
          )}
        </View>
        <Quantity value={quantity} unit={quantityUnit} size={20} />
      </View>
      {tagType && (
        <Tag
          type={tagType}
          content={tagContent}
          size={18}
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: 10,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rightSide: {
    flex: 1,
    flexDirection: "row",
  },
  priceContainer: {
    flexDirection: "row",
  },
  oldPrice: {
    marginLeft: 8,
    alignSelf: "flex-end",
  },
});
