import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const AccountDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Account Details</Text>
      <Image source={require('../assets/images/welcomedoctor.png')} style={styles.profileImage} />
      
      <TextInput placeholder="Your name" style={styles.input} />
      <TextInput placeholder="Your email" style={styles.input} />
      <TextInput placeholder="Your mobile number" style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Your Address" style={styles.input} />
      <TextInput placeholder="Your City" style={styles.input} />
      <TextInput placeholder="Your Pincode" style={styles.input} keyboardType="numeric" />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountDetails;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#001F3F',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
  },
});

