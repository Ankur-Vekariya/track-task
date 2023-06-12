import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../utils/Colors";
import * as SQLite from "expo-sqlite";
import { addTaskInSqlite } from "../utils/sqlite";

function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }
  const db = SQLite.openDatabase("track-task.db");
  return db;
}

const db = openDatabase();

const AddTask = ({ navigation }) => {
  const [task, setTask] = useState();
  console.log("task", task);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        // "DROP TABLE tasks;"
        "create table if not exists tasks (id integer primary key not null, done int, value text);"
      );
    });
  }, []);

  const add = (text) => {
    // is text empty?
    if (text === null || text === "") {
      return false;
    }
    addTaskInSqlite(text);

    // db.transaction(
    //   (tx) => {
    //     tx.executeSql("insert into tasks (done, value) values (0, ?)", [text]);
    //     tx.executeSql("select * from tasks", [], (_, { rows }) =>
    //       console.log(JSON.stringify(rows))
    //     );
    //   },
    //   (error) => {
    //     console.log("error sqlite", error);
    //   },
    //   () => Alert.alert("task successfully added")
    // );
  };

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
          add(task);
          // navigation.navigate("AddCategory");
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
