import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import ItemCard from "./ItemCard";

const InventoryList = () => {
  const [dataArray, setDataArray] = useState([]);

  // Use an array of objects for the dataArray state
  useEffect(() => {
    setDataArray([
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Readasfsfsdfsdfsdfsfsf",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Readadadsadad",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "3",
      },
      {
        imageURL: "https://farm2.staticflickr.com/1916/31543269748_10f0bf9524_b.jpg",
        title: "Red Read",
        quantity: "9",
      },
    ]);
  }, []);

  const renderItem = ({ item }) => {
      return <ItemCard data={item} />;
  };

  return (
    <View style={styles.CardListWrapper}>
      <FlatList
        data={dataArray}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CardListWrapper: {
    display: "flex",
    alignItems: "center",
    marginBottom: 1,
    height: "65%",
  },
});

export default InventoryList;
