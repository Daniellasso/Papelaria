import React from "react";
import { StyleSheet, StatusBar, View, Platform } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#000" // Efetivo somente no Android
        barStyle="light-content" // 'dark-content', 'light-content', etc.
      />
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
