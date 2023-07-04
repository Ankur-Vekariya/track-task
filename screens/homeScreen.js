import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/Colors";
import ProfileCard from "../components/ProfileCard";
import CategoryItem from "../components/CategoryItem";
import { getTaskFromSqlite } from "../utils/sqlite";
import { useIsFocused } from "@react-navigation/native";
import moment from "moment/moment";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [allTasks, setAllTasks] = useState([]);
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

  const isFocused = useIsFocused();

  const getTask = async () => {
    let tasks = await getTaskFromSqlite();
    setAllTasks(tasks);
  };

  console.log("all tasks", allTasks);

  useEffect(() => {
    isFocused && getTask();
  }, [isFocused]);

  return (
    <View style={{ paddingHorizontal: 10, height: "100%" }}>
      <ProfileCard navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View
          style={{
            // height: 250,
            backgroundColor: "black",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 9,
            },
            shadowOpacity: 0.48,
            shadowRadius: 11.95,
            elevation: 5,
            width: "100%",
            borderRadius: 20,
            padding: 10,
            alignContent: "center",
            marginVertical: 5,
            marginTop: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: Colors.dark,
              borderWidth: 10,
              height: 250,
              width: 250,
              borderRadius: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontStyle: "italic",
                fontSize: 44,
                color: Colors.accent,
                fontWeight: "900",
                textAlign: "center",
                // borderColor: "red",
                // borderWidth: 1,
              }}
            >
              83%
            </Text>
          </View>
        </View>

        <FlatList
          data={allTasks}
          renderItem={(item, index) => {
            console.log(item);
            return (
              <TouchableOpacity
                style={styles.taskItem}
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
                      {item?.item?.value}
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
                    style={
                      {
                        // backgroundColor: Colors.accent,
                        // width: "30%",
                        // height: "100%",
                        // borderRadius: 10,
                      }
                    }
                  >
                    <Text>{">"}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>

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
  taskItem: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    width: "100%",
    backgroundColor: Colors.accent,
    borderRadius: 20,
    padding: 10,
    alignContent: "center",
    marginVertical: 5,
    borderColor: "white",
    borderWidth: 1,
  },
});
