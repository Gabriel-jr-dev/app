import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DefinitionScreen({ route }) {
  const { palavra } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.palavra}>{palavra.palavra}</Text>
      <Text style={styles.definicao}>{palavra.definicao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  palavra: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  definicao: {
    fontSize: 18,
    marginTop: 20,
  },
});
