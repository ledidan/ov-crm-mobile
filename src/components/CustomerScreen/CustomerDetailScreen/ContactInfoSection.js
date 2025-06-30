import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const ContactInfoSection = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        <Feather name="user" /> A Bin <Text style={styles.tag}>Liên hệ chính</Text>
      </Text>
      <View style={styles.row}>
        <Feather name="phone" size={14} />
        <Text style={styles.text}>0385114940</Text>
      </View>
      <View style={styles.row}>
        <Feather name="calendar" size={14} />
        <Text style={styles.text}>Chưa cập nhật</Text>
      </View>
      <View style={styles.row}>
        <Feather name="mail" size={14} />
        <Text style={styles.text}>Chưa cập nhật</Text>
      </View>
      <View style={styles.row}>
        <Feather name="user" size={14} />
        <Text style={styles.text}>Chưa cập nhật</Text>
      </View>
    </View>
  );
};

export default ContactInfoSection;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
  tag: {
    fontSize: 12,
    color: "#666",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    gap: 8,
  },
  text: {
    fontSize: 14,
    color: "#333",
  },
});
