import { Redirect } from 'expo-router';

export default function DrawerIndex() {
  return <Redirect href="/(drawer)/(tabs)" />; // 🔥 Redireciona para as Tabs!
}
