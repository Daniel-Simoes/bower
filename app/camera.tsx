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
  const animation = useRef(new Animated.Value(0)).current; // UseRef para manter o valor da animação
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false); // Controla se o QR Code foi escaneado
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar loading
  const navigation = useNavigation();
  const router = useRouter(); // Inicializa o router


  const toggleMenu = () => {
    Animated.timing(animation, {
      toValue: isMenuOpen ? 0 : 1,
      duration: 300,
      useNativeDriver: true, // Melhor performance
    }).start();
    
    setIsMenuOpen(!isMenuOpen);
  };

  // Posições dos botões (meia-lua)
  const positions = [
    { x: -80, y: 0, icon: "flame-outline", label: "Aquecedor" },
    { x: -60, y: -60, icon: "water-outline", label: "Chuveiro" },
    { x: 0, y: -80, icon: "bulb-outline", label: "Iluminação" },
    { x: 60, y: -60, icon: "wifi-outline", label: "Wi-Fi" },
    { x: 80, y: 0, icon: "lock-closed-outline", label: "Segurança" },
  ];



  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerBackTitleVisible: false,
      headerTransparent: true,
      headerShown: false,
    });
  }, [navigation]);

  if (!permission) return <View />;
  
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  function handleBarCodeScanned() {
    setIsLoading(true); // Ativa o loading
    setTimeout(() => {
      setIsLoading(false); // Esconde loading após 2 segundos
      setHasScanned(true); // Troca para a tela com botões
    }, 2000);
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // Função para mostrar o alerta de confirmação ao fechar a câmera
  function showCloseConfirmation() {
    Alert.alert(
      "Confirmar saída",
      "Você tem certeza que deseja voltar para a tela inicial?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => router.push('/'), // Volta para a tela inicial se confirmado
        },
      ]
    );
  }

  // Função para mostrar o alerta
  function showAlert() {
    Alert.alert(
      "Aviso",
      "Circuitos serão disponibilizados em breve",
      [{ text: "OK" }]
    );
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={hasScanned || isLoading ? undefined : handleBarCodeScanned} // Bloqueia scanner enquanto carrega
      >
        {/* ✅ Botão de fechar com confirmação */}
        {!isMenuOpen && (
        <TouchableOpacity style={styles.circleButton} onPress={showCloseConfirmation}>
          <BlurView intensity={30} tint="light" style={styles.circleButtonGradient}>
            <Ionicons name="close" size={30} color="white" />
          </BlurView>
        </TouchableOpacity>
        )}
        <View style={styles.overlay}>
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

        {/* Se já escaneou, exibe botão para alternar câmera ou mostrar alerta */}
        {hasScanned && (


    <View style={styles.containerer}>
      {positions.map((pos, index) => {
        const translateX = animation.interpolate({ inputRange: [0, 1], outputRange: [0, pos.x] });
        const translateY = animation.interpolate({ inputRange: [0, 1], outputRange: [0, pos.y] });
        const opacity = animation.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });

        return (
          <Animated.View key={index} style={[styles.subButton, { transform: [{ translateX }, { translateY }], opacity }]}>
            <TouchableOpacity style={styles.smallButton} onPress={() => Alert.alert(pos.label, `${pos.label} ativado.`)}>
            <BlurView intensity={30} tint="light" style={styles.smallBlurButton}>
              <Ionicons name={pos.icon} size={24} color="white" />
            </BlurView>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
      {/* FAB Principal */}
      
       <TouchableOpacity style={styles.fabButton} onPress={toggleMenu}>
       <BlurView intensity={30} tint="light" style={styles.blurButton}>
  
           <Ionicons name={isMenuOpen ? 'close' : 'home'} size={30} color="white" />
          
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
       zIndex: 20, // Garante que o botão fique por cima de outros elementos
  //   elevation: 10, // Dá um efeito de sombra mais forte
  },

  fabButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  fabButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subButton: {
    position: 'absolute',
  },
  smallBlurButton: {
    width: 55, 
    height: 55, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden', // Garante que o blur fique dentro do botão
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
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  scannerFrame: {
    width: 200,
    height: 200,
    borderWidth: 4,
    borderColor: '#FF9900',
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  scanText: {
    color: 'white',
    marginTop: 20,
    fontSize: 16,
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
    zIndex: 20, // Garante que o botão fique por cima de outros elementos
    elevation: 10, // Dá um efeito de sombra mais forte
  },
  circleButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Garante que o blur fique dentro do botão
  },
  blurButton: {
    position: 'absolute',
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center',
    overflow: 'hidden', // Garante que o blur fique dentro do botão
  },
});


