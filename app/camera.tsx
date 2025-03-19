import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';  // Importando o Ionicons
import { useNavigation } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';  // Importando o LinearGradient

export default function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const navigation = useNavigation();

  // Usar useEffect para configurar as opções de navegação
  useEffect(() => {
    navigation.setOptions({
      title: '', // Remove o título
      headerBackTitleVisible: false, // Remove o texto "Voltar"
      headerTransparent: true, // Torna o cabeçalho transparente
      headerShown: false, // Esconde completamente o cabeçalho
    });
  }, [navigation]);

  if (!permission) {
    // As permissões da câmera estão carregando
    return <View />;
  }

  if (!permission.granted) {
    // As permissões não foram concedidas
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da sua permissão para usar a câmera</Text>
        <Button onPress={requestPermission} title="Conceder permissão" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  // Função para fechar a câmera (navegar de volta)
  function closeCamera() {
    navigation.goBack();
  }

  // Função para mostrar o alerta
  function showAlert() {
    Alert.alert("Você clicou no botão de casa!");
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        {/* Botão de Fechar no canto direito com degradê */}
        <TouchableOpacity style={styles.circleButton} onPress={closeCamera}>
          <LinearGradient
            colors={['#995C00', '#FF9900']}  // Definindo as cores do degradê
            style={styles.circleButtonGradient}
          >
            <Ionicons name="close" size={30} color="white" />
          </LinearGradient>
        </TouchableOpacity>

        {/* Floating Action Button (FAB) no centro da parte inferior com gradiente */}
        <TouchableOpacity style={styles.fabButton} onPress={showAlert}>
          <LinearGradient
            colors={['#995C00', '#FF9900']}  // Definindo as cores do degradê
            style={styles.fabButtonGradient}
          >
            <Ionicons name="home" size={30} color="white" />
          </LinearGradient>
        </TouchableOpacity>
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
  circleButton: {
    position: 'absolute', // Para posicionar no canto superior direito
    top: 60, // Distância do topo
    right: 20, // Distância da direita
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  circleButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButton: {
    position: 'absolute', // Para posicionar no centro da parte inferior
    bottom: 40, // Distância da parte inferior
    left: '50%', // Centralizar horizontalmente
    transform: [{ translateX: -30 }], // Ajustar para centralizar corretamente
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra para dar efeito flutuante
  },
  fabButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
