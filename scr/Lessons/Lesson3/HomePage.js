import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { categories } from "./data/data";

const HomePage = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("");

  useEffect(() => {
    setData(categories);
  }, []);

  return (
    <SafeAreaView style={styles.scroll}>
      <ScrollView>
        <Text style={styles.title}>Recipe App</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.container}>
                <Image
                  key={item.id}
                  style={styles.photo}
                  source={{ uri: item.photo_url }}
                  resizeMode="cover"
                />
                <View style={styles.detail}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>
                    Lorem upsum i do not know latin things
                  </Text>
                </View>
                {/* <TouchableOpacity style={styles.button}>
                  <Text style={styles.see}>See</Text>
                  <Text style={styles.more}>More</Text>
                </TouchableOpacity> */}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
    title: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontSize: 25,
        fontWeight: "300"
    },
  scroll: {
    maxWidth: "100%",
    backgroundColor: "#e6e6e6",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 10,
    borderRadius: "5%",
    // width: "100%",
  },
  text: {
    fontSize: 40,
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: "50%",
    marginHorizontal: 5,
  },
  detail: {
    width: "50%",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 16,
    paddingBottom: 2,
    fontWeight: "500",
    color: "#333333",
  },
  info: {
    color: "gray",
  },
  button: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: "50%",
    backgroundColor: "white",
    marginHorizontal: 5,
  },
  see: {
    textAlign: "center",
    fontSize: 10,
    paddingTop: 10,
  },
  more: {
    textAlign: "center",
    // marginTop: 5,
    fontSize: 10,
  },
});
