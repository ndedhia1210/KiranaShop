import { FlatList, StyleSheet, View, TextInput, Text } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import BottomSheet from "@gorhom/bottom-sheet";

import ProductItem from "./ProductItem";
import { colors } from "../../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BottomSheetPopup } from "../common";
import product from "../../../api/product";
import useApi from "../../../api/hooks/useApi";
import { ComponentLoadingIndicator } from "../common/ComponentLoadingIndicator";

enum SORT_TYPE {
  NO_SORT = "No sorting",
  BY_NAME_ASC = "Sort by name ascending",
  BY_NAME_DESC = "Sort by name descending",
}

enum SORT_TYPE_ICON {
  NO_SORT = "sort",
  BY_NAME_ASC = "sort-alphabetical-ascending",
  BY_NAME_DESC = "sort-alphabetical-descending",
}

function ProductList({ categoryDetails }) {
  const searchRef = useRef(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const getProductsByCategoryApi = useApi(product.getProductsByCategory);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchText, setSearchText] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSortOption, setSelectedSortOption] = useState<number>();

  const sortOptions = [
    { label: SORT_TYPE.NO_SORT, icon: SORT_TYPE_ICON.NO_SORT },
    { label: SORT_TYPE.BY_NAME_ASC, icon: SORT_TYPE_ICON.BY_NAME_ASC },
    { label: SORT_TYPE.BY_NAME_DESC, icon: SORT_TYPE_ICON.BY_NAME_DESC },
  ];

  useEffect(() => {
    const loadProducts = async () => {
      const list = await getProductsByCategoryApi.request(categoryDetails.id);
      setProducts(list?.data?.products || []);
      setFilteredProducts(list?.data?.products || []);
      setSearchText("");
      setSelectedSortOption(0);
    };
    loadProducts();
  }, []);

  useEffect(() => {
    const option = sortOptions.at(selectedSortOption);
    const filteredAndSorted = products
      .filter(
        (p) =>
          p.name.toLowerCase().indexOf(searchText.trim().toLowerCase()) > -1
      )
      .sort((a, b) => {
        switch (option.label) {
          case SORT_TYPE.BY_NAME_ASC:
            return a.name > b.name ? 1 : -1;
          case SORT_TYPE.BY_NAME_DESC:
            return a.name < b.name ? 1 : -1;
          case SORT_TYPE.NO_SORT:
            return;
        }
      });
    setFilteredProducts([...filteredAndSorted]);
  }, [searchText, selectedSortOption]);

  const openBottomSheet = () => {
    setIsOpen(true);
    bottomSheetRef.current?.expand();
  };

  const onOptionSelect = (index: number) => {
    setSelectedSortOption(index);
    bottomSheetRef.current?.close();
  };

  const listItem = useCallback(
    ({ item }) => <ProductItem productDetails={item} />,
    []
  );

  const keyExtractor = useCallback(
    // (item, index) => (item.name as string).concat(index.toString()),
    (item) => item.id,
    []
  );

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            height: 50,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "84%",
              height: 50,
              borderRadius: 10,
              borderWidth: 0.2,
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              padding: 10,
            }}
          >
            <MaterialCommunityIcons
              name="magnify"
              color={colors.sb_gray_300}
              size={35}
            />
            <TextInput
              ref={searchRef}
              placeholder="search products here..."
              style={{ width: "82%", height: 50 }}
              value={searchText}
              onChangeText={(text) => {
                setSearchText(text);
              }}
            />
            {searchText === "" ? null : (
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  searchRef.current.clear();
                  setSearchText("");
                }}
              >
                <MaterialCommunityIcons
                  name="close"
                  color={colors.sb_gray_300}
                  size={30}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            style={{ marginRight: 14 }}
            onPress={() => openBottomSheet()}
          >
            <MaterialCommunityIcons
              name={sortOptions.at(selectedSortOption).icon}
              color={colors.sb_gray_300}
              size={35}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ComponentLoadingIndicator visible={getProductsByCategoryApi.loading} />
      <FlatList
        data={filteredProducts}
        numColumns={1}
        keyExtractor={keyExtractor}
        renderItem={listItem}
        style={styles.scrollView}
      />
      {isOpen && (
        <BottomSheetPopup ref={bottomSheetRef}>
          <Text style={styles.radioLabel}>Select sort option</Text>
          {sortOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.selectedPriceQuantityContainer}
              onPress={() => onOptionSelect(index)}
            >
              <View style={styles.wrapper}>
                <View style={styles.radio}>
                  {selectedSortOption === index ? (
                    <View style={styles.radioBg}></View>
                  ) : null}
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name={option.icon}
                  color={colors.sb_gray_300}
                  size={35}
                />
                <Text style={{ marginLeft: 10 }}>{option.label}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </BottomSheetPopup>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 5,
    marginTop: 10,
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
});

export default ProductList;
