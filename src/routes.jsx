import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import RoutesTabs from "./routesTabs";
import Descricao from "./pages/Descricao/Descricao";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={RoutesTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ title: "Cadastro", headerShown: false }}
        />
        <Stack.Screen
          name="Descricao"
          component={Descricao}
          options={{ title: "Descricao", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
