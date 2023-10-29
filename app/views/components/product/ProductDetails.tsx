import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import React, { useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { colors } from "../../styles";
import {
  QUANTITY_UNITS,
  TAG_TYPE,
  BottomSheetPopup,
  PriceQuantityOption,
} from "../common";

function ProductDetails({ details }) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRadioOption, setSelectedRadioOption] = useState<number>(0);

  const openBottomSheet = () => {
    setIsOpen(true);
    bottomSheetRef.current?.expand();
  };

  const onOptionSelect = (index: number) => {
    setSelectedRadioOption(index);
    bottomSheetRef.current?.close();
  };

  const priceQuantityOptions = [
    {
      newPrice: 335,
      oldPrice: 350,
      quantity: 500,
      quantityUnit: QUANTITY_UNITS.GM,
      tagType: TAG_TYPE.BEST_VALUE,
    },
    {
      newPrice: 650,
      oldPrice: 700,
      quantity: 1,
      quantityUnit: QUANTITY_UNITS.KG,
      tagType: TAG_TYPE.POPULAR,
    },
    {
      newPrice: 900,
      oldPrice: 1050,
      quantity: 2,
      quantityUnit: QUANTITY_UNITS.KG,
    },
    {
      newPrice: 1050,
      oldPrice: 1400,
      quantity: 4,
      quantityUnit: QUANTITY_UNITS.KG,
      tagType: TAG_TYPE.CUSTOM,
      tagContent: "25% off!",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.image}></View>
        <Text style={styles.title}>{details.name}</Text>
        <Text style={styles.label}>Select packet size</Text>
        <TouchableOpacity
          style={styles.selectedPriceQuantityContainer}
          onPress={openBottomSheet}
        >
          <View style={styles.leftSide}>
            <MaterialCommunityIcons
              name="chevron-down"
              color={colors.sb_dark}
              size={35}
            />
          </View>
          <PriceQuantityOption
            {...priceQuantityOptions.at(selectedRadioOption)}
          />
        </TouchableOpacity>
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
        labelStyle={styles.buttonLabel}
      >
        Add to cart (Rs. {details.price}/-)
      </Button>
      {isOpen && (
        <BottomSheetPopup ref={bottomSheetRef}>
          <Text style={styles.radioLabel}>Select packet size</Text>
          {priceQuantityOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.selectedPriceQuantityContainer}
              onPress={() => onOptionSelect(index)}
            >
              <View style={styles.wrapper}>
                <View style={styles.radio}>
                  {selectedRadioOption === index ? (
                    <View style={styles.radioBg}></View>
                  ) : null}
                </View>
              </View>
              <PriceQuantityOption {...option} />
            </TouchableOpacity>
          ))}
        </BottomSheetPopup>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  radio: {
    width: 24,
    height: 24,
    borderColor: colors.sb_dark,
    borderRadius: 12,
    borderWidth: 1,
    margin: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioBg: {
    backgroundColor: colors.sb_dark,
    width: 18,
    height: 18,
    margin: 2,
    borderRadius: 12,
  },
  container: {
    paddingHorizontal: 20,
    height: "100%",
  },
  title: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 40,
    flexWrap: "wrap",
  },
  label: {
    fontWeight: "600",
    lineHeight: 40,
    fontSize: 18,
  },
  radioLabel: {
    marginTop: 10,
    fontWeight: "400",
    lineHeight: 50,
    fontSize: 22,
  },
  selectedPriceQuantityContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 6,
    borderColor: colors.sb_gray_200,
    borderStyle: "solid",
    borderWidth: 1,
    marginVertical: 8,
  },
  leftSide: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "600",
    marginTop: 10,
    lineHeight: 40,
    fontSize: 18,
  },
  description: {
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

export default ProductDetails;
