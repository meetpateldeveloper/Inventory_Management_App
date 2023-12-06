import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = ({ iconName, title, onPress, active }) => {
  return (
    <TouchableOpacity style={[styles.button, active ? styles.activeButton : {}]} onPress={onPress}>
      <Icon name={iconName} size={20} color="#008000" />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius:15,
    paddingtop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  activeButton: {
    backgroundColor: '#FFFFFF', // change this to the color you want for the active state
  },
  buttonText: {
    paddingTop: 5,
    fontSize: 11, // this will make the text smaller
    fontWeight: 'bold',
  },
});

export default CustomButton;
