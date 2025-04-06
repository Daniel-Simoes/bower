import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const data = {
  username: "Mick Phillip",
  email: "mick.phillip@gmail.com",
  yourPlan: "Entry-Control",
};

export default function TabTwoScreen() {
  const router = useRouter();

  const navigateToPremiumPlans = () => {
    // router.push(); 
  };

  return (
    <View style={styles.container}>
      {/* Card de detalhes da conta */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Account Details</Text>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>{data.username}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>{data.email}</Text>
      </View>

      {/* Card de plano de usuário */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your Plan</Text>
        <View style={styles.planContainer}>
          <Ionicons name="shield-checkmark" size={40} color="#007AFF" style={styles.planIcon} />
          <Text style={styles.planText}>{data.yourPlan}</Text>
        </View>
      </View>

      {/* Card de planos premium */}
      <TouchableOpacity style={styles.card} onPress={navigateToPremiumPlans}>
        <Text style={styles.premiumTitle}>Premium Plans</Text>
        <Text style={styles.premiumSubtitle}>Enjoy full access and more.</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" style={styles.chevronIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "gray",
  },
  value: {
    fontSize: 14,
    marginBottom: 10,
  },
  planContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  planIcon: {
    marginRight: 10,
  },
  planText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  premiumTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  premiumSubtitle: {
    fontSize: 12,
    color: "gray",
  },
  chevronIcon: {
    position: "absolute",
    right: 15,
    top: "65%",
  },
});


