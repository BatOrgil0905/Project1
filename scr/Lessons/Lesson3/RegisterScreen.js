import React, {useState} from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import SignInputComponent from "./components/SignInputComponent";
import ButtonComponent from "./components/ButtonComponent";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <SignInputComponent
        placeholder="Username"
        value={username}
        setValue={setUsername}
        secret={false}
      />
      <SignInputComponent
        placeholder="Email"
        value={email}
        setValue={setEmail}
        keyboardType="email-address"
        secret={false}
      />
      <SignInputComponent
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secret={true}
      />
      <SignInputComponent
        placeholder="Repeat Password"
        value={repeatPassword}
        setValue={setRepeatPassword}
        secret={true}
      />
      <ButtonComponent text="Register" type="Sign" />
      <Text style={styles.policy}>
        By Registering, you confirm that you accept out{" "}
        <Text style={styles.terms}>Term of Use</Text> and{" "}
        <Text style={styles.terms}>Privacy Policy</Text>{" "}
      </Text>
      <ButtonComponent text="Sign in with Google" type="Google" />
      <ButtonComponent text="Sign in with Facebook" type="Facebook" />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  loginImage: {
    width: "100%",
    height: 50,
    marginVertical: 20,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 20,
    color: "purple"
  },
  policy: {
    width: "90%",
    alignItems: "center",
    color: "gray",
    marginVertical: 5
  },
  terms: {
    fontWeight: "normal",
    color: "orange"
  }
});
