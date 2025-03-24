import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Welcome = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/register");
  };

  return (
    <View style={styles.w_container}>
    
      <View style={[styles.w_circle, styles.w_topCircle]} />
      <View style={[styles.w_dottedCircle, styles.w_topCircle]} />

   
      <Image 
        source={require('../assets/images/Vector.png')} 
        style={styles.w_logoImage} 
        resizeMode="contain"
      />
      <Text style={styles.w_logo}>Kite<Text style={styles.w_care}>Care</Text></Text>

      
      <View style={styles.w_doctorBox}>
        <Image 
          source={require('../assets/images/welcomedoctor.png')} 
          style={styles.w_doctorImage} 
          resizeMode="contain"
        />
      </View>

      
      <View style={[styles.w_circle, styles.w_bottomCircle]} />
      <View style={[styles.w_dottedCircle, styles.w_bottomCircle]} />

    
      <Text style={styles.w_quoteText}>
        <Text style={{ fontWeight: 'bold' }}>Medicine</Text> is a science of uncertainty{'\n'}
        and an art of <Text style={{ fontWeight: 'bold' }}>probability</Text>
      </Text>

    
      <TouchableOpacity onPress={handleClick} style={styles.w_button}>
        <Text style={styles.w_buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  w_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF4FA',
    paddingHorizontal: 20,
    position: 'relative',
  },
  w_logo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#163172',
    marginBottom: 10,
    top:-80,
  },
  w_care: {
    fontStyle: 'italic',
    color: '#5A7EC7',
  },
  w_logoImage: {
    width: 50, 
    height: 60, 
    marginBottom: 10, 
    alignSelf: 'center',
    top:-80, 
  },
  w_doctorBox: {
    // borderWidth: 2,
    top:-50,
    // borderColor: '#163172',
    padding: 5,
    // borderRadius: 10,
  },
  w_doctorImage: {
    width: 250,
    height: 150,
  },
  w_quoteText: {
    bottom:-30,
    fontSize: 18,
    color: '#163172',
    textAlign: 'center',
    marginVertical: 20,
  },
  w_button: {
    bottom:-70,
    backgroundColor: '#5A7EC7',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    // borderWidth: 2,
    borderColor: '#163172',
  },
  w_buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  w_circle: {
    position: 'absolute',
    width: 175,
    height: 170,
    borderRadius: 110,
    backgroundColor: '#AFCBE7',
    opacity: 0.6,
  },
  w_topCircle: {
    top: 40,
    right: -50,
  },
  w_bottomCircle: {
    bottom: 120,
    left: -40,
  },
  w_dottedCircle: {
    position: 'absolute',
    width: 180, 
    height: 175,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#163172',
    borderStyle: 'dotted',
  },
});
