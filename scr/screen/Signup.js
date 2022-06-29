import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

function SignupScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayValue, setDisplayValue] = useState(false)

  const clickBtn = () => {
    setDisplayValue(!displayValue)
    navigation.navigate("Login");
  };

  // const displayingValue = () => {
  //   setDisplayValue(!displayValue)
  // }

  return (
    <View>
      <Text style={css.title}>Signup Page</Text>
      {displayValue && (
        <Text>
          {username} {email} {password}
        </Text>
      )}
      <View style={css.form}>
        <View style={css.input_group}>
          <Text style={css.input_text}>Username</Text>
          <TextInput
            style={css.input}
            placeholder="Write your Username"
            keyboardType="email-address"
            onChangeText={(value) => setUsername(value)}
            user={username}
          />
        </View>
        <View style={css.input_group}>
          <Text style={css.input_text}>Email</Text>
          <TextInput
            style={css.input}
            placeholder="Write your Email"
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
            emailValue={email}
          />
        </View>
        <View style={css.input_group}>
          <Text style={css.input_text}>Password</Text>
          <TextInput
            style={css.input}
            placeholder="Write your Password"
            onChangeText={(value) => setPassword(value)}
            passwordValue={password}
          />
        </View>
        <View style={css.loginBtn}>
          <Button
            style={css.loginText}
            title="Signup"
            color={"white"}
            onPress={clickBtn}
          />
        </View>
      </View>
    </View>
  );
}

export default SignupScreen;

const css = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
  },
  form: {
    width: "100%",
    marginTop: 50,
    padding: 16,
    borderRadius: 10,
  },
  input_group: {
    display: "flex",
    flexDirection: "column",
  },
  input_text: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: 20,
  },
  input: {
    width: "100%",
    padding: 8,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "gray",
    marginBottom: 12,
    marginTop: 8,
  },
  loginBtn: {
    width: "30%",
    fontSize: 13,
    backgroundColor: "skyblue",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
  },
});
