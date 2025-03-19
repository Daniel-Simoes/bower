import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false, // 🔥 Esconde o header duplicado do Drawer
        drawerActiveTintColor: '#FF9900',
        drawerInactiveTintColor: '#aaa',
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Início',
          drawerIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          title: 'Perfil',
          drawerIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
        }}
      />
    </Drawer>
  );
}
