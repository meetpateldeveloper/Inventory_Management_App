import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const auth = getAuth(app);

export default function LoginPage({ route }) {
  const { userEmail, setUserEmail } = route.params;
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [emailId, setEmailId] = useState("meet221197@gmail.com");
  const [password, setPassword] = useState("abcdefg");
  const [isError, setError] = useState(null);

  const signInUser = async () => {
    await signInWithEmailAndPassword(auth, emailId, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("Logged in " + user.email);
        setUserEmail(user.email);
        navigation.navigate("InventoryPage");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        setError(errorCode);
      });
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoWrapper}>
        <Image
          source={require("./../../assets/logo_green.png")}
          style={styles.logoGreen}
        />
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontSize: 40 }}>InventoSnap</Text>
          <Text style={{ fontSize: 13, marginTop: -10 }}>
            Inventory Management App
          </Text>
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.emailInput}
          placeholder="Email Address"
          value={emailId}
          onChangeText={(e) => setEmailId(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.emailInput}
          secureTextEntry={true}
          placeholder="Password"
          value={password}
          onChangeText={(e) => setPassword(e)}
        ></TextInput>
      </View>
      <Text style={{ color: "red" }}>{isError}</Text>
      <TouchableOpacity style={{ marginTop: 40 }} onPress={signInUser}>
        <View style={styles.signInButton}>
          <Text style={{ color: "white", fontSize: 15 }}>Sign In</Text>
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
          marginTop: 10,
        }}
      >
        <TouchableOpacity>
          <Text style={styles.label}>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignupPage")}>
          <Text style={styles.label}>Sign Up</Text>
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
    backgroundColor: "#e6e6e6",
  },
  logoWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 110,
    marginBottom: 120,
  },
  logoGreen: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  emailInput: {
    width: 300,
    padding: 5,
    backgroundColor: "#fff",
    height: 37,
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
    fontSize: 13,
  },
});

const openNewTable = async () => {
  const db = SQLite.openDatabase("myDatabase.db");
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS userInfo (userid INTEGER PRIMARY KEY, firstName TEXT,lastName TEXT)"
    );
  });
  const info = await FileSystem.getInfoAsync(db._db._name);
  console.log("openNewTable ran");
};

const createNewTable = async () => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS userInfo (userid INTEGER PRIMARY KEY, firstName TEXT,lastName TEXT)"
    );
  });
};

const readTable = async () => {
  const db = SQLite.openDatabase("myDatabase.db");
  db.transaction((tx) => {
    tx.executeSql(
      "SELECT * FROM userInfo",
      [],
      (_, { rows }) => console.log(rows._array),
      (error) => console.log(error)
    );
  });
};

const createNewUser = async () => {
  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO userInfo (userid,firstName,lastName) VALUES (?)",
      "('abcdefg','Meet','Patel')",
      [],
      (_, { rows }) => console.log(rows._array),
      (error) => console.log(error)
    );
  });
  const info = await FileSystem.getInfoAsync(db._db._name);
  console.log(info);
};
