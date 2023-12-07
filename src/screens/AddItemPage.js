import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image, // Import from react-native
} from "react-native";

import MainMenu from "../components/MainMenu";
import React, { useState } from "react";
import ImageSelector from "../components/imageSelector";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("newinventory.db");

export default function AddItemPage() {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState();
  const [barcodeId, setBarcodeId] = useState("123456");
  const [title, setTitle] = useState("chair");
  const [quantity, setquantity] = useState("20");
  const [category, setCategory] = useState("furniture");
  const [price, setPrice] = useState("200");
  const [imageLocation, setImageLocation] = useState();
  const [emailf, setEmailf] = useState("meet221197@gmail.com");
  const imageSelectorHandle = (imagePath) => {
    setSelectedImage(imagePath);
  };

  const addItemHandler = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO items (barcodeid,title,quantity,category,price,email) values (?,?,?,?,?,?)",
        [barcodeId, title, quantity, category, price, emailf],
        (txObj, resultset) => {
          // console.log(resultset);
          setEmailf("");
          setPrice("");
          setCategory("");
          setquantity("");
          setTitle("");
          setImageLocation("");
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  return (
    <View style={styles.container}>
      <MainMenu activeScreen="AddItem" />
      <Text style={styles.headText}>Add New Item</Text>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.emailInput}
          value={title}
          onChangeText={(e) => setTitle(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Quantity:</Text>
        <TextInput
          style={styles.emailInput}
          value={quantity}
          onChangeText={(e) => setquantity(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Barcode:</Text>
        <TextInput
          style={styles.emailInput}
          value={barcodeId}
          onChangeText={(e) => setBarcodeId(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={styles.emailInput}
          value={category}
          onChangeText={(e) => setCategory(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.emailInput}
          value={price}
          onChangeText={(e) => setPrice(e)}
        ></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Image:</Text>
        <ImageSelector onImageSelected={imageSelectorHandle} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("DashboardPage")}
        >
          <Text style={styles.text1}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={addItemHandler}>
          <Text style={styles.text2}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headText: {
    paddingTop: 10,
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
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
  label: {
    marginTop: 5,
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 8,
  },
  button1: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 4,
    width: "50%",
    borderWidth: 1,
    borderColor: "#008000",
    margin: 5,
    alignItems: "center",
  },
  text1: {
    color: "#008000",
    textAlign: "center",
  },
  button2: {
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 4,
    width: "50%",
    margin: 5,
    alignItems: "center",
  },
  text2: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});