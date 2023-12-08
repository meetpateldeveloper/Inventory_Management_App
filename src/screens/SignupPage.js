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
import * as SQLite from "expo-sqlite";

const auth = getAuth(app);
const db = SQLite.openDatabase("inventoryneww.db");

export default function SignupPage() {
  const navigation = useNavigation();
  const [userId, setUserId] = useState("null");
  const [firstName, setFirstName] = useState("meet");
  const [lastName, setLastName] = useState("patel");
  const [email, setEmail] = useState("meetbiochemist@gmail.com");
  const [password, setPassword] = useState("abcdefg");
  const [secondPassword, setSecondPassword] = useState("abcdefg");
  const [isError, setError] = useState(null);
  const [userData, setUserData] = useState([]);

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
    // if (email == "") {
    //   return <Text>Please Enter Email</Text>;
    // }
    // if (password == "") {
    //   return <Text>Please Enter Password</Text>;
    // } else {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // setUserId(user.stsTokenManager.uid);
        db.transaction((tx) => {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS users (userid TEXT PRIMARY KEY, firstName TEXT,lastName TEXT)",
            [],
            (txObj, resultSet) => {
              // Success callback
              console.log("users table created successfully");
            },
            (txObj, error) => {
              // Error callback
              console.log("Error creating users table:", error);
            }
          );
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS items (barcodeid TEXT PRIMARY KEY, title TEXT NOT NULL, category TEXT, price INT,imageURL TEXT, email TEXT, FOREIGN KEY (email) REFERENCES users(userid))",
            [],
            (txObj, resultSet) => {
              // Success callback
              console.log("items table created successfully");
            },
            (txObj, error) => {
              // Error callback
              console.log("Error creating items table:", error);
            }
          );
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS inventory (inventory_id INTEGER PRIMARY KEY AUTOINCREMENT, barcodeid TEXT NOT NULL, email TEXT NOT NULL, quantity INT NOT NULL)",
            [],
            (txObj, resultSet) => {
              // Success callback
              console.log("Inventory table created successfully");
            },
            (txObj, error) => {
              // Error callback
              console.log("Error creating inventory table:", error);
            }
          );
          tx.executeSql(
            "INSERT INTO users (userid,firstName,lastName) values (?,?,?)",
            [email, firstName, lastName],
            (txObj, resultset) => {
              console.log(resultset);
              // setFirstName("");
              // setLastName("");
            },
            (txObj, error) => console.log(error)
          );
        });
        // ...
        console.log("Signup Successful");
        navigation.navigate("LoginPage");
      })
      .catch((error) => {
        console.log("signup failed");
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    // }
  };

  const deleteUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM users WHERE userid=?",
        [email],
        (txObj, resultset) => {
          console.log(resultset);
          setFirstName("");
          setLastName("");
        },
        (txObj, error) => console.log(error)
      );
    });
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
      <TouchableOpacity style={{ marginTop: 25 }} onPress={deleteUser}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white" }}>Delete user</Text>
        </View>
      </TouchableOpacity>
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
