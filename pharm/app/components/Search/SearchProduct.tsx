import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const products = [
  { sku: 'AMX-001', name: 'Amoxicillin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: true },
  { sku: 'FLX-002', name: 'Flucloxallin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: false },
  { sku: 'PNC-003', name: 'Penicillin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: false },
  { sku: 'AMX-004', name: 'Amoxicillin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: true },
  { sku: 'AMX-001', name: 'Amoxicillin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: true },
  { sku: 'FLX-002', name: 'Flucloxallin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: false },
  { sku: 'PNC-003', name: 'Penicillin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: false },
  { sku: 'AMX-004', name: 'Amoxicillin', price: 'Ghc 20.00', stock: '58 in stock', image: require('../../../assets/images/baby.png'), favorite: true },
];

const ProductList = () => {
  return (
    <ScrollView contentContainerStyle={styles.pl_productList}>
      {products.map((item) => (
        <View key={item.sku} style={styles.pl_productCard}>
          <Image source={item.image} style={styles.pl_productImage} />
          <TouchableOpacity style={styles.pl_favoriteIcon}>
            <FontAwesome name="heart" size={20} color={item.favorite ? "red" : "#ddd"} />
          </TouchableOpacity>
          <Text style={styles.pl_price}>{item.price}</Text>
          <Text style={styles.pl_productName}>{item.name}</Text>
          <Text style={styles.pl_stock}>{item.stock}</Text>
          <View style={styles.pl_quantityContainer}>
            <TouchableOpacity style={styles.pl_quantityButton}>
              <FontAwesome name="minus" size={16} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.pl_quantityButton}>
              <FontAwesome name="plus" size={16} color="#666" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  pl_productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  pl_productCard: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 8,
    borderWidth: 1,
    borderColor: '#3a73d6',
    alignItems: 'center',
    position: 'relative',
  },
  pl_productImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  pl_favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  pl_price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3a73d6',
    marginTop: 5,
  },
  pl_productName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  pl_stock: {
    fontSize: 12,
    color: '#777',
    marginBottom: 5,
  },
  pl_quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 5,
  },
  pl_quantityButton: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});


