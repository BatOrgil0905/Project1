import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const SignInputComponent = ({ placeholder, value, setValue, secret }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        value={value}
        onChangeText={setValue}
        secureTextEntry={secret ? true : false}
      />
    </View>
  );
};

export default SignInputComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "90%",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#e8e8e8",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 5,
  },
  input: {
    fontSize: 20,
    color: "#fffs",
  },
});
