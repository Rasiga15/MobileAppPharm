import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Login = () => {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = () => {
    router.replace("/(tabs)");
  };

  const handleSignUp = () => {
    router.push("/register");
  };

  return (
    <View style={styles.container}>
     
      <View style={[styles.circle, styles.topRightCircle]} />
      <View style={[styles.dottedCircle, styles.topRightCircle]} />

      <View style={[styles.circle, styles.bottomLeftCircle]} />
      <View style={[styles.dottedCircle, styles.bottomLeftCircle]} />


        <Image 
               source={require('../assets/images/Vector.png')} 
               style={styles.l_logoImage} 
             />
       
    
      <Text style={styles.logo}>Kite<Text style={styles.logoCare}>Care</Text></Text>

      <Text style={styles.loginTitle}>Login</Text>

     
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter email" />
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter password" secureTextEntry />
      </View>

      <View style={styles.row}>
        <CheckBox 
          checked={isChecked} 
          onPress={() => setIsChecked(!isChecked)} 
          containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 0 }}
        />
        <Text style={styles.rememberText}>Keep me logged in</Text>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

    
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

   
      <Text style={styles.signupText}>
        Don't have an account? 
        <Text style={styles.signupLink} onPress={handleSignUp}> Sign up</Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  l_logoImage: {
    width: 50, 
    height: 60, 
    marginBottom: 10, 
    alignSelf: 'center',
    top:-80, 
  },
  logo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#163172',
    marginBottom: 10,
    top:-80,
  },
  logoCare: {
    fontStyle: 'italic',
    color: '#5A7EC7'
  },
  loginTitle: {
    top:-20,
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  inputContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#AFCBE7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  input: {
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  rememberText: {
    fontSize: 14,
    color: '#163172',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#5A7EC7',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#5A7EC7',
    paddingVertical: 12,
    width: '50%',
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#163172',
    marginTop: 15,
  },
  signupLink: {
    fontWeight: 'bold',
    color: '#5A7EC7',
  },

  circle: {
    position: 'absolute',
    width: 175,
    height: 170,
    borderRadius: 110,
    backgroundColor: '#AFCBE7',
    opacity: 0.6,
  },
  topRightCircle: {
    top: 40,
    right: -30,
  },
  bottomLeftCircle: {
    bottom: 50,
    left: -30,
  },

 
  dottedCircle: {
    position: 'absolute',
    width: 180, 
    height: 175,
    borderRadius: 110,
    borderWidth: 1,
    borderColor: '#163172',
    borderStyle: 'dotted',
  },
});


