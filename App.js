// App.js
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen"; // Importando a tela principal
import DefinitionScreen from "./DefinitionScreen"; // Importando a tela de definição
import NewsScreen from "./screens/NewsScreen"; // Importe a noticias
import AboutScreen from "./screens/AboutScreen"; // Importe a about
import SettingsScreen from "./screens/SettingsScreen"; // Importe settings
import WebViewScreen from "./screens/WebViewScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// function NewsStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="News" component={NewsScreen} />
//       <Stack.Screen
//         name="NewsDetail"
//         component={NewsDetailScreen}
//         options={{ title: "Detalhes da Notícia" }}
//       />
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          drawerStyle: { backgroundColor: "#fff", width: 240 },
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
          name="Definition"
          component={DefinitionScreen}
          options={{
            drawerItemStyle: { display: "none" }, // Oculta na navegação se não quiser acesso por lá
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={AboutScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon
                name="information-circle-outline"
                size={size}
                color={color}
              />
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
        <Drawer.Screen
          name="Notícias"
          component={NewsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Icon name="newspaper-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="WebView"
          component={WebViewScreen}
          options={{
            drawerItemStyle: { height: 0 },
            headerShown: false, // Opcional: Oculta a tela do menu
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
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
