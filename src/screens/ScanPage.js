import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import MainMenu from "../components/MainMenu";
import * as SQLite from "expo-sqlite";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export default function ScanPage({ route }) {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { userEmail, setUserEmail } = route.params;
  const [userData, setUserData] = useState([]);
  const db = SQLite.openDatabase("inventoryneww.db");

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);

    console.log(userEmail);
    console.log(data);
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM items WHERE email=? AND barcodeid=?",
        [userEmail, data], // Pass parameters as an array
        (txObj, { rows: { _array } }) => {
          // On success, set the fetched data to state
          console.log("datafetched");
          console.log("Data fetched successfully:", _array);
          setUserData(_array);
          navigation.navigate("ItemDetail", { dataArray: _array });
        },
        (txObj, error) => {
          // Handle error while fetching data
          console.error("Error fetching data:", error);
        }
      );
    });
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
