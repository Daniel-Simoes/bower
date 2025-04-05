// app/modal.js
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';

export default function ModalScreen() {
  return (
    <View>
      <Text>Isso é um modal</Text>
    </View>
  );
}

// Para exibir como modal:
export const config = {
  presentation: 'modal',
};
