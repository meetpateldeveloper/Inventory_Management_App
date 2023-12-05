import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SignupPage() {
  return (
    <View style={styles.signupPage}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Password:</Text>
        <TextInput style={styles.emailInput} secureTextEntry={true}></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Re-enter Password:</Text>
        <TextInput style={styles.emailInput} secureTextEntry={true}></TextInput>
      </View>
      <TouchableOpacity style={{ marginTop: 25 }}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white" }}>Sign Up</Text>
        </View>
      </TouchableOpacity>
      <Text>or</Text>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupPage: {
    display: "flex",
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
  emailInput: {
    marginTop: 5,
    width: 300,
    padding: 5,
    backgroundColor: "#fff",
    height: 35,
    borderRadius: 2,
    fontSize: 16,
  },
  signInButton: {
    width: 300,
    height: 40,
    backgroundColor: "#458b01",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
  },
});
