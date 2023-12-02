import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton'; // adjust the path according to your project structure

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <CustomButton iconName="home" title="Dashboard" onPress={() => {}} />
      <CustomButton iconName="list" title="Inventory List" onPress={() => {}} />
      <CustomButton iconName="plus" title="Add Item" onPress={() => {}} />
      <CustomButton iconName="search" title="Search" onPress={() => {}} />
      <CustomButton iconName="barcode" title="Scan Barcode" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 2,
    backgroundColor: '#f0f0f0',
    borderWidth:1,
    marginTop:70,               // remove this when adding profile or back button
    borderColor: 'grey'
  },
});

export default MainMenu;
