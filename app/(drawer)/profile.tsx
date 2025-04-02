// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { useRouter } from 'expo-router';

// export default function ProfileScreen() {
//   const router = useRouter();

//   return (
//     <>
//       {/* Header com Gradiente */}
//       <LinearGradient colors={['#007AFF', '#4DA8FF']} style={styles.header}>
//         <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="white" />
//         </TouchableOpacity>
//         <Image source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }} style={styles.profileImage} />
//         <Text style={styles.profileName}>Mark Philips</Text>
//         <Text style={styles.profileRole}>Eletricista</Text>
//       </LinearGradient>
//       <View style={styles.container}>
//       {/* Formulário */}
//       <View style={styles.form}>
//         <Text style={styles.sectionTitle}>Detalhes Pessoais</Text>
//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder="Mark Philips" />
//           <Ionicons name="person-outline" size={20} color="gray" style={styles.inputIcon} />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder="mark_philips@gmail.com" keyboardType="email-address" />
//           <Ionicons name="mail-outline" size={20} color="gray" style={styles.inputIcon} />
//         </View>
//         <View style={styles.inputContainer}>
//           <Text style={styles.flag}>🇮🇪 +353</Text>
//           <TextInput style={styles.input} placeholder="083 4585 3271" keyboardType="phone-pad" />
//           <Ionicons name="call-outline" size={20} color="gray" style={styles.inputIcon} />
//         </View>

//         <Text style={styles.sectionTitle}>Detalhes da Empresa</Text>
//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder="FrontLine Bm&E" />
//           <Ionicons name="briefcase-outline" size={20} color="gray" style={styles.inputIcon} />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder="Eletricista" />
//           <Ionicons name="construct-outline" size={20} color="gray" style={styles.inputIcon} />
//         </View>

//         <Text style={styles.sectionTitle}>Detalhes de Permissões</Text>
//         <View style={styles.inputContainer}>
//           <TextInput style={styles.input} placeholder="Full Access" />
//           <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.inputIcon} />
//         </View>

//         {/* Botão de Salvar */}
//         <TouchableOpacity style={styles.saveButton}>
//           <Text style={styles.saveButtonText}>Salvar</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({

//   container: { 
//     flex: 1, 
//     backgroundColor: '#F8F8F8',
//     borderTopLeftRadius: 40,
//     borderTopRightRadius: 40,
    
//   },
//   header: {
//     height: 260,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 50,
//     left: 20,
//   },
//   profileImage: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 3,
//     borderColor: 'white',
//     marginTop: 10,
//   },
//   profileName: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   profileRole: {
//     color: 'white',
//     fontSize: 14,
//   },
//   form: { padding: 20 },
//   sectionTitle: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#555',
//     marginTop: 15,
//     marginBottom: 5,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   input: {
//     flex: 1,
//     height: 45,
//   },
//   inputIcon: {
//     marginLeft: 10,
//   },
//   flag: {
//     fontSize: 16,
//     marginRight: 10,
//   },
//   saveButton: {
//     backgroundColor: '#007AFF',
//     padding: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   saveButtonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });


import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();

  return (
    <>
      <LinearGradient colors={["#007AFF", "#4DA8FF"]} style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Image source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }} style={styles.profileImage} />
        <Text style={styles.profileName}>Mark Philips</Text>
        <Text style={styles.profileRole}>Eletricista</Text>
      </LinearGradient>
      <View style={styles.container}>
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  header: {
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
    marginTop: 10,
  },
  profileName: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  profileRole: {
    color: "white",
    fontSize: 14,
  },
  form: { padding: 20 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginTop: 15,
    marginBottom: 5,
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
  },
});




