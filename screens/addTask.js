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
      <View>
        <Text
          style={{
            color: Colors.dark,
            fontSize: 20,
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
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: Colors.orange,
    borderRadius: 60,
    borderColor: Colors.dark,
    borderWidth: 1,
  },
});
