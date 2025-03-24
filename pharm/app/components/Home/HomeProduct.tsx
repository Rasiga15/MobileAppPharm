import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const homeproduct = [
  {
    id: "101",
    name: "Domperidone",
    image: require("../../../assets/images/domperidone.png"),
    liked: true,
  },
  {
    id: "102",
    name: "Vitamin C",
    image: require("../../../assets/images/vitaminc.png"),
    liked: true,
  },
  {
    id: "103",
    name: "Paracetamol",
    image: require("../../../assets/images/paracetamol.png"),
    liked: false,
  },
];

const HomeProduct = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.heading}>
            <Feather name="gift" size={24} color="black" /> Recommended for you
          </Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {homeproduct.map((item) => (
            <View key={item.id} style={[styles.card, item.liked && styles.activeCard]}>
              <Image source={item.image} style={styles.image} />
              <TouchableOpacity style={styles.heartIcon}>
                <FontAwesome name="heart" size={20} color={item.liked ? "red" : "gray"} />
              </TouchableOpacity>
              <Text style={styles.productName}>{item.name}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default HomeProduct;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#142257",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#E5EBF2",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeCard: {
    borderColor: "purple",
    borderWidth: 2,
  },
  image: {
    width: 80,
    height: 60,
    resizeMode: "contain",
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
});


