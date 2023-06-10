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

const AddCategory = ({ navigation }) => {
  const [text, onChangeText] = useState("Useless Text");
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
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});
