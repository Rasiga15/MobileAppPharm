import React from "react";
import {  View } from "react-native";
import HomeNavBar from "../components/Home/HomeNavBar";
import HomePage from "../pages/HomePage";



export default function MyComponent() {
  return (
    <View>
      <HomeNavBar />
      <HomePage/>
    </View>
  );
}
