import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BankDetailsPage = () => {
  return (
    <View style={styles.container}>
      {/* <Ionicons name="arrow-back" size={24} color="#000" style={styles.backIcon} /> */}
      <Text style={styles.title}>Bank & UPI Details</Text>
      
      <TextInput style={styles.input} placeholder="Your account number" />
      <TextInput style={styles.input} placeholder="Enter IFSC Code" />
      <TextInput style={styles.input} placeholder="Your bank name" />
      <TextInput style={styles.input} placeholder="Enter branch name" />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add Card</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.floatingButton}>
        <Ionicons name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default BankDetailsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backIcon: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#0D1B45',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#0D1B45',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});


