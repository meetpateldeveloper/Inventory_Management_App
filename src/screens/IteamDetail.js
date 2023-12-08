import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ItemDetail = () => {
  const route = useRoute();
  const { dataArray } = route.params;

  return (
    <ScrollView style={styles.container}>
      {dataArray.length > 0 ? (
        dataArray.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.title}>Item Details</Text>

            <Image style={styles.image} source={{ uri: item.imageURL }} />

            <View style={styles.detailsContainer}>
              <View style={styles.detailRow}>
                <Text style={styles.label}>Title:</Text>
                <Text style={styles.value}>{item.title}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Barcode ID:</Text>
                <Text style={styles.value}>{item.barcodeid}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Quantity:</Text>
                <Text style={styles.value}>{item.quantity}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Category:</Text>
                <Text style={styles.value}>{item.category}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Price:</Text>
                <Text style={styles.value}>{item.price}</Text>
              </View>

              <View style={styles.detailRow}>
                <Text style={styles.label}>Owner:</Text>
                <Text style={styles.value}>{item.email}</Text>
              </View>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No such item</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  itemContainer: {
    margin: 20,
    marginTop: 200,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  detailsContainer: {
    marginTop: 10,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  value: {
    fontSize: 16,
    flex: 2,
  },
  noData: {
    fontSize: 22,
    color: 'red',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ItemDetail;
