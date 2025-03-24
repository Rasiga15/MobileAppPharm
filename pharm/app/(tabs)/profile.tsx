import { useNavigation, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Profile = () => {
  const navigation = useNavigation();

  const profileOptions = [
    { id: 1, name: "Account Details", icon: "user" },
    { id: 2, name: "My Cart", icon: "shopping-cart" },
    { id: 3, name: "My Order", icon: "box" },
    { id: 4, name: "Add Address", icon: "map-marker-alt" },
    { id: 5, name: "Bank & UPI Details", icon: "university" },
    { id: 6, name: "Log Out", icon: "sign-out-alt" },
  ];

  const handleNavigation = (optionName: string) => {
    switch (optionName) {
      case "Account Details":
        navigation.navigate("AccountDetailsPage"as never);
        break;
      case "My Cart":
        navigation.navigate("CartPage"as never);
        break;
      case "My Order":
        navigation.navigate("OrderPage"as never);
        break;
      case "Add Address":
        navigation.navigate("AddressPage"as never);
        break;
      case "Bank & UPI Details":
        navigation.navigate("BankDetailsPage"as never);
        break;
      case "Log Out":
        navigation.navigate("Logout"as never);
        break;
      default:
        console.warn("No route found for:", optionName);
    }
  };

  return (
    <View style={styles.profileContainer}>
      <Text style={styles.profileHeader}>Profile</Text>

      {profileOptions.map((option) => (
        <TouchableOpacity 
          key={option.id} 
          style={styles.profileRow} 
          onPress={() => handleNavigation(option.name)}
        >
          <Icon name={option.icon} size={20} style={styles.profileIcon} />
          <Text style={styles.profileText}>{option.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop:80,
  },
  profileHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileIcon: {
    marginRight: 15,
    color: '#000',
  },
  profileText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
