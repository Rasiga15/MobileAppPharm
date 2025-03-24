import { useRouter } from 'expo-router';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, TextInput, TouchableOpacity, Switch, StyleSheet, Image } from 'react-native';  // ❗ Image import added

const Register = () => {
  const router = useRouter();

  const handleRegister = () => {
    router.replace("/login");
  };

  return (
    <View style={styles.r_container}>

      <View style={styles.r_socialContainer}>
        <TouchableOpacity style={styles.r_socialButton}>
          <FontAwesome name="facebook" size={24} color="#163172" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.r_socialButton}>
          <FontAwesome name="apple" size={24} color="#163172" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.r_socialButton}>
          <FontAwesome name="google" size={24} color="#163172" />
        </TouchableOpacity>
      </View>

      <View style={[styles.r_circle, styles.r_topRightCircle]} />
      <View style={[styles.r_circle, styles.r_bottomLeftCircle]} />
      <View style={[styles.r_dottedCircle, styles.r_topRightCircle]} />
      <View style={[styles.r_dottedCircle, styles.r_bottomLeftCircle]} />

     
      <Image 
        source={require('../assets/images/Vector.png')} 
        style={styles.r_logoImage} 
      />

    <Text style={styles.r_logo}>Kite<Text style={styles.r_care}>Care</Text></Text>

      <TextInput style={styles.r_input} placeholder="Your full name" />
      <TextInput style={styles.r_input} placeholder="Your email address" />
      <TextInput style={styles.r_input} placeholder="Your password" secureTextEntry />

      <View style={styles.r_row}>
        <Switch />
        <Text style={styles.r_text}>Remember me</Text>
      </View>

      <TouchableOpacity onPress={handleRegister} style={styles.r_button}>
        <Text style={styles.r_buttonText}>SIGN UP</Text>
      </TouchableOpacity>

      <Text style={styles.r_text}>
        Already have an account?
        <Text style={styles.r_link}> Sign in</Text>
      </Text>
    </View>
  );
};

export default Register;


const styles = StyleSheet.create({
  r_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  r_logoImage: {
    width: 120, 
    height: 60,  
    marginBottom: 10, 
    alignSelf: 'center', 
    resizeMode: 'contain', 
  },
  
  r_logo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#163172',
    textAlign: 'center',
    marginBottom: 20,
  },
  r_care: {
    fontStyle: 'italic',
    color: '#5A7EC7',
  },
  r_input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#AFCBE7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: '90%',
  },
  r_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  r_text: {
    fontSize: 14,
    color: '#163172',
  },
  r_link: {
    fontWeight: 'bold',
    color: '#5A7EC7',
  },
  r_button: {
    backgroundColor: '#5A7EC7',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  r_buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  r_circle: {
    position: 'absolute',
    width: 175,
    height: 170,
    borderRadius: 110,
    backgroundColor: '#AFCBE7',
    opacity: 0.6,
  },
  r_dottedCircle: {
    position: 'absolute',
    width: 180, 
    height: 175,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#163172',
    borderStyle: 'dotted',
  },
  r_topRightCircle: {
    top: 40,
    right: -40,
  },
  r_bottomLeftCircle: {
    bottom: 60,
    left: -40,
  },
  r_socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  r_socialButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#AFCBE7',
    alignItems: 'center',
  },
});


