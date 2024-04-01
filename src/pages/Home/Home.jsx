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
              source={require("../../assets/BANNER_PAPELARIA.png")}
            />
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardCategori />
            <CardCategori />
            <CardCategori />
            <CardCategori />
            <CardCategori />
            <CardCategori />
            <CardCategori />
          </ScrollView>
          <View style={{ flexDirection: "row", width: 900 }}>
            <Produtos />
            <Produtos />
          </View>

          <View style={{ flexDirection: "row", width: 900 }}>
            <Produtos />
            <Produtos />
          </View>

          <View style={{ flexDirection: "row", width: 900 }}>
            <Produtos />
            <Produtos />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C3BEFA"
  },
  img: {
    width: "100%",
    height: 150
  }
});
