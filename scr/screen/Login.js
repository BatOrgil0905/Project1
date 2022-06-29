import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";

function LoginScreen({ navigation, emailValue, passwordValue }) {

  const clickBtn = () => {
    navigation.navigate("Home");
  };

  const signUp = () => {
    navigation.navigate("Signup");
  };

  return (
    <View>
      <Text style={css.title}>Login Page</Text>
      <Text>{emailValue}</Text>
      <View style={css.form}>
        <View style={css.input_group}>
          <Text style={css.input_text}>Email</Text>
          <TextInput
            style={css.input}
            placeholder="Write your Email"
            keyboardType="email-address"
            value={emailValue}
          />
        </View>
        <View style={css.input_group}>
          <Text style={css.input_text}>Password</Text>
          <TextInput
            style={css.input}
            placeholder="Write your Password"
            value={passwordValue}
          />
        </View>
        <View style={css.forgot_section}>
          <TouchableOpacity>
            <Text style={css.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={css.loginBtn}>
          <Button
            style={css.loginText}
            title="Login"
            color={"white"}
            onPress={clickBtn}
          />
        </View>
        <View style={css.bottom}>
          <Text>Haven't sign up yet</Text>
          <View style={css.signup_section}>
            <TouchableOpacity>
              <Button
                title="Sign up"
                style={css.sign_up}
                color={"white"}
                onPress={signUp}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;

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
  forgot_section: {
    marginBottom: 20,
  },
  signup_section: {
    display: "flex",
    backgroundColor: "skyblue",
    margin: 12,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 5,
  },

  loginBtn: {
    width: "30%",
    fontSize: 13,
    backgroundColor: "skyblue",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    alignItems: "center",
    margin: 16,
    marginTop: 30,
  },
});
