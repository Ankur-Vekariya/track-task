import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/Colors";
import ProfileCard from "../components/ProfileCard";
import CategoryItem from "../components/CategoryItem";

const Home = ({ navigation }) => {
  let categoryData = [
    {
      categoryName: "work",
      categoryImage: "",
      total:20,
    },
    {
      categoryName: "personal",
      categoryImage: "",
      total:50,
    },
    {
      categoryName: "sports",
      categoryImage: "",
      total:3,
    },
    {
      categoryName: "",
      categoryImage: "",
      total:50,
    },
  ];
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ProfileCard navigation={navigation} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <View>
          <Text
            style={{
              color: Colors.dark,
              fontSize: 20,
            }}
          >
            {"Category"}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 50,
            width: "20%",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
            }}
          >
            {"Add"}
          </Text>
        </TouchableOpacity>
      </View>
      <CategoryItem navigation={navigation} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  hotelTypeCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    width: "100%",
    height: "30%",
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    alignContent: "center",
    marginVertical: 5,
  },
  date: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    width: "15%",
    // height: "30%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignContent: "center",
    marginVertical: 5,
  },
});
