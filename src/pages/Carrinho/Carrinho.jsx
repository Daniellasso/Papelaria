import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Carrinho({ route }) {
  const { carrinho } = route.params;

  const [numero, setNumero] = useState(0);

  function adicionar() {
    setNumero(numero + 1);
  }
  function subtrair() {
    setNumero(numero - 1);
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagem} style={{ width: 150, height: 150 }} />
            <View>
              <Text
                style={{
                  paddingLeft: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                  width: 150
                }}
              >
                {item.modelo}
              </Text>
              <View style={{ flexDirection: "row", paddingTop: 10 }}>
                <TouchableOpacity onPress={adicionar}>
                  <Text>
                    <AntDesign name="plussquare" size={40} color="black" />
                  </Text>
                </TouchableOpacity>
                <TextInput
                  value={numero.toString()}
                  style={{
                    backgroundColor: "gray",
                    width: 40,
                    fontSize: 20,
                    textAlign: "center",
                    height: 38
                  }}
                  keyboardType="numeric"
                />
                <TouchableOpacity onPress={subtrair}>
                  <Text>
                    <AntDesign name="minussquare" size={40} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  paddingLeft: 10,
                  fontSize: 20,
                  paddingTop: 45
                }}
              >
                {item.preco}
              </Text>
            </View>
          </View>
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
    backgroundColor: "#fff6ec"
  },
  card: {
    marginTop: 25,
    width: "100%",
    borderRadius: 10,
    padding: 10,
    shadowRadius: 10,
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#e67b00"
  }
});
