import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCart() {
  const [numero, setNumero] = useState(0);

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
            <TouchableOpacity>
              <AntDesign name="plussquare" size={35} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* <View
        style={{
          backgroundColor: "#ffffffba",
          height: 70
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignItems: "center",
            marginVertical: 10
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "900" }}>Total:</Text>
          <Text style={{ fontSize: 25, marginLeft: 10, fontWeight: "500" }}>
            R$ {valor}
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "900",
                color: "#ff0000",
                marginLeft: 10
              }}
            >
              LIMPAR CARRINHO
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 170,
    height: 190
  }
});
