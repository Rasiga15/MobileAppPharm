import React from 'react';
import { View, Text,  StyleSheet } from "react-native";

const Sample = () => {
return(
    <View style={styles.container}>
          <Text style={styles.title}>Login Successfully</Text>
        </View>
)
}
export default Sample;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      padding: 20,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 20,
      color: "#333",
    },
});
