

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function AccountScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
      <Text style={styles.header}>Account</Text>
      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Account Details</Text>
        <Text style={styles.label}>Username</Text>
        <Text style={styles.value}>Mick Phillip</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>mick.phillip@gmail.com</Text>
      </View>
      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your Plan</Text>
        <View style={styles.planContainer}>
          <Ionicons name="shield-checkmark" size={40} color="#007AFF" style={styles.planIcon} />
          <Text style={styles.planText}>Entry-Control</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.premiumTitle}>Premium Plans</Text>
        <Text style={styles.premiumSubtitle}>Enjoy Full access and more.</Text>
        <Ionicons name="chevron-forward" size={20} color="gray" style={styles.chevronIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
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
    top: "50%",
    marginTop: -10,
  },
});