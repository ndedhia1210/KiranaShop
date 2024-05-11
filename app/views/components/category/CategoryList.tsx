import { FlatList, StyleSheet } from "react-native";
import { Fragment, useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import useApi from "../../../api/hooks/useApi";
import category from "../../../api/category";
import { ComponentLoadingIndicator } from "../common/ComponentLoadingIndicator";

function CategoryList({ navigation }) {
  const getCategoriesApi = useApi(category.getCategories);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      const list = await getCategoriesApi.request();
      setCategories(list?.data?.categories || []);
    };
    loadCategories();
  }, []);

  return (
    <Fragment>
      <ComponentLoadingIndicator visible={getCategoriesApi.loading} />
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <CategoryItem categoryDetails={item} navigation={navigation} />
        )}
        style={styles.scrollView}
      />
    </Fragment>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 5,
  },
});
export default CategoryList;
