import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";

// Adicione props como argumento aqui
export default function ProductCart({ nome, preco }) {
  const [save, setSave] = useState(false);
  const animacao = useRef(null);
  const renderizar = useRef(true);
  const [numero, setNumero] = useState(1);

  useEffect(() => {
    if (renderizar.current) {
      if (save) {
        animacao.current.play(60, 60);
      } else {
        animacao.current.play(0, 0);
      }

      renderizar.current = false;
    } else if (save) {
      animacao.current.play(0, 60);
    } else {
      animacao.current.play(60, 0);
    }
  }, [save]);

  function adicionar() {
    setNumero(numero + 1);
  }
  function subtrair() {
    if (numero > 1) {
      setNumero(numero - 1);
    }
  }

  return (
    <View>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          marginBottom: 10,
          flexDirection: "row"
        }}
      >
        <View>
          <Image
            style={styles.img}
            source={require("../../assets/semImagem.png")}
          />
        </View>
        <View
          style={{
            width: "50%",
            backgroundColor: "#cfcfcfe9",
            paddingLeft: 5,
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          {/* Utilize a prop 'nome' para definir o nome do produto */}
          <Text style={{ fontSize: 20, marginLeft: 10 }}>{nome}</Text>
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
            <TouchableOpacity onPress={subtrair}>
              <AntDesign name="minussquare" size={35} color="black" />
            </TouchableOpacity>
            <TextInput
              style={{
                marginLeft: 5,
                marginTop: -2,
                fontSize: 25,
                color: "#000",
                marginRight: 5
              }}
              value={numero.toString()}
              onChangeText={(text) => setNumero(Number(text))}
              editable={false}
            />
            <TouchableOpacity onPress={adicionar}>
              <AntDesign name="plussquare" size={35} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              paddingTop: 50
            }}
          >
            {/* Utilize a prop 'preco' para definir o preço do produto */}
            <Text style={{ fontSize: 16, marginHorizontal: 10 }}>R$ {preco.toFixed(2)}</Text>
            <TouchableOpacity
              onPress={() => {
                setSave(!save);
              }}
            >
              <LottieView
                source={require("../../assets/Licheira.json")}
                autoPlay={false}
                loop={false}
                style={{ height: 50, width: 50 }}
                ref={animacao}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 190
  }
});
