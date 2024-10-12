import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function SearchResultsScreen({ route, navigation }) {
  const { filteredPalavras } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('Definition', { palavra: item })}
    >
      <Text style={styles.palavra}>{item.palavra_en} - {item.palavra_pt}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {filteredPalavras.length > 0 ? (
        <FlatList
          data={filteredPalavras}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Text style={styles.noResults}>Nenhuma palavra encontrada.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  palavra: {
    fontSize: 18,
    color: '#333',
  },
  noResults: {
    fontSize: 18,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});
