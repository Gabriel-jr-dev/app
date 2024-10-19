import React from "react";
import { View, StyleSheet, ActivityIndicator, TouchableOpacity, Text, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import Icon from "react-native-vector-icons/Ionicons";

export default function WebViewScreen({ route, navigation }) {
  const { url } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header personalizado */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Notícias")}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Conteúdo da WebView */}
      <WebView
        originWhitelist={["*"]}
        source={{ uri: url }}
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={true}
        startInLoadingState={true}
        renderLoading={() => (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Evita flash branco em transições
  },
  header: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
