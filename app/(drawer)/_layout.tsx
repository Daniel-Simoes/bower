import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { useNavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { processColorsInProps } from 'react-native-reanimated/lib/typescript/Colors';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function DrawerLayout() {
  const navigationState = useNavigationState((state) => state);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 🔥 Detecta se o Drawer está aberto e atualiza o estado
  useEffect(() => {
    if (navigationState?.routes) {
      const drawerRoute = navigationState.routes.find((route) => route.name === "(drawer)");
      // setIsDrawerOpen(drawerRoute?.state?.index > 0);
    }
  }, [navigationState]);
// URL da imagem do perfil
const randomImageURL = 'https://img.freepik.com/fotos-premium/retrato-de-engenheiro-e-tecnico-de-homem-feliz-na-inspecao-do-painel-de-controle-e-planejamento-de-manutencao-na-area-de-transferencia-sorriso-de-eletricista-masculino-na-subestacao-eletrica-para-sistema-de-energia-e-lista-de-verificacao_590464-170730.jpg';

  const CustomDrawerContent = (props) => {
    return(
      <>
        <StatusBar style={isDrawerOpen ? 'dark' : 'light'} />
        <DrawerContentScrollView {...props}>
        <View style={styles.drawerContainer}>
      {/* Perfil do Usuário */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: randomImageURL }} style={styles.profileImage}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Mark Philips</Text>
        <Text style={styles.profileEmail}>markphil@gmail.com</Text>
      </View>

      {/* Opções do Menu */}
      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Ionicons name="settings-outline" size={24} color="white" />
        <Text style={styles.menuText}>Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Ionicons name="headset-outline" size={24} color="white" />
        <Text style={styles.menuText}>Suporte</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => {}}>
        <Ionicons name="information-circle-outline" size={24} color="white" />
        <Text style={styles.menuText}>CornerStone</Text>
      </TouchableOpacity>

      {/* Botão de Logout */}
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={() => {}}>
          <Ionicons name="log-out-outline" size={24} color="white" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>Bower v1.0.0</Text>
      </View>
    </View>
        </DrawerContentScrollView>
      </>
    )
  }

  return (
    <>
      {/* 🔥 Muda a cor da StatusBar dinamicamente */}
      <StatusBar style={isDrawerOpen ? 'dark' : 'light'} />
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor: '#2F2F2F', // 🔥 Fundo branco do Drawer
            width: 200,
          },
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  drawerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileContainer: {

    marginBottom: 30,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "white",
    
  },
  profileName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileEmail: {
    fontSize: 14,
    color: "white",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    marginLeft: 15,
    color: "white",
  },
  logoutContainer: {
    marginTop: 390,

  
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 10,
    color: "white",
  },
  versionText: {
    fontSize: 12,
    marginTop: 10,
    color: "white",
  },
});




// import { Drawer } from 'expo-router/drawer';
// import { Ionicons } from '@expo/vector-icons';
// import { StatusBar } from 'expo-status-bar';
// import { useNavigationState } from '@react-navigation/native';
// import { useEffect, useState } from 'react';
// import { processColorsInProps } from 'react-native-reanimated/lib/typescript/Colors';

// export default function DrawerLayout() {
//   const navigationState = useNavigationState((state) => state);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   // 🔥 Detecta se o Drawer está aberto e atualiza o estado
//   useEffect(() => {
//     if (navigationState?.routes) {
//       const drawerRoute = navigationState.routes.find((route) => route.name === "(drawer)");
//       // setIsDrawerOpen(drawerRoute?.state?.index > 0);
//     }
//   }, [navigationState]);

//   return (
//     <>
//       {/* 🔥 Muda a cor da StatusBar dinamicamente */}
//       <StatusBar style={isDrawerOpen ? 'dark' : 'light'} />

//       <Drawer
//         screenOptions={{
//           headerShown: false,
//           overlayColor: 'transparent',
//           drawerActiveTintColor: '#FF9900',
//           drawerInactiveTintColor: '#aaa',
//           drawerStyle: {
//             backgroundColor: '#FFFFFF', // 🔥 Fundo branco do Drawer
//             width: 260,
//           },
//           drawerLabelStyle: {
//             fontSize: 16,
//             color: '#333',
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="(tabs)"
//           options={{
//             title: 'Configurações',
//             drawerIcon: ({ color }) => <Ionicons name="settings" size={20} color={color} />,
//           }}
//         />
//          <Drawer.Screen
//           name="index"
//           options={{
//             title: 'Suport',
//             drawerIcon: ({ color }) => <Ionicons name="call" size={20} color={color} />,
//           }}
//         />
//       </Drawer>
//     </>
//   );
// }