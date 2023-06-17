import { useEffect, useState } from "react";

function CategoryList({ navigation }) {
    const [categories, setCategories] = useState([]);
    
    function getCategories() {
        return [
          {
            name: "Dry fruits",
            createdDate: "1682559945",
            modifiedDate: "1682559945",
          },
          {
            name: "Spices",
            createdDate: "1682559967",
            modifiedDate: "1682559967",
          },
          {
            name: "Pulses, Grains & Lentils & something",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Snacks",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Cleaning",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Chocolate",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Fruits",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Vegetables",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Beauty",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Pharmacy",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Toiletries",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Utensils",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Beauty 2",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Pharmacy 2",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Toiletries 2",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
          {
            name: "Utensils 2",
            createdDate: "1686759945",
            modifiedDate: "1686759945",
          },
        ];
    }

    useEffect(() => {
        const list = getCategories();
        setCategories(list);
    }, []);
}
export default CategoryList;