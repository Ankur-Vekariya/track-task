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
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <TouchableOpacity
        style={styles.hotelTypeCard}
        // onPress={() => navigation.navigate("hotel-detail")}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 28,
                fontWeight: "400",
                color: "white",
              }}
            >
              Hello, {"Ankur Vekariya"}
            </Text>
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 16,
                fontWeight: "400",
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
    height: "50%",
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    alignContent: "center",
    marginVertical: 5,
  },
  featured: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    paddingHorizontal: 5,
    minWidth: 240,
    height: 200,
    backgroundColor: "white",
    marginRight: 10,
    borderRadius: 25,
    paddingVertical: 5,
    alignContent: "center",
    marginVertical: 10,
  },
  bottomTabBar: {
    backgroundColor: "white",
    alignContent: "center",
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: 675,
  },
  button: {
    height: 50,
    width: "25%",
    // backgroundColor: "#8CC8FF",
    alignItems: "center",
    // borderTopRightRadius: 25,
    // borderBottomLeftRadius: 25,
  },
});
