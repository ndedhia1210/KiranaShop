import React, { useState } from "react";
import { StyleSheet, Text, FlatList, Dimensions, View } from "react-native";

import Screen from "../components/Screen";
import { defaultStyles, colors } from "../styles";

const screenWidth = Dimensions.get("window").width;
const numColumns = 2;
const tileSize = screenWidth / numColumns;


const categories = [
  { id: 1, name: 'Dry Fruits' },
  { id: 2, name: 'Masala' },
  { id: 3, name: 'Lentils and Pulses' },
  { id: 4, name: 'Grains' },
  { id: 5, name: 'Cleaning' },
  { id: 6, name: 'Chocolates' },
  { id: 7, name: 'Category 1' },
  { id: 8, name: 'Category 2' },
  { id: 9, name: 'Category 3' },
  { id: 10, name: 'Category 4' },
  { id: 11, name: 'Category 5' },
  { id: 12, name: 'Category 6' },
  // Mock Categories. this will be replaced by an API call
];

function renderItem({ item }) {
  return (
    <View style={{ margin:10, backgroundColor: colors.sb_peach, height:tileSize, width: tileSize, borderRadius: 10 }}>
      <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>
        <Text>{item.name}</Text>
      </View>
    </View>
  )
}


function CategoryListScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text style={defaultStyle.text}>Categories</Text>
      <FlatList
        data={categories} 
        renderItem={renderItem} 
        ItemSeparatorComponent={ () => <View style={{height: 10, width: 10}}/>}
        numColumns={2} 
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: "100%",
    backgroundColor: colors.sb_blue_100,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  listContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default CategoryListScreen;
