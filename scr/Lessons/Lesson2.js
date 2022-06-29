import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

function Lesson2(){
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [display, setDisplay] = useState(false);

    const changeName = () => {
      setName(!name),
      setAge(!age)
    }
    const displayValue = () => {
     setDisplay(!display)
    }
    return (
      <View style={styles.container}>
        {/* <Text style={styles.text}>Hello my name is {name ? "BatOrgil" : "Bold"}</Text>
        <Text style={styles.text}>Hello i am {age ? 19 : 21} years old </Text>
        <View>
          <Button
            style={styles.btn}
            title="click me to change my name"
            onPress={changeName}
          ></Button>
        </View> */}
        {display && (
          <Text style={styles.text}>
            Name: {name} Age: {age}
          </Text>
        )}

        <Text style={styles.text}>Name:</Text>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={(value) => setName(value)}
        />
        <Text style={styles.text}>Age:</Text>
        <TextInput
          placeholder="age"
          style={styles.input}
          onChangeText={(value) => setAge(value)}
        />

        <Button
          style={styles.btn}
          onPress={displayValue}
          title="Click"
        ></Button>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    marginVertical: 30,
    marginHorizontal: 30,
    textAlign: "center"
  },
  btn: {
    width: "50%",
    fontSize: 13,
    backgroundColor: "skyblue",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderWidth: 1,
  },
  input: {
    borderWidth: 1,
    width: "80%",
    paddingHorizontal: 8,
    paddingVertical: 6 ,
    backgroundColor: "white"

  }
});

export default Lesson2