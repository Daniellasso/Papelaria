import React from "react";
import {
  Image,
  ScrollView,
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
      <ScrollView>
        <Animatable.Image
          animation={"flipInY"}
          style={styles.img}
          source={require("../../assets/caderno.png")}
        />
        <Animatable.View style={styles.card} animation="fadeInUp" delay={500}>
          <View style={{ marginTop: 30, height: "100%" }}>
            <TextInput placeholder="Nome" style={styles.input} />
            <TextInput placeholder="E-mail" style={styles.input} />
            <TextInput placeholder="Senha" style={styles.input} />
            <TextInput placeholder="(18) 99999-9999" style={styles.input} />
            <TextInput placeholder="CPF" style={styles.input} />
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ marginTop: -15, marginBottom: 10, color: "#fff" }}>
                Faça o login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.botaoText}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f6daff"
  },
  img: {
    height: 250,
    resizeMode: "contain",
    marginTop: 50,
    marginLeft: -50
  },
  card: {
    backgroundColor: "#c4a6fe",
    padding: 20,
    margin: 20,
    width: 350,
    borderRadius: 20,
    height: 500
  },
  input: {
    backgroundColor: "#F1E9E9",
    fontSize: 16,
    margin: 20,
    marginLeft: -5,
    width: "100%",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#bd09fe",
    elevation: 10,
    marginTop: -5
  },
  botao: {
    backgroundColor: "#f2c6ffd3",
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
