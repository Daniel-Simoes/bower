import { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList,Alert, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const { width } = Dimensions.get('window');

const iconsT = {
  "pdf": require('../../../assets/icons/pdf.png'),
  "upload": require('../../../assets/icons/upload.png'),
  "download": require('../../../assets/icons/download.png'),
};

const data = [
  { 
    id: '1', 
    titleC: 'Drawings', 
    descriptionC: 'Electrical & Mechanical Schem...', 
    title: 'Drawings', 
    type: 'Drawings', 
    description: 'Electrical & Mechanical Schem...', 
    image: 'https://as2.ftcdn.net/jpg/01/09/07/43/1000_F_109074362_OEISoYgpTh12fXl7KQm8E3jFLPHREdvT.jpg', 
    icon: "pdf", 
  },
  { 
    id: '2', 
    titleC: 'Docs Shared', 
    descriptionC: 'Data Sheets, Warrants & Instructions...', 
    title: 'Docs Shared', 
    type: 'Docs Shared', 
    description: 'Data Sheets, Warrants & Instructions...', 
    image: 'https://parker-design.co.uk/assets/datasheet-design-allmed-data-sheets.jpg', 
    icon: "upload",
   },
  { 
    id: '3', 
    titleC: 'Apartment Progress', 
    descriptionC: 'Site updates & future ends...', 
    title: 'Apartment Progress', 
    type: 'Apartment Progress', 
    description: 'Site updates & future ends...', 
    image: 'https://www.squadrapvc.com.br/img/blog/grande/9096383d22567dd1a505888d438f34ac.webp', 
    icon: 'download',
   },
  { 
    id: '4', 
    titleC: 'Docs Shared', 
    descriptionC: 'Data Sheets, Warrants & Instructions...', 
    title: 'Docs Shared', 
    type: 'Docs Shared', 
    description: 'Electrical & Mechanical Schem...', 
    image: 'https://parker-design.co.uk/assets/datasheet-design-allmed-data-sheets.jpg', 
    icon: "upload",
   },
  { 
    id: '5', 
    titleC: 'Apartment Progress', 
    descriptionC: 'Site updates & future ends...', 
    title: 'Apartment Progress', 
    type: 'Apartment Progress', 
    description: 'Data Sheets, Warrants & Instructions...', 
    image: 'https://www.squadrapvc.com.br/img/blog/grande/9096383d22567dd1a505888d438f34ac.webp', 
    icon: 'download',
   },
];

// Agrupar os itens por tipo
const groupByType = (data) => {
  const grouped = {};
  data.forEach((item) => {
    if (!grouped[item.type]) {
      grouped[item.type] = { type: item.type, items: [] };
    }
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
  const [selectedType, setSelectedType] = useState(groupedData[0]?.type || '');

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
          setSelectedType(groupedData[index].type);
        }}
        modeConfig={{
          parallaxScrollingScale: 0.79,
          parallaxScrollingOffset: 125,
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
      
      {/* Lista Filtrada */}
      <View style={styles.containerf}>
        <Text style={styles.sectionTitlef}>{selectedType} Features</Text>
        <FlatList
  data={data.filter((item) => item.type === selectedType)}
  scrollEnabled={data.filter((item) => item.type === selectedType).length > 3} // Desativa o scroll se tiver 3 ou menos
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <TouchableOpacity 
      onPress={() => Alert.alert("Item Clicado", `Você clicou em: ${item.title}`)} 
      activeOpacity={0.7}
    >
      <View style={styles.cardf}>
      <Image source={iconsT[item.icon]} style={styles.iconf} />
        {/* <FontAwesome6 name={item.icon} size={20} color="#565656" style={styles.iconf}/> */}
        <View style={styles.textContainerf}>
          <Text style={styles.titlef}>{item.title}</Text>
          <Text style={styles.descriptionf}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )}
  // ItemSeparatorComponent={() => <View style={styles.separatorf} />}
/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F3F4", top: -20 },
  card: { 
    borderRadius: 20, 
    overflow: 'hidden', 
    elevation: 5, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  image: { 
    width: width * 0.9, 
    height: 250, 
    borderTopLeftRadius: 20,  
    borderTopRightRadius: 20, 
  },
  cardTextContainer: { 
    padding: 15, 
    backgroundColor: '#ffffff', 
    borderBottomLeftRadius: 20, 
    borderBottomRightRadius: 20, 
    width: width * 0.9 
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  subItemContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  subItemText: { fontSize: 14, color: '#666' },
  pagination: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: -40,
    marginBottom: 25 
  },
  paginationDot: { 
    width: 8, 
    height: 8, 
    borderRadius: 4, 
    backgroundColor: '#d3d3d364', 
    marginHorizontal: 5 
  },
  paginationDotActive: { 
    backgroundColor: '#0475ff89',  // Azul do app
    width: 12,  // Maior que os outros
    height: 12,  
    borderRadius: 7,
    top:-2
    // borderWidth: 2,
    // borderColor: '#fd04fd',
  },
  containerf: { backgroundColor: '#f5f5f5', padding: 8 },
  sectionTitlef: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#5f5f5f', left: 10 },
  cardf: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 16, borderRadius: 10, shadowRadius: 5, elevation: 3, margin:4 },
  iconf: { top: -10, width:20, height:20 },
  textContainerf: { flex: 1, left: 10 },
  titlef: { fontSize: 16, fontWeight: 'bold', color: '#565656', paddingBottom: 3 },
  descriptionf: { fontSize: 14, color: '#666' },
  separatorf: { height: 1, backgroundColor: '#ededed', marginVertical: 8, width: '80%', alignSelf: 'center' },
});

export default App;
