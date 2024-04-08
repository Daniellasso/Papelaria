
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardCategori from "../../components/CardCategori/CardCategori";
import Produtos from "../../components/Produtos/Produtos";

export default function Home() {
  return (
    <View style={styles.container}>
        <View>
          <View>
            <Image
              style={styles.img}
              source={require("../../assets/BANNER_PAPELARIA.png")}
            />
          </View>
          <CardCategori />
      <ScrollView>
          <Produtos />
      </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6daff"
  },
  img: {
    width: "100%",
    height: 150
  }
});
