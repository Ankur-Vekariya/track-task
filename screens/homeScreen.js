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

const Home = ({ navigation }) => {
  let date = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: Colors.dark,
          textAlign: "center",
        }}
      >
        Hello, {"Ankur Vekariya"}
      </Text>
      <View
        style={styles.hotelTypeCard}
        // onPress={() => navigation.navigate("hotel-detail")}
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
      </View>
      <View style={styles.date}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "400",
            color: Colors.accent,
          }}
        >
          01
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            color: Colors.accent,
          }}
        >
          mon
        </Text>
      </View>
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
