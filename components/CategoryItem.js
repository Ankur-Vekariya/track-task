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

const CategoryItem = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.hotelTypeCard}
      onPress={() => navigation.navigate("Profile")}
    >
      <Image
        source={require("../assets/home_vector.png")}
        style={{ height: 80, width: "100%", borderRadius: 20 }}
      />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "400",
          color: "white",
          textAlign: "center",
        }}
      >
        {"Work"}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          color: "white",
          textAlign: "center",
        }}
      >
        {"20+ task's"}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

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
    width: "25%",
    backgroundColor: Colors.blue,
    borderRadius: 20,
    borderTopRightRadius: 500,
    padding: 5,
    alignContent: "center",
    marginVertical: 5,
    marginTop: 10,
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
