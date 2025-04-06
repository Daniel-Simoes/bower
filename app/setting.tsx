import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SettingsScreen: React.FC = () => {
  const router = useRouter();

  type Route = "/account" | "/privacyPolicy" | "/termOfUse" | "/camera" | "/modal";

  type SettingsOption = {
    label: string;
    route: Route;
  };
  
  const options: SettingsOption[] = [
    { label: "Account", route: "/account" },
    { label: "Privacy Policy", route: "/privacyPolicy" },
    { label: "Terms of Use", route: "/termOfUse" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {options.map(({ label, route }) => (
          <TouchableOpacity key={label} style={styles.row} onPress={() => router.push(route)}>
            <Text style={styles.rowText}>{label}</Text>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        ))}

        <View style={[styles.row, styles.versionRow]}>
          <Text style={styles.rowText}>Version</Text>
          <Text style={styles.versionText}>1.0.0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  versionRow: {
    borderBottomWidth: 0,
  },
  rowText: {
    fontSize: 16,
  },
  versionText: {
    fontSize: 16,
    color: "gray",
  },
});

export default SettingsScreen;

