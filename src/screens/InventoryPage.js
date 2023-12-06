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

const auth = getAuth();

export default function InventoryPage() {
  const [isSignedIn, setSignInStatus] = useState(true);
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

  return (
    <View style={styles.container}>
      <MainMenu activeScreen="InventoryList" />
      <TouchableOpacity
        style={{
          width: 300,
          height: 40,
          backgroundColor: "#458b01",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={signOutHandle}
      >
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <Text style={styles.headText}>Inventory List</Text>
      <InventoryList />
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
