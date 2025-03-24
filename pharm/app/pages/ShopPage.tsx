import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ShopPage = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/baby.png")}
        style={styles.productImage}
      />
      <Text style={styles.productName}>Amoxicillin</Text>
      <Text style={styles.price}>Rs. 100.00</Text>
      <Text style={styles.description}>12 capsules in 1 box</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityBtn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity} box</Text>
        <TouchableOpacity onPress={increaseQuantity} style={styles.quantityBtn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.stock}>10 capsules — 200 Boxes</Text>

      <Text style={styles.productDescription}>
        Used to treat bacterial infections, such as chest infections (including
        pneumonia) and dental abscesses.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.orderNow}>
          <Text style={styles.buttonText}>Order Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.buttonText}>Add Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: "90%",
    margin: 20,
    marginTop: 100,
  },
  productImage: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#6c757d",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    backgroundColor: "#f1f3f5",
    padding: 8,
    borderRadius: 10,
  },
  quantityBtn: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stock: {
    fontSize: 14,
    color: "#6c757d",
    marginBottom: 10,
    textAlign: "center",
  },
  productDescription: {
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
    color: "#6c757d",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  orderNow: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  addToCart: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default ShopPage;
