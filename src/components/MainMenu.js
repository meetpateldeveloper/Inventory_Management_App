import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton'; // adjust the path according to your project structure

const MainMenu = ({ activeScreen }) => {
  return (
    <View style={styles.container}>
      <CustomButton iconName="home" title="Dashboard" onPress={() => {}} active={activeScreen === 'Dashboard'} />
      <CustomButton iconName="list" title="Inventory List" onPress={() => {}} active={activeScreen === 'InventoryList'} />
      <CustomButton iconName="plus" title="Add Item" onPress={() => {}} active={activeScreen === 'AddItem'} />
      <CustomButton iconName="search" title="Search" onPress={() => {}} active={activeScreen === 'Search'} />
      <CustomButton iconName="barcode" title="Scan Barcode" onPress={() => {}} active={activeScreen === 'ScanBarcode'} />
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
