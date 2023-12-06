import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginPage from "./src/screens/LoginPage";
import SignupPage from "./src/screens/SignupPage";
import InventoryPage from "./src/screens/InventoryPage";
import AddItemPage from "./src/screens/AddItemPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="InventoryPage" component={InventoryPage} />
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
