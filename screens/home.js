import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import  Colors  from "../utils/Colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemCard}>
        <Text style={{ fontSize: 18, marginLeft: 5 }}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemCard}>
        <Text style={{ fontSize: 18, marginLeft: 5 }}>Products</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
    alignItems: "center",
    // justifyContent: "center",
  },
  itemCard: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 20,
    // alignItems: "center",
    backgroundColor: Colors.lightGray,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkGray,
    paddingVertical: 8,
    paddingHorizontal: 8,
    // maxHeight: 200,
    // minWidth: 200,
    height: 80,
    width: "95%",
    marginBottom: 5,
    marginTop: 2,
  },
});
