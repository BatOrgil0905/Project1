import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  TouchableHighlight,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./scr/screen/Home";
// import LoginScreen from "./scr/screen/Login";
// import SignupScreen from "./scr/screen/Signup";
import Lesson2 from "./scr/Lessons/Lesson2";

// --Lesson3
import LoginScreen from "./scr/Lessons/Lesson3/LoginScreen";
import RegisterScreen from "./scr/Lessons/Lesson3/RegisterScreen";
import HomePage from "./scr/Lessons/Lesson3/HomePage";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        {/* <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} /> */}

        <Stack.Screen name="Lesson2" component={Lesson2} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 50,
    // backgroundColor: 'yellow',
    // borderWidth: 5,
    // borderColor: 'grey'
  },
  btn: {
    fontSize: 50,
    // backgroundColor: 'black'
  },
});
