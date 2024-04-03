import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React from "react";
import ProductCart from "../../components/ProductCart/ProductCart";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </View>
      </ScrollView>
      <View
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
            R$ 54.00
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6daff"
  }
});
