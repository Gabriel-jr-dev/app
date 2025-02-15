// screens/NewsScreen.js
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
  Image, // Importando o componente Image
} from "react-native";
import axios from "axios";

const API_KEY = "5c93b9fa2c7b40989de0efe3a1121a65"; // Insira sua chave da API aqui
const NEWS_URL = `https://newsapi.org/v2/top-headlines?language=en&apiKey=${API_KEY}`;

// Função para formatar a data
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(NEWS_URL);
      setNews(response.data.articles);
      setError(null); // Limpa erro, se houver
      console.log(response.data.articles);
    } catch (err) {
      setError("Erro ao carregar as notícias. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  // Função para o pull-to-refresh
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchNews();
    setRefreshing(false);
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("WebView", { url: item.url })}
    >
      <View style={styles.newsItem}>
        {item.urlToImage && ( // Verifica se a URL da imagem existe
          <Image source={{ uri: item.urlToImage }} style={styles.image} />
        )}
        <Text style={styles.source}>{item.source.name}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{formatDate(item.publishedAt)}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={news}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  newsItem: {
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  image: {
    width: "100%", // Ajusta a largura da imagem
    height: 200, // Define uma altura fixa
    borderRadius: 8, // Bordas arredondadas
    marginBottom: 10, // Espaço abaixo da imagem
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
  },
  source: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#555",
    marginBottom: 5,
  },
  error: {
    color: "red",
    fontSize: 16,
  },
});
