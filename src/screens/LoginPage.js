import { StatusBar } from "expo-status-bar";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from "react-native-google-signin";
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

export default function LoginPage() {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ["email"], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId:
  //       "150607814875-lc6ms65chig8ou51o110r692u8nivche.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //   });
  // }, []);

  // const _signIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const { accessToken, idToken } = await GoogleSignin.signIn();
  //     setloggedIn(true);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       alert("Cancel");
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       alert("Signin in progress");
  //       // operation (f.e. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       alert("PLAY_SERVICES_NOT_AVAILABLE");
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };

  // const signOut = async () => {
  //   try {
  //     await GoogleSignin.revokeAccess();
  //     await GoogleSignin.signOut();
  //     setloggedIn(false);
  //     setuserInfo([]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
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
        ></TextInput>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.emailInput}
          secureTextEntry={true}
          placeholder="Password"
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{ marginTop: 40 }}
        onPress={() => navigation.navigate("InventoryPage")}
      >
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
      {/* <Text>or</Text>
      <View>
        <GoogleSigninButton
          style={{ width: 192, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this._signIn}
        />
      </View> */}
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
