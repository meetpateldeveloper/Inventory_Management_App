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
import * as FileSystem from 'expo-file-system';

const db = SQLite.openDatabase("inventoryneww.db");

export default function AddItemPage({ route }) {
  const { userEmail, setUserEmail } = route.params;
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState();
  const [barcodeId, setBarcodeId] = useState("123456");
  const [title, setTitle] = useState("chair");
  const [quantity, setquantity] = useState("20");
  const [category, setCategory] = useState("furniture");
  const [price, setPrice] = useState("200");
  const [imageLocation, setImageLocation] = useState("./icon.png");
  const [emailf, setEmailf] = useState("");

  const imageSelectorHandle = async (imagePath) => {
    try {
      const fileName = emailf+barcodeId+'.jpg'; // Generate a unique file name
      const newPath = FileSystem.documentDirectory + fileName;
      console.log("New fiel path : "+newPath);
  
      await FileSystem.copyAsync({
        from: imagePath,
        to: newPath,
      });
  
      setSelectedImage(newPath);
    } catch (error) {
      console.error('Error saving image:', error);
    }
  };
  

  const addItemHandler = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO items (barcodeid,title,category,price,imageURL) values (?,?,?,?,?)",
        [barcodeId, title, category, price, selectedImage],
        (txObj, resultset) => {
          console.log(resultset);
          setPrice("");
          setCategory("");
          setTitle("");
          setSelectedImage("");
        },
        (txObj, error) => console.log(error)
      );
      tx.executeSql(
        "INSERT INTO inventory (barcodeid,quantity,email) values (?,?,?)",
        [barcodeId, quantity, userEmail],
        (txObj, resultset) => {
          console.log(resultset);
          setEmailf("");
          setquantity("");
          setBarcodeId("");
        },
        (txObj, error) => console.log(error)
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MainMenu activeScreen="AddItem" />
      <View style={styles.contentContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5", // Light gray background
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#008000", // Dark green text color
  },
  emailInput: {
    marginTop: 5,
    marginBottom: 10,
    width: "100%", // Full width input
    padding: 10,
    backgroundColor: "#FFFFFF", // White input background
    borderRadius: 8,
    fontSize: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#333", // Dark gray label color
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button1: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#008000",
    width: "45%",
    alignItems: "center",
  },
  text1: {
    color: "#008000",
    fontSize: 16,
    fontWeight: "bold",
  },
  button2: {
    backgroundColor: "#008000",
    padding: 15,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  text2: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});