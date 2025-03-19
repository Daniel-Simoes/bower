import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";

const data = [
  {
    id: "1",
    title: "Drawings",
    description: "Electrical & Mechanical Schem...",
    icon: "https://cdn-icons-png.flaticon.com/512/337/337946.png", // Ícone PDF exemplo
  },
  {
    id: "2",
    title: "Docs Shared",
    description: "Data Sheets, Warrants & Instructions...",
    icon: "https://cdn-icons-png.flaticon.com/512/716/716784.png", // Ícone de compartilhamento exemplo
  },
];

const ListItem = ({ item }) => (
  <TouchableOpacity style={styles.item}>
    <Image source={{ uri: item.icon }} style={styles.icon} />
    <View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5, // Controle de espaçamento horizontal
    backgroundColor: "#f5f5f5",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15, // Menor padding para diminuir o tamanho dos itens
    marginVertical: 2, // Diminuir ainda mais o espaçamento entre os itens
    borderRadius: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10, // Espaço entre o ícone e o texto
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
