import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  Image
} from "react-native";

export default function CardCategori() {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://192.168.0.107:3000/categorias")
      .then((response) => response.json())
      .then((json) => setCategorias(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categorias}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <Image source={{ uri: item.imagem }} style={styles.image} />
              <Text style={styles.text}>{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5
  },
  card: {
    alignItems: "center",

    borderRadius: 8,
    overflow: "hidden"
  },
  cardContent: {
    alignItems: "center",
    padding: 10
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  text: {
    marginTop: 8
  }
});
