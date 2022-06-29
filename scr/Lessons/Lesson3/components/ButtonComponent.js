import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComponent = ({text, type="PRIMARY", onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
        <Text style={[styles.button, styles[`text_${type}`]]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#3B71F3",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  btn: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container_Google: {
    backgroundColor: "#FAE9EA",
  },
  text_Google: {
    color: "#DD4D44",
  },
  container_Forget: {
    backgroundColor: "#e3e3e3",
  },
  text_Forget: {
    color: "#363636",
  },
  container_Facebook: {
    backgroundColor: "#E7EAF4",
  },
  text_Facebook: {
    color: "#4765A9",
  },
  container_Create: {
    backgroundColor: "white",
  },
  text_Create: {
    color: "gray",
  },
});