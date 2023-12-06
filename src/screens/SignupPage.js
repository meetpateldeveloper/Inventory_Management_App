import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Button } from "selenium-webdriver";

export default function SignupPage() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate("LoginPage");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
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
        <Text style={styles.label}>Email:{email}</Text>
        <TextInput
          style={styles.emailInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.emailInput}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Re-enter Password:</Text>
        <TextInput style={styles.emailInput} secureTextEntry={true}></TextInput>
      </View>
      {/* <TouchableOpacity style={{ marginTop: 25 }}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white" }}>Sign Up</Text>
        </View>
      </TouchableOpacity> */}
      <Button type="submit"></Button>
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
