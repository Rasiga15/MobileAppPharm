import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const banners = [
  {
    id: '1',
    title: 'Order medicine',
    description: 'Upload prescription and tell us what you need.',
    offer: 'Get Upto 30% off',
    image: require('../../../assets/images/homebanner.png'),
  },
  {
    id: '2',
    title: 'Health Checkup',
    description: 'Book a full body checkup at the best prices',
    offer: 'Get 25% off',
    image: require('../../../assets/images/homebanner.png'),
  },
  {
    id: '3',
    title: 'Online Consultation',
    description: 'Consult with top doctors from your home',
    offer: 'First Consultation Free',
    image: require('../../../assets/images/homebanner.png'),
  },
  {
    id: '4',
    title: 'Home Delivery',
    description: 'Get medicines delivered at your doorstep',
    offer: 'Free Delivery Available',
    image: require('../../../assets/images/homebanner.png'),
  },
];

const HomeBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotPress = (index) => {
    setCurrentIndex(index);
  };

  return (
    <View>
   
      <View style={styles.bannerContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{banners[currentIndex]?.title}</Text>
          <Text style={styles.description}>{banners[currentIndex]?.description}</Text>
          <Text style={styles.offer}>{banners[currentIndex]?.offer}</Text>
          <TouchableOpacity style={styles.orderButton}>
            <Text style={styles.buttonText}>Order Now</Text>
          </TouchableOpacity>
        </View>
        <Image source={banners[currentIndex]?.image} style={styles.bannerImage} />
      </View>

      <View style={styles.pagination}>
        {banners.map((item, index) => (
          <TouchableOpacity key={item.id} onPress={() => handleDotPress(index)}>
            <View style={[styles.dot, currentIndex === index && styles.activeDot]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: '#E5EBF2',
    padding: 15,
    borderRadius: 15,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  offer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#142257',
    marginBottom: 10,
  },
  orderButton: {
    backgroundColor: '#142257',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  bannerImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    resizeMode: 'contain',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 20,
    height: 4,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#000',
  },
});


