import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
    {/* Conteúdo da Tela */}
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Ionicons name="calendar" size={24} color="#000" style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>EXPIRE DATE</Text>
          <Text style={styles.description}>
            Lorem ipsum is simply dummy text of the printing and typ...
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0fb',
  },
  header: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 5,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginTop: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
});


