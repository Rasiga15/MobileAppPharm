import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cart</Text>
      <Image source={require('../assets/images/welcomedoctor.png')} style={styles.cartImage} />
      <Text style={styles.emptyText}>Your Cart is empty</Text>
      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopButtonText}>Shop More</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  cartImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  shopButton: {
    backgroundColor: '#001F3F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});


