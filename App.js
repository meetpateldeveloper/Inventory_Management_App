import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginPage from "./src/screens/LoginPage";
import InventoryPage from "./src/screens/InventoryPage";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginPage />
      {/*<InventoryPage/>*/}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e3e3",
    alignItems: "center",
    justifyContent: "center",
  },
});
