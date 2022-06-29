import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen({navigation, user}) {
  const clickBtn = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={css.container}>
      <Text style={css.text}>Home Page screen</Text>
      <Text style={css.text}>Hello, {user}</Text>
      <Button title="Click here" style={css.btn} onPress={clickBtn} />
    </View>
  );
}

export default HomeScreen;

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginVertical: 30,
  },
  btn: {
    fontSize: 50,
    marginTop: 30,
    backgroundColor: "black",
  },
});
