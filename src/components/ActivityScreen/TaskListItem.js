import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function TaskListItem({ task, navigation }) {
  const percent = Math.floor(task.progress * 100);
  const remainingDays = Math.ceil(
    (new Date(task.endDate) - new Date()) / (1000 * 60 * 60 * 24)
  );

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => navigation.navigate("ActivityDetail", { task })}>
        <View style={styles.header}>
          <Ionicons name="document-outline" size={16} color="#999" />
          <Text style={styles.label}>Công việc</Text>
          <View style={{ flex: 1 }} />
          <Ionicons name="person-circle-outline" size={20} color="#999" />
        </View>

        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.dateRow}>
          <Ionicons name="calendar-outline" size={14} color="#999" />
          <Text style={styles.dateText}>
            {task.startDate} → {task.endDate}
          </Text>
        </View>

        <View style={styles.progressRow}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${percent}%` }]} />
          </View>
          <Text style={styles.percentText}>{percent}%</Text>
        </View>

        <Text style={styles.remainingText}>
          {remainingDays > 0
            ? `Còn ${remainingDays} ngày`
            : remainingDays === 0
            ? "Hôm nay"
            : "Đã quá hạn"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FAFAFF",
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: "#999",
    marginLeft: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginVertical: 4,
    color: "#333",
  },
  dateRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  dateText: {
    fontSize: 13,
    color: "#666",
    marginLeft: 6,
  },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  progressBar: {
    flex: 1,
    height: 6,
    backgroundColor: "#E0E0E0",
    borderRadius: 6,
    overflow: "hidden",
    marginRight: 8,
  },
  progressFill: {
    height: 6,
    backgroundColor: "#4CAF50",
  },
  percentText: {
    fontSize: 13,
    color: "#444",
    fontWeight: "500",
  },
  remainingText: {
    fontSize: 13,
    marginTop: 6,
    color: "#666",
  },
});
