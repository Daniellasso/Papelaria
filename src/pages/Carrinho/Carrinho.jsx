import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import React, { useState } from "react";
import ProductCart from "../../components/ProductCart/ProductCart";


const produtos = [
  {
    id: 1,
    modelo: "Caderno",
    preco: "R$ 40,00",
    descricao: "Este é um caderno com papel de qualidade e uma capa durável.",
    imagem: require("../../imgs_prods/caderno.jpg")
  },
  {
    id: 2,
    modelo: "Lápis",
    preco: "R$ 1,50",
    descricao:
      "O lápiz escolar mais popular do mundo. Com ponta fina e durável.",
    imagem: require("../../imgs_prods/lapis.jpg")
  },
  {
    id: 3,
    modelo: "Caneta",
    preco: "R$ 7,99",
    descricao: "A caneta mais leve e bonita da loja.",
    imagem: require("../../imgs_prods/caneta.jpg")
  },
  {
    id: 4,
    modelo: "Borracha",
    preco: "R$ 3,99",
    descricao:
      "Uma borracha de alta qualidade para você escrever em confiança !",
    imagem: require("../../imgs_prods/borracha.jpg")
  },
  {
    id: 5,
    modelo: "Mochila Escolar",
    preco: "R$ 89,99",
    descricao:
      "A mochila escolar mais fashion que você encontrará na internet !",
    imagem: require("../../imgs_prods/mochila.jpg")
  },
  {
    id: 6,
    modelo: "Notebook",
    preco: "R$ 5.399,99",
    descricao: "O notebook mais completo para estudos ou trabalho.",
    imagem: require("../../imgs_prods/notebook.jpg")
  },
  {
    id: 7,
    modelo: "Caixa de Lápis Coloridos",
    preco: "R$ 39,99",
    descricao: `Essa caixa contém uma variedade de cores de lápis colorido, com cerca de 20 unidades.`,
    imagem: require("../../imgs_prods/lapisPintar.jpg")
  },
  {
    id: 8,
    modelo: "Canetinhas",
    preco: "R$ 19,99",
    descricao: `Lançamento do verão! Canetinhas de várias cores.`,
    imagem: require("../../imgs_prods/canetinha.jpg")
  },
  {
    id: 9,
    modelo: "Apontador",
    preco: "R$ 8,99",
    descricao: "Esse é o apontador digital mais leve e prático da loja.",
    imagem: require("../../imgs_prods/apontador.jpg")
  },
  {
    id: 10,
    modelo: "Cola Escolar",
    preco: "R$ 9,99",
    descricao:
      "A cola escolar mais duradoura que você encontra em nossas lojas.",
    imagem: require("../../imgs_prods/cola.jpg")
  },
  {
    id: 11,
    modelo: "Post-it",
    preco: "R$ 5,99",
    descricao: `Os melhores post-its do mercado, em qualidade superior.`,
    imagem: require("../../imgs_prods/postit.jpg")
  },
  {
    id: 12,
    modelo: "Estojo",
    preco: "R$ 19,99",
    descricao: `O estojo é perfeito para guardar suas canetas ou lápis. Ele possui um design moderno e confortável.`,
    imagem: require("../../imgs_prods/estojo.jpg")
  },
  {
    id: 13,
    modelo: "Kit Canetas Coloridas",
    preco: "R$ 29,99",
    descricao: `As canetas coloridas com as mais diversas cores. Compre agora e deixe suas anotações com muito mais destaque e beleza !`,
    imagem: require("../../imgs_prods/canetaBic.jpg")
  },
  {
    id: 14,
    modelo: "Lapiseira",
    preco: "R$ 17,99",
    descricao: `Lapiseira Energize - X Pentel Pl105 0.5 Com Borracha Cor Preto`,
    imagem: require("../../imgs_prods/lapiseira.jpg")
  },
  {
    id: 15,
    modelo: "Pasta",
    preco: "R$ 6,99",
    descricao: `Pasta com aba elástico polipropileno Ofício rosa pastel 0246 Dello PT 1 UN`,
    imagem: require("../../imgs_prods/pasta.jpg")
  },
  {
    id: 16,
    modelo: "Cartolina",
    preco: "R$ 2,19",
    descricao: `Cartolina para trabalhos escolares e artesanato.`,
    imagem: require("../../imgs_prods/cartolina.jpg")
  },
  {
    id: 17,
    modelo: "Placas de Isopor",
    preco: "R$ 1,99",
    descricao: `Placas Isopor Termo Acústica Antichamas Mofos e Umidades`,
    imagem: require("../../imgs_prods/isopor.jpg")
  },
  {
    id: 18,
    modelo: "Papel Sulfite",
    preco: "R$ 20,50",
    descricao: `Papel Sulfite, Chamex, A4, 75 Gramas, Pacote De 300 Folhas`,
    imagem: require("../../imgs_prods/sulfite.jpg")
  },
  {
    id: 19,
    modelo: "Marca Texto",
    preco: "R$ 14,99",
    descricao: `Marca Texto Stabilo Boss Original Bege`,
    imagem: require("../../imgs_prods/marcaTexto.jpg")
  },
  {
    id: 20,
    modelo: "Impressora",
    preco: "R$ 459,00",
    descricao: `Impressora Multifuncional HP Deskjet Ink Wi-Fi - 2774 Thermal Inkjet Colorida USB - Impressoras e Multifuncionais`,
    imagem: require("../../imgs_prods/impressora.jpg")
  },
  {
    id: 21,
    modelo: "Cartucho para Impressora",
    preco: "R$ 150,00",
    descricao: `Kit Cartucho de Tinta HP 667 Preto + 667 Colorido para HP Deskjet Ink Advantage 2776 2774 2376 6476 Original`,
    imagem: require("../../imgs_prods/ngcDeImpressora.jpg")
  },
  {
    id: 22,
    modelo: "Calculadora",
    preco: "R$ 150,00",
    descricao: `Calculadora Casio MS-80VER`,
    imagem: require("../../imgs_prods/calculadora.jpg")
  },
  {
    id: 23,
    modelo: "Clips de Papel",
    preco: "R$11,53",
    descricao: `Clipes de papel padrão, cinza, 100/pacote, pequeno 1`,
    imagem: require("../../imgs_prods/clipes.jpg")
  },
  {
    id: 24,
    modelo: "Grampo Grampeador 26/6",
    preco: "R$15,90",
    descricao: `Grampo Grampeador 26/6 Galvanizado C/5000 Unidade Escritório`,
    imagem: require("../../imgs_prods/grampeador.jpg")
  }
];

export default function Carrinho() {
   const [carrinho, setCarrinho] = useState([]);

   const adicionarAoCarrinho = (produto) => {
     setCarrinho((carrinhoAtual) => [...carrinhoAtual, produto]);
   };
  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
    <FlatList
      data={produtos}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image style={styles.img} source={item.imagem} />
          <View style={styles.info}>
            <View style={{ height: "100%" }}>
              <Text style={styles.title}>{item.modelo}</Text>
              <Text style={styles.description}>{item.descricao}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.price}>{item.preco}</Text>
                <TouchableOpacity onPress={() => adicionarAoCarrinho(item)}>
                  <FontAwesome name="shopping-cart" size={30} color="black" style={{ marginLeft: 10 }} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
    />
    {/* Adicionar visualização do carrinho aqui, se necessário */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff6ec"
  }
});
