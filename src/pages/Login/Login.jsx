import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/caderno.png")} />
      <View style={styles.card}>
        <View style={{ marginTop: 30 }}>
          <TextInput placeholder="Nome" style={styles.input} />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text
              style={{ marginTop: -15, marginBottom: 10, color: "#c6c6c6" }}
            >
              Não possui uma conta? Cadastre-se
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.botaoText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#C3BEFA"
  },
  img: {
    height: 250,
    resizeMode: "contain",
    marginTop: 50
  },
  card: {
    backgroundColor: "#7534FA",
    padding: 20,
    margin: 20,
    width: 350,
    borderRadius: 20,
    height: 300
  },
  input: {
    backgroundColor: "#F1E9E9",
    fontSize: 16,
    margin: 20,
    marginLeft: -5,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#099cfe",
    elevation: 10,
    marginTop: -5
  },
  botao: {
    backgroundColor: "#5287FA",
    padding: 20,
    borderRadius: 20,
    width: "100%"
  },
  botaoText: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    shadowColor: "#000",
    elevation: 10
  }
});
