import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import CardCategori from "../../components/CardCategori/CardCategori";
import Produtos from "../../components/Produtos/Produtos";
import { FontAwesome } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.img}
          source={require("../../assets/BannerPapelaria2.jpg")}
        />
        <CardCategori />
        <Produtos />
      </View>
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
    height: 150
  }
});
