import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import Routes from "./src/routes";
import RoutesTabs from "./src/routesTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#027cfe" barStyle="light-content" />
      <Routes />
      {/* <RoutesTabs /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
