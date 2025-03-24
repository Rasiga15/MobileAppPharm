import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeNavBar = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.logoContainer}>
      {/* <Icon name="heartbeat" size={30} color="#1E90FF" />  */}
       <Image 
                     source={require('../../../assets/images/Vector.png')} 
                     style={styles.Nav_logoImage} 
                   />
        <Text style={styles.logoText}>KiteCare</Text>
      </View>

     
      <View style={styles.searchContainer}>
        <Icon name="search" size={18} color="#B0B0B0" style={styles.searchIcon} />
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search medicine" 
          placeholderTextColor="#B0B0B0"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      paddingHorizontal: 15,  
      paddingTop: 55,  
      paddingBottom: 15, 
      backgroundColor: '#ffffff',
    },
    logoContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    
    Nav_logoImage: { 
      width: 30,  
      height: 30, 
      resizeMode: 'contain',  
      marginRight: 5,  
    },
    
    logoText: {
      fontSize: 20,  
      fontWeight: 'bold',
      color: '#4A4A4A', 
    },
    
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#E5EBF2',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
});

export default HomeNavBar;
