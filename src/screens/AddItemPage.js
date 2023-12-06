import { StatusBar } from "expo-status-bar";
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

export default function AddItemPage() {
  
    const [selectedImage, setSelectedImage] = useState();
    imageSelectorHandle = imagePath => {
        setSelectedImage(imagePath);
    }
  

  return (
    <View style={styles.container}>
      <MainMenu activeScreen="AddItem" />
      <Text style={styles.headText}>Add New Item</Text>

      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Quantity:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Barcode:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Category:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Description:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>
      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Price:</Text>
        <TextInput style={styles.emailInput}></TextInput>
      </View>

      <View style={{ marginTop: 5, paddingLeft: 20 }}>
        <Text style={styles.label}>Image:</Text>
        <ImageSelector onImageSelected={imageSelectorHandle} />
      </View>
      

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => console.log("Cancel Pressed")}
        >
          <Text style={styles.text1}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => console.log("Save Pressed")}
        >
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
