import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/Colors";

const AddTask = ({ navigation }) => {
  const [task, setTask] = useState();

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          marginVertical: 10,
          width: "100%",
          height: "40%",
          borderRadius: 10,
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/add-task.png")}
          style={{ height: "100%", width: "100%" }}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: Colors.dark,
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          {"Task Name"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
      </View>
      <View style={{}}>
        <Text
          style={{
            color: Colors.dark,
            fontSize: 20,
            marginVertical: 10,
          }}
        >
          {"Category Name"}
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
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
          borderRadius: 20,
          paddingVertical: 10,
          alignItems: "center",
          alignContent: "center",
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
  );
};

export default AddTask;

const styles = StyleSheet.create({
  input: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.orange,
    borderRadius: 20,
    borderColor: "white",
    borderWidth: 1,
    marginVertical: 5,
  },
});
