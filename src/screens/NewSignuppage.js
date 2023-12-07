import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";
import {
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import * as SQLite from "expo-sqlite";

const auth = getAuth(app);
const navigation = useNavigation();
// const db = SQLite.openDatabase("inventory.db");

export default function SignupPage() {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [isError, setError] = useState(null);

  const PasswordChecker = () => {
    if (password == "") {
      return;
    }
    if (password == secondPassword) {
      return <Text style={{ color: "green" }}>Password Matches</Text>;
    } else {
      return;
    }
  };

  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // setUserId(user.email);
        console.log("hello");
        // console.log(user.email);
        console.log("Signup Successful");
        // db.transaction((tx) => {
        //   tx.executeSql(
        //     "INSERT INTO users (userid,firstName,lastName) values (?,?,?)",
        //     [userId, firstName, lastName],
        //     (txObj, resultset) => {
        //       console.log(resultset);
        //       setFirstName("");
        //       setLastName("");
        //     },
        //     (txObj, error) => console.log(error)
        //   );
        // });
        // navigation.navigate("LoginPage");
      })
      .catch((error) => {
        console.log("signup failed");
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // useEffect(() => {
  //   db.transaction((tx) => {
  //     tx.executeSql(
  //       "CREATE TABLE IF NOT EXISTS users (userid INTEGER PRIMARY KEY, firstName TEXT,lastName TEXT)"
  //     );
  //   }, []);
  // });

  return (
    <View style={styles.signupPage}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.emailInput}
          value={firstName}
          onChangeText={(e) => setFirstName(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.emailInput}
          value={lastName}
          onChangeText={(e) => setLastName(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.emailInput}
          value={email}
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.emailInput}
          autoCapitalize="none"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.label}>Re-enter Password:</Text>
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          style={styles.emailInput}
          value={secondPassword}
          onChangeText={(text) => setSecondPassword(text)}
        ></TextInput>
      </View>
      <PasswordChecker />
      <Text style={{ color: "red" }}>{isError}</Text>
      <TouchableOpacity style={{ marginTop: 25 }} onPress={signUp}>
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
    fontSize: 14,
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
    fontSize: 14,
  },
});
