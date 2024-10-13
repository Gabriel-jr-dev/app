import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ícones da sidebar
import HomeScreen from './HomeScreen'; // Importando a tela principal

// Criação do Drawer Navigator
const Drawer = createDrawerNavigator();

// Tela "Sobre"
function AboutScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Este é um dicionário Inglês-Português!</Text>
    </View>
  );
}

// Tela "Configurações"
function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Configurações do Aplicativo</Text>
    </View>
  );
}

// App Principal com navegação por Drawer
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerStyle: { backgroundColor: '#fff', width: 240 },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="information-circle-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Configurações"
          component={SettingsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="settings-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
