import { useState, useEffect, useRef } from 'react';
import { Animated, ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { BlurView } from 'expo-blur';

export default function CameraScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const menuAnimation = useRef(new Animated.Value(0)).current;
  const submenuAnimation = useRef(new Animated.Value(0)).current;

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  const positions = [
    { x: -80, y: 0, icon: "flame-outline", label: "Aquecedor" },
    { x: -60, y: -60, icon: "water-outline", label: "Chuveiro" },
    { x: 0, y: -80, icon: "bulb-outline", label: "Iluminação" },
    { x: 60, y: -60, icon: "wifi-outline", label: "Wi-Fi" },
    { x: 80, y: 0, icon: "lock-closed-outline", label: "Segurança" },
  ];

  const submenuItems = [
    { x: 80, y: 0, icon: "information-outline", label: "Modo Dia" },
    { x: -80, y: 0, icon: "home", label: "Configurações" },
  ];

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerShown: false,
    });
  }, [navigation]);

  const toggleMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null); // Fecha submenus se menu principal for ativado
  };

  const openSubmenu = (label: string) => {
    setIsMenuOpen(false); // Oculta menu principal
    setActiveSubmenu(label);
    Animated.timing(submenuAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSubmenu = () => {
    Animated.timing(submenuAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setActiveSubmenu(null);
      // Reabre o menu principal com animação
      Animated.timing(menuAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setIsMenuOpen(true);
    });
  };

  const handleBarCodeScanned = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasScanned(true);
    }, 2000);
  };

  const showCloseConfirmation = () => {
    Alert.alert("Confirmar saída", "Você tem certeza que deseja voltar para a tela inicial?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Sim", onPress: () => router.push('/') },
    ]);
  };

  if (!permission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  // Função para lidar com o clique no submenu
  const handleSubmenuPress = (label: string, icon: string) => {
    if (icon === "information-outline") {
      // Redireciona para a página de profile
      router.push('/infomation');
    } else if (icon === "home") {
      // Se for o ícone "home", volta para o menu anterior
      closeSubmenu();
    } else {
      // Para os outros itens, abre o submenu normalmente
      openSubmenu(label);
    }
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
        onBarcodeScanned={hasScanned || isLoading ? undefined : handleBarCodeScanned}
      >
        {!isMenuOpen && !activeSubmenu && (
          <TouchableOpacity style={styles.circleButton} onPress={showCloseConfirmation}>
            <BlurView intensity={30} tint="light" style={styles.circleButtonGradient}>
              <Ionicons name="close" size={30} color="white" />
            </BlurView>
          </TouchableOpacity>
        )}

        <View style={[
          styles.overlay,
          { backgroundColor: !hasScanned ? 'rgba(0, 0, 0, 0.6)' : 'transparent' },
        ]}>
          {isLoading ? (
            <>
              <ActivityIndicator size="large" color="#00000091" />
              <Text style={styles.scanText}>Processando...</Text>
            </>
          ) : !hasScanned ? (
            <>
              <View style={styles.scannerFrame} />
              <Text style={styles.scanText}>Posicione um QR Code dentro do quadrado</Text>
            </>
          ) : null}
        </View>

        {hasScanned && (
          <View style={styles.containerer}>
            {/* Menu Principal */}
            {!activeSubmenu && positions.map((pos, index) => {
              const translateX = menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, pos.x] });
              const translateY = menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, pos.y] });
              const opacity = menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

              return (
                <Animated.View key={index} style={[styles.subButton, { transform: [{ translateX }, { translateY }], opacity }]}>
                  <TouchableOpacity style={styles.smallButton} onPress={() => openSubmenu(pos.label)}>
                    <BlurView intensity={30} tint="light" style={styles.smallBlurButton}>
                      <Ionicons name={pos.icon} size={24} color="white" />
                    </BlurView>
                  </TouchableOpacity>
                </Animated.View>
              );
            })}

            {/* Submenu */}
            {activeSubmenu && submenuItems.map((pos, index) => {
              const translateX = menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, pos.x] });
              const translateY = menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, pos.y] });
              const opacity = menuAnimation.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

              return (
                <Animated.View key={index} style={[styles.subButton, { transform: [{ translateX }, { translateY }], opacity }]}>
                  <TouchableOpacity style={styles.smallButton} onPress={() => handleSubmenuPress(pos.label, pos.icon)}>
                    <BlurView intensity={30} tint="light" style={styles.smallBlurButton}>
                      <Ionicons name={pos.icon} size={24} color="white" />
                    </BlurView>
                  </TouchableOpacity>
                </Animated.View>
              );
            })}

            {/* Botão Central (home, X ou ícone do submenu ativo) */}
            <TouchableOpacity style={styles.fabButton} onPress={activeSubmenu ? closeSubmenu : toggleMenu} disabled={!!activeSubmenu}>
              <BlurView intensity={30} tint="light" style={styles.blurButton}>
                <Ionicons 
                  name={
                    activeSubmenu ? 
                      positions.find((pos) => pos.label === activeSubmenu)?.icon || "home" : 
                    isMenuOpen ? "close" : "home"
                  } 
                  size={30} 
                  color="white" 
                />
              </BlurView>
            </TouchableOpacity>
          </View>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  containerer: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: [{ translateX: -30 }],
    alignItems: 'center',
    zIndex: 20,
  },
  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  subButton: {
    position: 'absolute',
  },
  smallButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallBlurButton: {
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerFrame: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: '#0475FF',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  scanText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
  },
  circleButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  circleButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    elevation: 10,
  },
  blurButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
