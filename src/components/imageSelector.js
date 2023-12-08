import React from "react";
import { View, Button, StyleSheet, Alert } from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const ImageSelector = (props) => {
  const verifyPermissions = async () => {
    const cameraResult = await ImagePicker.requestCameraPermissionsAsync();
    const libraryResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (
      cameraResult.status !== "granted" &&
      libraryResult.status !== "granted"
    ) {
      Alert.alert("Grant Permissions first to use the app", [{ text: "OK" }]);
      return false;
    } else {
      return true;
    }
  };
  const moveImageToPermanentStorage = async (imageUri) => {
    const fileName = imageUri.split("/").pop(); // Extract filename from URI
    const permanentPath = FileSystem.documentDirectory + fileName; // Define permanent path

    try {
      await FileSystem.moveAsync({
        from: imageUri,
        to: permanentPath,
      });
      return permanentPath; // Return the permanent path
    } catch (error) {
      console.error("Error moving image:", error);
      return null;
    }
  };

  const retrieveImageHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      console.log("We do not have permissions");
      return false;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    if (!image.canceled) {
      const permanentImagePath = await moveImageToPermanentStorage(
        image.assets[0].uri
      );
      props.onImageSelected(permanentImagePath);
    }
  };

  const takeImageHandler = async () => {
    console.log("takeImageHandler clicked");
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      console.log("We do not have permissions");
      return false;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (!image.canceled) {
      const permanentImagePath = await moveImageToPermanentStorage(
        image.assets[0].uri
      );
      props.onImageSelected(permanentImagePath);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button
          color="green"
          style={styles.button}
          title="Gallery"
          onPress={retrieveImageHandler}
        />
        <Button
          style={styles.button}
          title="Camera"
          onPress={takeImageHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    minHeight: 40,
  },
  button: {
    paddingVertical: 25,
    width: "100%",
  },
});

export default ImageSelector;
