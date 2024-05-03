import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import ProductCart from "../../components/ProductCart/ProductCart";

export default function Carrinho() {
  // Estado inicial para produtos no carrinho
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Produto 1", preco: 10.00 },
    { id: 2, nome: "Produto 2", preco: 12.00 },
    { id: 3, nome: "Produto 3", preco: 15.00 },
    { id: 4, nome: "Produto 4", preco: 8.00 },
    { id: 5, nome: "Produto 5", preco: 9.00 }
  ]);

  // Função para calcular o total
  const calcularTotal = () => {
    return produtos.reduce((total, produto) => total + produto.preco, 0).toFixed(2);
  };

  // Função para remover todos os produtos
  const limparCarrinho = () => {
    setProdutos([]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ width: "100%" }}>
          {produtos.map((produto) => (
            <ProductCart key={produto.id} nome={produto.nome} preco={produto.preco} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>R$ {calcularTotal()}</Text>
          <TouchableOpacity onPress={limparCarrinho}>
            <Text style={styles.limparCarrinhoText}>LIMPAR CARRINHO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6ec"
  },
  bottomBar: {
    backgroundColor: "#ffffffba",
    height: 70
  },
  totalContainer: {
    flexDirection: "row",
    marginLeft: 10,
    alignItems: "center",
    marginVertical: 10
  },
  totalText: {
    fontSize: 30,
    fontWeight: "900"
  },
  totalAmount: {
    fontSize: 25,
    marginLeft: 10,
    fontWeight: "500"
  },
  limparCarrinhoText: {
    fontSize: 18,
    fontWeight: "900",
    color: "#CE93CB",
    marginLeft: 10
  }
});
