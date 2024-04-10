import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardCategori from "../../components/CardCategori/CardCategori";
import Produtos from "../../components/Produtos/Produtos";

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Image
              style={styles.img}
              source={require("../../assets/BannerPapelaria2.jpg")}
            />
          </View>
          <CardCategori />
          <Produtos />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  img: {
    width: "100%",
    height: 190
  }
});
