import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import ItemCard from "./ItemCard";
import * as SQLite from "expo-sqlite";
import { useNavigation, useIsFocused } from "@react-navigation/native";

const db = SQLite.openDatabase("newinventory.db");
const InventoryList = ({ userEmail, setUserEmail }) => {
  const [dataArray, setDataArray] = useState([]);
  const isFocused = useIsFocused();

  const renderItem = ({ item }) => {
    return <ItemCard data={item} />;
  };
  const fetchDataFromSQLite = () => {
    console.log(userEmail);
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM items WHERE email=?", // Replace 'users' with your table name
        // "DROP TABLE users",
        [userEmail],
        (txObj, { rows: { _array } }) => {
          // On success, set the fetched data to state
          setDataArray(_array);
          console.log("inventory list *******************")
        },
        (txObj, error) => {
          // Handle error while fetching data
          console.error("Error fetching data:", error);
        }
      );
    });
  };
  useEffect(() => {
    if (isFocused) {
      // e.g., refetch data, update state, etc.
      console.log("email: " + userEmail);
      fetchDataFromSQLite();
      console.log("Screen is focused, performing reload logic");
      
    }
  }, [isFocused]);

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
    height: "73%",
  },
});

export default InventoryList;
