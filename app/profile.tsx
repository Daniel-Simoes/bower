import React from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  SafeAreaView 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.circleButton} onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/fotos-premium/retrato-de-engenheiro-e-tecnico-de-homem-feliz-na-inspecao-do-painel-de-controle-e-planejamento-de-manutencao-na-area-de-transferencia-sorriso-de-eletricista-masculino-na-subestacao-eletrica-para-sistema-de-energia-e-lista-de-verificacao_590464-170730.jpg"
            }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Mark Philips</Text>
          <Text style={styles.profileRole}>Eletricista</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.sectionTitle}>Detalhes Pessoais</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="Mark Philips" editable={false} />
            <Ionicons name="person-outline" size={20} color="gray" style={styles.inputIcon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="mark_philips@gmail.com" keyboardType="email-address" editable={false} />
            <Ionicons name="mail-outline" size={20} color="gray" style={styles.inputIcon} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.flag}>🇮🇪 +353</Text>
            <TextInput style={styles.input} value="083 4585 3271" keyboardType="phone-pad" editable={false} />
            <Ionicons name="call-outline" size={20} color="gray" style={styles.inputIcon} />
          </View>

          <Text style={styles.sectionTitle}>Detalhes da Empresa</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="FrontLine Bm&E" editable={false} />
            <Ionicons name="briefcase-outline" size={20} color="gray" style={styles.inputIcon} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="Eletricista" editable={false} />
            <Ionicons name="construct-outline" size={20} color="gray" style={styles.inputIcon} />
          </View>

          <Text style={styles.sectionTitle}>Detalhes de Permissões</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} value="Full Access" editable={false} />
            <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.inputIcon} />
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    height: "15%",
    backgroundColor: "#007AFF",
    alignItems: "flex-end",
    padding: 20,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ffffff", // Cor de fundo para o círculo
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    marginTop: -10,
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal:10
  },
  contentContainer: {
    flex:1,
    top:-60,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom:30
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: "white",
  },
  profileName: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  profileRole: {
    color: "#000",
    fontSize: 14,
  },
  form: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: 45,
  },
  inputIcon: {
    marginLeft: 10,
  },
  flag: {
    fontSize: 16,
    marginRight: 10,
  },
  saveButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  }
});
