import { FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";

import ProductItem from "./ProductItem";
import { listGenerator } from "../../../utility/generateListHelper";

function ProductList({ categoryDetails }) {
  const [products, setProducts] = useState([]);

  function getProducts() {
    return listGenerator(16, categoryDetails.name);
  }

  useEffect(() => {
    const list = getProducts();
    setProducts(list);
  }, []);

  return (
    <FlatList
      data={products}
      numColumns={1}
      keyExtractor={(item, index) => item.name}
      renderItem={({ item }) => <ProductItem productDetails={item} />}
      style={styles.scrollView}
    />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 5,
  },
});

export default ProductList;
