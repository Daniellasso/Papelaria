import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.Image
        style={styles.img}
        source={require("../../assets/caderno.png")}
        animation={"flipInY"}
      />
      <Animatable.View style={styles.card} animation="fadeInUp" delay={500}>
        <View style={{ marginTop: 30 }}>
          <TextInput placeholder="Nome" style={styles.input} />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
          />
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text
              style={{ marginTop: -15, marginBottom: 10, color: "#ffffff" }}
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
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7F2EC"
  },
  img: {
    height: 250,
    resizeMode: "contain",
    marginTop: 50
  },
  card: {
    backgroundColor: "#47CACC",
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
    shadowColor: "#000000",
    elevation: 10,
    marginTop: -5
  },
  botao: {
    backgroundColor: "#CE93CB",
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
