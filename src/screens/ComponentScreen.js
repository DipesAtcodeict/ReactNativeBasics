import React from "react";
import { Text, StyleSheet,View } from "react-native";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started With React Native</Text>
      <Text>My name is Dipesh Chaulagain !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "white",
    backgroundColor: "blue",
    textAlign: "center",
    padding:10,
    margin:10,
    borderRadius:10
  },
});

export default ComponentScreen;
