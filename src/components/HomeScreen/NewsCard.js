// components/NewsCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NewsCard = ({ title, date }) => (
  <View style={styles.card}>
    <View style={styles.row}>
      <View style={styles.iconWrap}>
        <Ionicons name="mail-outline" size={18} color="#444" />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  </View>
);

export default NewsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F2F4F7",
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconWrap: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
});
