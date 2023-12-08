import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ItemDetail = () => {
  const route = useRoute();
  const { dataArray } = route.params;

  return (
    <View style={styles.container}>
      {dataArray.length > 0 ? (
        dataArray.map((item, index) => (
            
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.title}>Details Screen</Text>
            <Text style={styles.label}>Barcode ID:</Text>
            <Text style={styles.value}>{item.barcodeid}</Text>

            <Text style={styles.label}>Title:</Text>
            <Text style={styles.value}>{item.title}</Text>

            <Text style={styles.label}>Quantity:</Text>
            <Text style={styles.value}>{item.quantity}</Text>

            <Text style={styles.label}>Category:</Text>
            <Text style={styles.value}>{item.category}</Text>

            <Text style={styles.label}>Price:</Text>
            <Text style={styles.value}>{item.price}</Text>

            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{item.email}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No such item</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#e6e6e6",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
  },
  noData: {
    fontSize: 22,
    color: 'red',
  },
});

export default ItemDetail;
