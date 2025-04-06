import React from 'react';
import { TouchableOpacity, Image, View, StyleSheet, StatusBar } from 'react-native';
import { router, Tabs } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useDrawerStatus } from '@react-navigation/drawer'; // Detectar se o Drawer está aberto
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { HapticTab } from '@/components/HapticTab';
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

  // Alterando a cor da StatusBar com base no estado do Drawer (invertido)
  React.useEffect(() => {
    if (drawerStatus === 'open') {
      StatusBar.setBarStyle('light-content'); // Cor clara para quando o Drawer estiver aberto
      StatusBar.setBackgroundColor('#000000'); // Cor de fundo preta quando o Drawer estiver aberto
    } else {
      StatusBar.setBarStyle('dark-content'); // Cor escura para quando o Drawer estiver fechado
      StatusBar.setBackgroundColor('#ffffff'); // Cor de fundo branca quando o Drawer estiver fechado
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
                <DrawerToggleButton tintColor="#0475ffa7" />
              </TouchableOpacity>
            ),
            headerStyle: {
              backgroundColor: 'transparent',
            },
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor:'#ffffff' }} />
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
              headerTitle: 'Notificações',
              headerTintColor:'black',
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
    backgroundColor: '#0475FF',   
  },
  animatedContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileImageContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F3F3F4',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignSelf: 'center',
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
