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

const ProfileCard = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.hotelTypeCard}
      onPress={() => navigation.navigate("Profile")}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 28,
              fontWeight: "700",
              color: "white",
            }}
          >
            Hello, {"Ankur Vekariya"}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "400",
              color: "white",
            }}
          >
            {"ankurvekariya2001@gmail.com"}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: Colors.accent,
            width: "30%",
            height: "100%",
            borderRadius: 10,
          }}
        >
          <Image
            source={require("../assets/home_vector.png")}
            style={{ height: "100%", width: "100%", borderRadius: 20 }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileCard;

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
    height: 100,
    backgroundColor: Colors.accent,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
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
