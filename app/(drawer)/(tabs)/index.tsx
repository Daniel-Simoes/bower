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
// });import React, { useState } from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const { width } = Dimensions.get('window');

const data = [
  { 
    id: '1', 
    titleC: 'Drawings', 
    descriptionC: 'Electrical & Mechanical Schem...', 
    title: 'Drawings', 
    type: 'Drawings', 
    description: 'Electrical & Mechanical Schem...', 
    image: 'https://as2.ftcdn.net/jpg/01/09/07/43/1000_F_109074362_OEISoYgpTh12fXl7KQm8E3jFLPHREdvT.jpg', 
    icon: "file-pdf", 
  },
  { 
    id: '2', 
    titleC: 'Docs Shared', 
    descriptionC: 'Data Sheets, Warrants & Instructions...', 
    title: 'Docs Shared', 
    type: 'Docs Shared', 
    description: 'Data Sheets, Warrants & Instructions...', 
    image: 'https://parker-design.co.uk/assets/datasheet-design-allmed-data-sheets.jpg', 
    icon: "creative-commons-share",
   },
  { 
    id: '3', 
    titleC: 'Apartment Progress', 
    descriptionC: 'Site updates & future ends...', 
    title: 'Apartment Progress', 
    type: 'Apartment Progress', 
    description: 'Site updates & future ends...', 
    image: 'https://www.squadrapvc.com.br/img/blog/grande/9096383d22567dd1a505888d438f34ac.webp', 
    icon: 'chart-bar',
   },
  { 
    id: '4', 
    titleC: 'Docs Shared', 
    descriptionC: 'Data Sheets, Warrants & Instructions...', 
    title: 'Docs Shared', 
    type: 'Docs Shared', 
    description: 'Electrical & Mechanical Schem...', 
    image: 'https://parker-design.co.uk/assets/datasheet-design-allmed-data-sheets.jpg', 
    icon: "creative-commons-share",
   },
  { 
    id: '5', 
    titleC: 'Apartment Progress', 
    descriptionC: 'Site updates & future ends...', 
    title: 'Apartment Progress', 
    type: 'Apartment Progress', 
    description: 'Data Sheets, Warrants & Instructions...', 
    image: 'https://www.squadrapvc.com.br/img/blog/grande/9096383d22567dd1a505888d438f34ac.webp', 
    icon: 'chart-bar',
   },
];

// Função para agrupar os itens por tipo e remover duplicatas dentro de cada grupo
const groupByType = (data) => {
  const grouped = {};

  data.forEach((item) => {
    if (!grouped[item.type]) {
      grouped[item.type] = { type: item.type, items: [] };
    }

    // Verifica se já existe um item com o mesmo titleC e descriptionC no grupo
    const isDuplicate = grouped[item.type].items.some(
      (existingItem) => existingItem.titleC === item.titleC && existingItem.descriptionC === item.descriptionC
    );

    if (!isDuplicate) {
      grouped[item.type].items.push(item);
    }
  });

  return Object.values(grouped);
};

const groupedData = groupByType(data);

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState(groupedData[0]?.type || ''); // Inicializa com o primeiro tipo disponível

  return (
    <View style={styles.container}>
      {/* Carousel */}
      <Carousel
        loop
        width={width}
        height={350}
        data={groupedData}
        scrollAnimationDuration={800}
        mode="parallax"
        onSnapToItem={(index) => {
          setCurrentIndex(index);
          setSelectedType(groupedData[index].type); // Atualiza o tipo selecionado
        }}
        modeConfig={{
          parallaxScrollingScale: 0.75,
          parallaxScrollingOffset: 120,
        }}
        renderItem={({ item }) => {
          const imageUri = item.items.length > 0 ? item.items[0].image : 'https://via.placeholder.com/300';

          return (
            <View style={styles.card}>
              <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
              <View style={styles.cardTextContainer}>
                <Text style={styles.cardTitle}>{item.type}</Text>
                {item.items.map((subItem) => (
                  <View key={subItem.id} style={styles.subItemContainer}>
                    <Text style={styles.subItemText}>{subItem.descriptionC}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        }}
      />

      {/* Indicadores de navegação */}
      <View style={styles.pagination}>
        {groupedData.map((_, index) => (
          <View key={index} style={[styles.paginationDot, currentIndex === index && styles.paginationDotActive]} />
        ))}
      </View>
      
      {/* FlatList Filtrada */}
      <View style={styles.containerf}>
        <Text style={styles.sectionTitlef}>{selectedType} Features</Text>
        <FlatList
          data={data.filter((item) => item.type === selectedType)} // Mostra apenas itens do tipo selecionado
          keyExtractor={(item) => item.id}
          style={{backgroundColor:'#FFFFFF',borderRadius:12}}
          renderItem={({ item }) => (
            <View style={styles.cardf}>
              <FontAwesome6 name={item.icon} size={20} color="#565656" style={styles.iconf}/>
              <View style={styles.textContainerf}>
                <Text style={styles.titlef}>{item.title}</Text>
                <Text style={styles.descriptionf}>{item.description}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={styles.separatorf} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 5, backgroundColor: "#F3F3F4", top: -20 },
  card: { borderRadius: 20, overflow: 'hidden', elevation: 5, marginBottom: 10, justifyContent: 'center', alignItems: 'center' },
  image: { width: width, height: 300, },
  cardTextContainer: { padding: 15, backgroundColor: '#ffffff', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, width: '100%' },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  subItemContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  subItemText: { fontSize: 14, color: '#666' },
  pagination: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: -15,
    marginBottom:30 
  },
  paginationDot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: '#d3d3d364', 
    marginHorizontal: 5 
  },
  paginationDotActive: { 
    backgroundColor: '#d3d3d364',  // Azul do app (você pode alterar o código da cor para o azul que preferir)
    width: 10,  // Aumenta o tamanho do indicador ativo
    height: 10,  // Aumenta o tamanho do indicador ativo
    borderRadius: 6,  // Mantém o formato arredondado,
    borderWidth: 1,
    borderColor: '#0475ff60',
  },
  containerf: { 
    
    backgroundColor: '#f5f5f5', 
    padding: 5,
  },
  sectionTitlef: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  cardf: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 10,  shadowRadius: 5, elevation: 3 },
  iconf: {top:-10},
  textContainerf: { flex: 1, left:10, },
  titlef: { fontSize: 16, fontWeight: 'bold', color: '#565656', paddingBottom:3 },
  descriptionf: { fontSize: 14, color: '#666' },
  separatorf: { height: 1, backgroundColor: '#ededed', marginVertical: 8, width:'80%',  alignSelf: 'center',},
});

export default App;
