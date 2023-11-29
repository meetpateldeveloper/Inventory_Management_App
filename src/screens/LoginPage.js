import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function LoginPage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./../../assets/logo_green.png")}
        style={styles.logoGreen}
      />
      <View style={{ marginTop: 30 }}>
        <Text>InventoSnap</Text>
        <Text>Inventory Management App</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text>Email</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>Password</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <TouchableOpacity style={{ marginTop: 20 }}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View
        style={{
          display: "flex",
          width: 300,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoGreen: {
    width: 200,
    height: 200,
  },
  emailInput: {
    width: 300,
    backgroundColor: "#fff",
    height: 35,
    borderRadius: 2,
    fontSize: 16,
  },
  signInButton: {
    width: 300,
    height: 40,
    backgroundColor: "#309612",
    borderRadius: 4,
  },
});
