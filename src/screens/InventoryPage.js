import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import MainMenu from "../components/MainMenu";
import InventoryList from "../components/InventoryList";
import React, { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";

const auth = getAuth();

const db = SQLite.openDatabase("inventoryneww.db");

export default function InventoryPage({ route }) {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const { userEmail, setUserEmail } = route.params;
  const [isSignedIn, setSignInStatus] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (isFocused) {
      // e.g., refetch data, update state, etc.
      console.log("email: " + userEmail);
      // fetchDataFromSQLite();
      console.log("Screen is focused, performing reload logic");
    }
  }, [isFocused]);

  // const fetchDataFromSQLite = () => {
  //   console.log("in db" + userEmail);
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "SELECT * FROM items INNER JOIN inventory ON inventory.barcodeid = items.barcodeid WHERE inventory.email=?", // Replace 'users' with your table name
  //       [userEmail],
  //       (txObj, { rows: { _array } }) => {
  //         // On success, set the fetched data to state
  //         console.log("in db data" + _array[0].barcodeid);
  //         setUserData(_array);
  //       },
  //       (txObj, error) => {
  //         // Handle error while fetching data
  //         console.error("Error fetching data:", error);
  //       }
  //     );
  //   });
  // };

  const signOutHandle = async () => {
    if (isSignedIn) {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Sign out successful");
          setSignInStatus(false);
          navigation.navigate("LoginPage");
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };

  return (
    <View style={styles.container}>
      <MainMenu activeScreen="InventoryList" userEmail={userEmail} />
      <Text style={styles.headText}>Inventory List</Text>
      <InventoryList userEmail={userEmail} setUserEmail={setUserEmail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headText: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 8,
  },

  button1: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 4,
    width: "50%",
    borderWidth: 1,
    borderColor: "#008000",
    margin: 5,
    alignItems: "center",
  },
  text1: {
    color: "#008000",
    textAlign: "center",
  },
  button2: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 4,
    width: "50%",
    margin: 5,
    alignItems: "center",
  },
  text2: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});
