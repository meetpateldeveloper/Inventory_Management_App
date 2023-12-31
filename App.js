import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./src/screens/LoginPage";
import SignupPage from "./src/screens/SignupPage";
import InventoryPage from "./src/screens/InventoryPage";
import Scanpage from "./src/screens/ScanPage";
//import SearchPage from "./src/screens/SearchPage";
import AddItemPage from "./src/screens/AddItemPage";
// import DashboardPage from "./src/screens/DashboardPage";
import MainMenu from "./src/components/MainMenu";
import UserProfilePage from "./src/screens/UserProfilePage";
import ItemDetail from "./src/screens/IteamDetail";

import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [userEmail, setUserEmail] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          initialParams={{ userEmail, setUserEmail }}
        />
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          initialParams={{ userEmail, setUserEmail }}
        />
        <Stack.Screen
          name="InventoryPage"
          component={InventoryPage}
          initialParams={{ userEmail, setUserEmail }}
        />
        <Stack.Screen
          name="Scanpage"
          component={Scanpage}
          initialParams={{ userEmail, setUserEmail }}
        />
        <Stack.Screen
          name="AddItemPage"
          component={AddItemPage}
          initialParams={{ userEmail, setUserEmail }}
        />


        <Stack.Screen
          name="ItemDetail"
          component={ItemDetail}
          
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
});
