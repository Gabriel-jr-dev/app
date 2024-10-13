// screens/HomeScreen.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import palavras from "../assets/palavras.json"; // Ajuste o caminho se necessário

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");
  const [filteredPalavras, setFilteredPalavras] = useState([]);
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredPalavras([]);
    } else {
      const results = palavras.filter((p) =>
        p.palavra_en.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPalavras(results);
    }
  }, [search]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate("Definition", { palavra: item })}
    >
      <Text style={styles.palavra}>
        {item.palavra_en} - {item.palavra_pt}
      </Text>
    </TouchableOpacity>
  );

  if (isSplashVisible) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            placeholder="Buscar palavra em inglês..."
            value={search}
            onChangeText={(text) => setSearch(text)}
          />
        </View>
        {filteredPalavras.length > 0 ? (
          <FlatList
            data={filteredPalavras}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
          />
        ) : (
          search.trim() !== "" && (
            <Text style={styles.noResults}>Nenhuma palavra encontrada.</Text>
          )
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  search: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  palavra: {
    fontSize: 18,
    color: "#333",
  },
  noResults: {
    fontSize: 18,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
});
