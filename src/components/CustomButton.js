import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CustomButton = ({ iconName, title, onPress, active }) => {
  return (
    <TouchableOpacity
      style={[styles.button, active ? styles.activeButton : {}]}
      onPress={onPress}
    >
      <Icon
        name={iconName}
        style={{ marginTop: 3 }}
        size={15}
        color="#008000"
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    borderColor: "grey",
    // borderRadius: 4,
    height: 50,
  },
  activeButton: {
    backgroundColor: "#a9f5bd", // change this to the color you want for the active state
  },
  buttonText: {
    paddingTop: 0,
    fontSize: 11, // this will make the text smaller
    fontWeight: "bold",
  },
});

export default CustomButton;
