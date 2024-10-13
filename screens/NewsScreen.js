// screens/NewsScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function NewsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Últimas Notícias</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
