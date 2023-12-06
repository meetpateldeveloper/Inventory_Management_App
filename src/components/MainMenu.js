import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton'; // adjust the path according to your project structure
import { useNavigation } from '@react-navigation/native';

const MainMenu = ({ activeScreen  }) => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomButton iconName="home" title="Dashboard" onPress={() => navigation.navigate('DashboardPage')} active={activeScreen === 'Dashboard'} />
      <CustomButton iconName="list" title="Inventory List" onPress={() => navigation.navigate('InventoryPage')} active={activeScreen === 'InventoryList'} />
      <CustomButton iconName="plus" title="Add Item" onPress={() => navigation.navigate('AddItemPage')} active={activeScreen === 'AddItem'} />
      <CustomButton iconName="search" title="Search" onPress={() => navigation.navigate('SearchPage')} active={activeScreen === 'Search'} />
      <CustomButton iconName="barcode" title="Scan Barcode" onPress={() => navigation.navigate('Scanpage')} active={activeScreen === 'ScanBarcode'} />
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
