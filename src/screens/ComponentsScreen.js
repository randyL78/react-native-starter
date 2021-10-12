import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = 'Randy';

  return (
    <View>
      <Text style={styles.titleStyle}>Getting started with react native!</Text>
      <Text style={styles.greetingStyle}>My name is {greeting}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 45
  },
  greetingStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
