import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddTaskModal from "../components/ActivityScreen/AddTaskModal";

const tabs1 = ["Tất cả", "Của tôi"];
const tabs2 = ["Hôm nay", "Quá hạn", "Sắp tới"];

export default function ActivityScreen() {
  const [tab1, setTab1] = useState("Tất cả");
  const [tab2, setTab2] = useState("Hôm nay");
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Timeline công việc</Text>
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={24} />
        </TouchableOpacity>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterRow}>
        {tabs1.map((t) => (
          <TouchableOpacity
            key={t}
            style={[styles.filterBtn, tab1 === t && styles.filterBtnActive]}
            onPress={() => setTab1(t)}
          >
            <Text
              style={[styles.filterText, tab1 === t && styles.filterTextActive]}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Date Tabs */}
      <View style={styles.dateRow}>
        {tabs2.map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setTab2(t)}
            style={styles.dateTab}
          >
            <Text
              style={[styles.dateText, tab2 === t && styles.dateTextActive]}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Empty State */}
      <View style={styles.emptyBox}>
        <Image
          source={require("../../assets/favicon.png")}
          style={{ width: 100, height: 100, marginBottom: 16 }}
          resizeMode="contain"
        />
        <Text style={styles.emptyText}>Bạn chưa có công việc nào</Text>
        <Text style={styles.emptySubText}>
          Bạn có thể bắt đầu tạo công việc đầu tiên để làm việc cùng Getfly
        </Text>
      </View>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 10,
  },
  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginRight: 8,
  },
  filterBtnActive: {
    backgroundColor: "#007AFF",
    borderColor: "#007AFF",
  },
  filterText: {
    color: "#333",
    fontSize: 13,
  },
  filterTextActive: {
    color: "#fff",
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 8,
  },
  dateTab: {
    paddingHorizontal: 10,
    paddingBottom: 4,
  },
  dateText: {
    fontSize: 14,
    color: "#888",
  },
  dateTextActive: {
    color: "#007AFF",
    fontWeight: "600",
  },
  emptyBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
  },
  emptySubText: {
    fontSize: 14,
    textAlign: "center",
    color: "#666",
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    backgroundColor: "#007AFF",
    borderRadius: 28,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
