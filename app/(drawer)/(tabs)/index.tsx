// import React from "react";
// import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";

// const data = [
//   {
//     id: "1",
//     title: "Drawings",
//     description: "Electrical & Mechanical Schem...",
//     icon: "https://cdn-icons-png.flaticon.com/512/337/337946.png", // Ícone PDF exemplo
//   },
//   {
//     id: "2",
//     title: "Docs Shared",
//     description: "Data Sheets, Warrants & Instructions...",
//     icon: "https://cdn-icons-png.flaticon.com/512/716/716784.png", // Ícone de compartilhamento exemplo
//   },
// ];

// const ListItem = ({ item }) => (
//   <TouchableOpacity style={styles.item}>
//     <Image source={{ uri: item.icon }} style={styles.icon} />
//     <View>
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.description}>{item.description}</Text>
//     </View>
//   </TouchableOpacity>
// );

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <ListItem item={item} />}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 5, // Controle de espaçamento horizontal
//     backgroundColor: "#f5f5f5",
//   },
//   item: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     padding: 15, // Menor padding para diminuir o tamanho dos itens
//     marginVertical: 2, // Diminuir ainda mais o espaçamento entre os itens
//     borderRadius: 5,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     elevation: 3,
//   },
//   icon: {
//     width: 40,
//     height: 40,
//     marginRight: 10, // Espaço entre o ícone e o texto
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   description: {
//     fontSize: 14,
//     color: "#666",
//   },
// });

import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Drawings',
    description: 'Electrical & Mechanical Schem...',
    image: 'https://via.placeholder.com/300', // Exemplo de imagem
    icon: 'https://as2.ftcdn.net/jpg/01/09/07/43/1000_F_109074362_OEISoYgpTh12fXl7KQm8E3jFLPHREdvT.jpg', // Ícone PDF exemplo
  },
  {
    id: '2',
    title: 'Docs Shared',
    description: 'Data Sheets, Warrants & Instructions...',
    image: 'https://via.placeholder.com/300', // Exemplo de imagem
    icon: 'https://parker-design.co.uk/assets/datasheet-design-allmed-data-sheets.jpg', // Ícone de compartilhamento exemplo
  },
  {
    id: '3',
    title: 'Apartment Progress',
    description: 'Site updates & future endsa...',
    image: 'https://via.placeholder.com/300', // Exemplo de imagem
    icon: 'https://www.squadrapvc.com.br/img/blog/grande/9096383d22567dd1a505888d438f34ac.webp', // Ícone de compartilhamento exemplo
  },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(data[0]); // Para armazenar o item atual

  // Atualizar o estado do item atual assim que o índice mudar
  useEffect(() => {
    setCurrentItem(data[currentIndex]);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Carousel */}
      <Carousel
        loop
        width={width}
        height={350}
        data={data}
        scrollAnimationDuration={800}
        mode="parallax"
        onSnapToItem={(index) => setCurrentIndex(index)} // Atualiza o índice do item atual
        modeConfig={{
          parallaxScrollingScale: 0.75,
          parallaxScrollingOffset: 120,
        }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            
            {/* Ícone dentro do Carousel */}
            <Image source={{ uri: item.icon }} style={styles.carouselIcon} />
            
            <View style={styles.cardTextContainer}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />

      {/* Indicadores de navegação (bolinhas) */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index && styles.paginationDotActive, // Ativa a bolinha correspondente ao índice
            ]}
          />
        ))}
      </View>
      
      {/* Texto abaixo do Carousel */}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{currentItem.title}</Text>
        <Text style={styles.text}>{currentItem.description}</Text>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: "#f5f5f5",
    top: -20,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#00000023',
    elevation: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width - 40,
    height: 300,
    borderRadius: 20,
  },
  carouselIcon: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  cardTextContainer: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  textContainer: {
    padding: 10,
    backgroundColor: '#7c8289',
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#d3d3d364',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#7c828960', // Cor do indicador ativo
  },
});

export default App;
