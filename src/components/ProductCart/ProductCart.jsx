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

export default function ProductCart() {
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
    setNumero(numero - 1);
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
          <Text style={{ fontSize: 20, marginLeft: 10 }}>NomeProduto</Text>
          <View style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}>
            <TouchableOpacity onPress={subtrair}>
              <View>
                <AntDesign name="minussquare" size={35} color="black" />
              </View>
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
              onChangeText={(text) => setNumero(text)}
              editable={false}
            />
            <TouchableOpacity onPress={adicionar}>
              <View>
                <AntDesign name="plussquare" size={35} color="black" />
              </View>
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
            <Text style={{ fontSize: 16, marginHorizontal: 10 }}>R$ 12.00</Text>
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
