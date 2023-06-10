import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Home from "./screens/homeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./screens/profile";
import Colors from "./utils/Colors";
import AddCategory from "./screens/addCategory";
import AddTask from "./screens/addTask";

const Stack = createNativeStackNavigator();
export default function App() {
  function LogoTitle(props) {
    console.log("props--------", props);
    return (
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
        }}
      >
        {props.children == "Home" ? "Track Task" : props.children}
      </Text>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: { backgroundColor: Colors.accent },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: { backgroundColor: Colors.accent },
          }}
        />
        <Stack.Screen
          name="AddCategory"
          component={AddCategory}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: { backgroundColor: Colors.accent },
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: { backgroundColor: Colors.accent },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
