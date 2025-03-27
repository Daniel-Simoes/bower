import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';
import { router, Tabs } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useDrawerStatus } from '@react-navigation/drawer'; // Detectar se o Drawer está aberto
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';




export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const drawerStatus = useDrawerStatus(); // Verifica se o Drawer está aberto

  const scale = useSharedValue(1); // Valor inicial da escala
  const borderRadius = useSharedValue(0); // Valor inicial da borda

  // Animação da tela quando o Drawer é aberto
  React.useEffect(() => {
    if (drawerStatus === 'open') {
      scale.value = withTiming(0.80, { duration: 200 }); // Reduz o tamanho suavemente
      borderRadius.value = withTiming(40, { duration: 200 }); // Adiciona bordas arredondadas
    } else {
      scale.value = withTiming(1, { duration: 200 }); // Retorna ao normal
      borderRadius.value = withTiming(0, { duration: 200 });
    }
  }, [drawerStatus]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    borderRadius: borderRadius.value,
    overflow: 'hidden',
  }));

  // URL da imagem do perfil
  const randomImageURL = 'https://img.freepik.com/fotos-premium/retrato-de-engenheiro-e-tecnico-de-homem-feliz-na-inspecao-do-painel-de-controle-e-planejamento-de-manutencao-na-area-de-transferencia-sorriso-de-eletricista-masculino-na-subestacao-eletrica-para-sistema-de-energia-e-lista-de-verificacao_590464-170730.jpg';

  return (
    <View style={styles.drawerBackground}> 
    
      {/* View para garantir fundo branco no Drawer */}
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <Tabs
          screenOptions={{
            // sceneContainerStyle: { backgroundColor: 'white' }, // Fundo branco para Tabs
            // drawerContentStyle: { backgroundColor: 'white' }, // Fundo branco para Drawer
            tabBarActiveTintColor: '#0475FF',
            tabBarInactiveTintColor: '#D3D3D3',
            tabBarStyle: {
              backgroundColor: '#ffffff',
              borderTopWidth: 0,
              paddingTop: 10,
              height: 60,
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            },
            headerShown: true,
            headerTitle: "",
            tabBarButton: HapticTab,
            headerLeft: () => (
              <TouchableOpacity>
                <DrawerToggleButton tintColor="#0475FF" />
              </TouchableOpacity>
            ),
            headerStyle: {
              height: 100,
              backgroundColor: 'transparent',
            },
            headerBackground: () => (
              <View style={{ flex: 1,backgroundColor:'#ffffff' }} />
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 15 }} onPress={() => router.push('/profile')}>
                <View style={styles.profileImageContainer}>
                  <Image source={{ uri: randomImageURL }} style={styles.profileImage} />
                </View>
              </TouchableOpacity>
            ),
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: '',
              tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={28} color={color} />,
            }}
          />

          <Tabs.Screen
            name="notifications"
            options={{
              title: '',
              tabBarIcon: ({ color }) => <Ionicons name="notifications-outline" size={28} color={color} />,
              headerShown: true,
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#FF9900',
                height: 100,
              },
              headerBackground: () => (
                <LinearGradient colors={['#995C00', '#FF9900']} style={{ flex: 1 }} />
              ),
              headerTitle: 'Notificações',
              headerLeft: () => null,
              headerRight: () => null,
            }}
          />
        </Tabs>

        {/* Botão Flutuante QR Code */}
        <TouchableOpacity style={styles.qrButton} onPress={() => router.push('/camera')}>
          <View style={styles.qrButtonGradient}>
            <Ionicons name="qr-code" size={30} color="white" />
          </View>
        </TouchableOpacity>
      </Animated.View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    backgroundColor: '#2F2F2F', // Garante que o fundo do Drawer fique branco
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: 'white', // Mantém o fundo branco mesmo com a animação
  },
  profileImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginLeft: -35,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  qrButtonGradient: {
    backgroundColor:'#0475FF',
    width: '100%',
    height: '100%',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


