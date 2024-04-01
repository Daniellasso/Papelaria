import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Produtos() {
  return (
    <View>
      <TouchableOpacity>
        <View style={{ marginHorizontal: 10, marginTop: 10, marginBottom: 20 }}>
          <View>
            <Image
              style={styles.img}
              source={require("../../assets/semImagem.png")}
            />
          </View>
          <View
            style={{
              width: "100%",
              backgroundColor: "#cfcfcfe9",
              paddingLeft: 5,
              paddingTop: 10,
              paddingBottom: 10
            }}
          >
            <Text style={{ fontSize: 20 }}>NomeProduto</Text>
            <Text style={{ fontSize: 16 }}>Descrição...</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 250
  }
});
