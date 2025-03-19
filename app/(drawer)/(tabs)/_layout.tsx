import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { router, Tabs } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'; // Gradiente
import { Ionicons } from '@expo/vector-icons'; // Ícones do Expo

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  // URL da imagem do perfil
  const randomImageURL = 'https://img.freepik.com/fotos-premium/retrato-de-engenheiro-e-tecnico-de-homem-feliz-na-inspecao-do-painel-de-controle-e-planejamento-de-manutencao-na-area-de-transferencia-sorriso-de-eletricista-masculino-na-subestacao-eletrica-para-sistema-de-energia-e-lista-de-verificacao_590464-170730.jpg';

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#FF9900', 
          tabBarInactiveTintColor: '#D3D3D3', 
          tabBarStyle: {
            backgroundColor: '#4A4A4A', 
            borderTopWidth: 0, 
            paddingTop: 10, 
            height: 60, // Ajustando altura para acomodar o botão flutuante
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          },
          headerShown: true,
          headerTitle: "", 
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          headerLeft: () => (
            // Mostrar o menu hamburguer apenas nas outras abas
            <TouchableOpacity
              style={styles.circleButton} 
            >
              {/* <Text style={{ fontSize: 24, color: '#ffffff' }}>☰</Text> */}
              <DrawerToggleButton tintColor="white"/>
            </TouchableOpacity>
          ),
          headerStyle: {
            height: 100, 
            backgroundColor: 'transparent',
          },
          headerBackground: () => (
            <LinearGradient
              colors={['#995C00', '#FF9900']} 
              style={{ flex: 1 }}
            />
          ),
          headerRight: () => (
            // Mostrar o perfil apenas nas outras abas
            <TouchableOpacity style={{ marginRight: 15 }}>
              <View style={styles.profileImageContainer}>
                <Image
                  source={{ uri: randomImageURL }} 
                  style={styles.profileImage}
                />
              </View>
            </TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: '', 
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={28} color={color} />
            ),
          }}
        />
        
        <Tabs.Screen
          name="notifications"
          options={{
            title: '', 
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications" size={28} color={color} />
            ),
            headerShown: true, // Mostrar o header
            headerTitleAlign: 'center', // Centraliza o título no header
            headerStyle: {
              backgroundColor: '#FF9900', // Cor do fundo do header
              height: 100, // Tamanho do header
            },
            headerBackground: () => (
              <LinearGradient
                colors={['#995C00', '#FF9900']} 
                style={{ flex: 1 }}
              />
            ),
            // Mostrar "Notificações" apenas quando na aba "explore"
            headerTitle: 'Notificações', // Nome do título
            // Remover os ícones do menu hamburguer e perfil
            headerLeft: () => null,
            headerRight: () => null,
          }}
        />
      </Tabs>

      {/* Botão Flutuante QR Code */}
      <TouchableOpacity 
        style={styles.qrButton} 
        onPress={() => router.push('/camera')} // Agora usa expo-router corretamente
      >
        <LinearGradient colors={['#995C00', '#FF9900']} style={styles.qrButtonGradient}>
          <Ionicons name="qr-code" size={30} color="white" />
        </LinearGradient>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 20, 
    backgroundColor: '#ffffff56', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#ffffff96',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  qrButton: {
    position: 'absolute',
    bottom: 30, 
    left: '50%',
    marginLeft: -35, // Metade da largura para centralizar
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10, 
  },
  qrButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
