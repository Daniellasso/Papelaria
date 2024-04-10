import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Routes from "./src/routes";
import RoutesTabs from "./src/routesTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#8309fe"  barStyle="light-content" />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
