import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
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
      total: 20,
    },
    {
      categoryName: "personal",
      categoryImage: "",
      total: 50,
    },
    {
      categoryName: "sports",
      categoryImage: "",
      total: 3,
    },
    {
      categoryName: "",
      categoryImage: "",
      total: 50,
    },
    {
      categoryName: "",
      categoryImage: "",
      total: 50,
    },
    {
      categoryName: "",
      categoryImage: "",
      total: 50,
    },
    {
      categoryName: "",
      categoryImage: "",
      total: 50,
    },
  ];
  return (
    <View style={{ paddingHorizontal: 10, height: "100%" }}>
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
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,

            elevation: 5,
            backgroundColor: Colors.dark,
            borderRadius: 50,
            width: "20%",
            alignItems: "center",
            alignContent: "center",
            // borderRadius: 20,
            borderWidth: 1,
            borderColor: "white",
          }}
          onPress={() => {
            navigation.navigate("AddCategory");
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
      <View style={{ width: "100%" }}>
        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CategoryItem navigation={navigation} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("AddTask")}
          style={styles.addWrapper}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 7.5,
    marginHorizontal: 15,
  },
  addWrapper: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 5,
    width: 60,
    height: 60,
    backgroundColor: Colors.dark,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FFF",
    borderWidth: 1,
  },
  addText: {
    color: "white",
    fontSize: 40,
  },
});
