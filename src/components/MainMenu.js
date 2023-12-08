import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import CustomButton from "./CustomButton"; // adjust the path according to your project structure
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import { getAuth, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("newinventory.db");
const auth = getAuth();

const MainMenu = ({ activeScreen, userEmail }) => {
  const [isSignedIn, setSignInStatus] = useState(true);
  const [fName, setfName] = useState([]);
  const [lName, setlName] = useState("Shaji");

  const navigation = useNavigation();
  const fetchUserInfo = async () => {
    console.log(userEmail);
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT firstName,lastName FROM users WHERE userid=?", // Replace 'users' with your table name
        ["meet221197@gmail.com"],
        (txObj, { rows: { _array } }) => {
          // On success, set the fetched data to state

          console.log("First name is:");
          setfName(_array);
          console.log(fName[0].lastName);
        },
        (txObj, error) => {
          // Handle error while fetching data
          console.error("Error fetching data:", error);
        }
      );
    });
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

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
    <View>
      <View style={styles.main}>
        {/* <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('UserProfilePage')}}> */}
        <Text style={{ fontSize: 10 }}>
          {/* Signed in as: {fName[0].firstName} {fName[0].lastName} */}
        </Text>
        <Icon name="user-circle" size={37} color="#008000" />
        {/* </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            width: 60,
            height: 40,
            backgroundColor: "#458b01",
            borderRadius: 4,
            marginLeft: 15,
            marginRight: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={signOutHandle}
        >
          <Text
            style={{
              color: "white",
            }}
          >
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {/*<CustomButton iconName="home" title="Dashboard" onPress={() => navigation.navigate('DashboardPage')} active={activeScreen === 'Dashboard'} />*/}
        <CustomButton
          iconName="list"
          title="Inventory List"
          onPress={() => navigation.navigate("InventoryPage")}
          active={activeScreen === "InventoryList"}
        />
        <CustomButton
          iconName="plus"
          title="Add Item"
          onPress={() => navigation.navigate("AddItemPage")}
          active={activeScreen === "AddItem"}
        />
        {/*<CustomButton iconName="search" title="Search" onPress={() => navigation.navigate('SearchPage')} active={activeScreen === 'Search'} />*/}
        <CustomButton
          iconName="barcode"
          title="Scan Barcode"
          onPress={() => navigation.navigate("Scanpage")}
          active={activeScreen === "ScanBarcode"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 2,
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    marginTop: 10, // remove this when adding profile or back button
    borderColor: "grey",
  },
  main: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "flex-end", // If you want the content inside styles.main to be aligned at the bottom
    justifyContent: "flex-end", // Align styles.main to the right
  },
  button: {
    alignItems: "center",
  },
});

export default MainMenu;
