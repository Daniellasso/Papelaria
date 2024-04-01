import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function CardCategori() {
  return (
    <View
      style={{
        alignItems: "flex-start",
        marginHorizontal: 5,
        marginVertical: 20
      }}
    >
      <TouchableOpacity>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              backgroundColor: "#565252",
              borderRadius: 50,
              padding: 20,
              width: 10
            }}
          ></View>
          <Text>Categotia</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
