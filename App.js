import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import DefinitionScreen from "./DefinitionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Dicionário" }}
        />
        <Stack.Screen
          name="Definition"
          component={DefinitionScreen}
          options={{ title: "Definição" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
