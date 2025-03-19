import { useState, useEffect } from 'react';
import { ActivityIndicator, Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router'; // Importe o router

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [hasScanned, setHasScanned] = useState(false); // Controla se o QR Code foi escaneado
  const [isLoading, setIsLoading] = useState(false); // Estado para mostrar loading
  const navigation = useNavigation();
  const router = useRouter(); // Inicializa o router

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
        <TouchableOpacity style={styles.circleButton} onPress={showCloseConfirmation}>
          <LinearGradient colors={['#995C00', '#FF9900']} style={styles.circleButtonGradient}>
            <Ionicons name="close" size={30} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.overlay}>
          {isLoading ? (
            <>
              <ActivityIndicator size="large" color="#FF9900" />
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
          <TouchableOpacity style={styles.fabButton} onPress={showAlert}>
            <LinearGradient colors={['#995C00', '#FF9900']} style={styles.fabButtonGradient}>
              <Ionicons name="home" size={30} color="white" />
            </LinearGradient>
          </TouchableOpacity>
        )}
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
  },
  fabButton: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: [{ translateX: -30 }],
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20, // Garante que o botão fique por cima de outros elementos
    elevation: 10, // Dá um efeito de sombra mais forte
  },
  fabButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
