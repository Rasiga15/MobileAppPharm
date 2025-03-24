import React, { useRef, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const categories = [
  { num: '1', name: 'Pain Relievers', bgColor: '#E8F0FE', icon: 'capsules' },
  { num: '2', name: 'Vitamins & Supplements', bgColor: '#D4FACE', icon: 'leaf' },
  { num: '3', name: 'Antibiotics', bgColor: '#FEE8E8', icon: 'prescription-bottle-alt' },
  { num: '4', name: 'Skincare & Cosmetics', bgColor: '#FFF5C3', icon: 'air-freshener' },
  { num: '5', name: 'Cough & Cold', bgColor: '#E8F0FE', icon: 'lungs-virus' },
  { num: '6', name: 'Diabetes Care', bgColor: '#D4FACE', icon: 'syringe' },
  { num: '7', name: 'First Aid', bgColor: '#FEE8E8', icon: 'first-aid' },
  { num: '8', name: 'Personal Care', bgColor: '#FFF5C3', icon: 'spa' },
  { num: '9', name: 'Pain Relievers', bgColor: '#E8F0FE', icon: 'capsules' },
  { num: '10', name: 'Vitamins & Supplements', bgColor: '#D4FACE', icon: 'leaf' },
  { num: '11', name: 'Antibiotics', bgColor: '#FEE8E8', icon: 'prescription-bottle-alt' },
  { num: '12', name: 'Skincare & Cosmetics', bgColor: '#FFF5C3', icon: 'air-freshener' },
  { num: '13', name: 'Cough & Cold', bgColor: '#E8F0FE', icon: 'lungs-virus' },
  { num: '14', name: 'Diabetes Care', bgColor: '#D4FACE', icon: 'syringe' },
  { num: '15', name: 'First Aid', bgColor: '#FEE8E8', icon: 'first-aid' },
  { num: '16', name: 'Personal Care', bgColor: '#FFF5C3', icon: 'spa' },
];

const itemsPerPage = 4; 

const HomeCategories = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handleDotPress = (index) => {
    setCurrentIndex(index);
    flatListRef.current.scrollToIndex({ index: index * itemsPerPage, animated: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          <Feather name="layers" size={24} color="#142257" /> Categories
        </Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.num}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: item.bgColor }]}>
            <FontAwesome5 name={item.icon} size={30} color="#163172" />
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        getItemLayout={(data, index) => ({
          length: 100,
          offset: 102 * index,
          index,
        })}
        initialScrollIndex={0}
      />

      <View style={styles.pagination}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
            <View style={[styles.dot, currentIndex === index && styles.activeDot]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default HomeCategories;

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#142257',
  },
  viewAll: {
    fontSize: 14,
    color: '#142257',
    fontWeight: 'bold',
  },
  categoryCard: {
    width: 90,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    padding: 10,
  },
  categoryName: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
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
    width: 20,
    height: 4,
    borderRadius: 3,
  },
});
