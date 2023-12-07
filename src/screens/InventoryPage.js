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
import { useNavigation } from "@react-navigation/native";
import * as SQLite from "expo-sqlite";

const auth = getAuth();

const db = SQLite.openDatabase("newinventory.db");

export default function InventoryPage() {
  const [isSignedIn, setSignInStatus] = useState(true);
  const [userData, setUserData] = useState([]);
  const navigation = useNavigation();
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
  const fetchDataFromSQLite = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM users", // Replace 'users' with your table name
        [],
        (txObj, { rows: { _array } }) => {
          // On success, set the fetched data to state
          setUserData(_array);
        },
        (txObj, error) => {
          // Handle error while fetching data
          console.error("Error fetching data:", error);
        }
      );
    });
  };
  useEffect(() => {
    fetchDataFromSQLite();
  }, []);

  return (
    <View style={styles.container}>
      <MainMenu activeScreen="InventoryList" />

      <Text style={styles.headText}>Inventory List</Text>
      {/* <InventoryList /> */}
      <View>
        <Text>Data from SQLite:</Text>
        {userData.map((user) => (
          <View key={user.id}>
            <Text>User ID: {user.userid}</Text>
            <Text>Name: {user.firstName}</Text>
            <Text>Name: {user.lastName}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => console.log("Cancel Pressed")}
        >
          <Text style={styles.text1}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => console.log("Save Pressed")}
        >
          <Text style={styles.text2}>Save</Text>
        </TouchableOpacity>
      </View>
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
