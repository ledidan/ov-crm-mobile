import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { theme } from "../theme";
import ProgressSlider from "../fields/ProgressSlider";
import Info from "@/components/ActivityScreen/Tabs/Info";
import Customer from "@/components/ActivityScreen/Tabs/Customer";
import Ticket from "@/components/ActivityScreen/Tabs/Ticket";
import Attachments from "@/components/ActivityScreen/Tabs/Attachments";

const ActivityDetailScreen = ({ route, navigation }) => {
  const task = route.params?.task;
  const [taskProgress, setTaskProgress] = useState(task);
  const [selectedTab, setSelectedTab] = useState("Thông tin");
  const renderTabContent = () => {
    switch (selectedTab) {
      case "Thông tin":
        return <Info />;
      case "Khách hàng":
        return <Customer />;
      case "Ticket":
        return <Ticket />;
      case "Tài liệu":
        return <Attachments />;
      default:
        return null;
    }
  };
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Chi tiết công việc</Text>
        <Ionicons name="ellipsis-vertical" size={20} />
      </View>

      {/* Task Info */}
      <View style={styles.card}>
        <Text style={styles.type}>Công việc</Text>
        <View style={styles.row}>
          <Text style={styles.name}>{task?.title || "Không có tiêu đề"}</Text>
          <Ionicons name="happy-outline" size={24} color="#8E44AD" />
        </View>

        {/* Dates + Progress */}
        <Text style={styles.date}>
          {task?.startDate} → {task?.endDate}
        </Text>
        <Text style={styles.progressText}>
          {Math.round(taskProgress.progress * 100)}%
        </Text>
        <View style={styles.progressRow}>
          <ProgressSlider
            value={taskProgress.progress}
            onChange={(val) =>
              setTaskProgress({ ...taskProgress, progress: val })
            }
          />
        </View>

        {/* People */}
        <View style={styles.peopleRow}>
          <View>
            <Text style={styles.label}>Người giao việc</Text>
            <Text style={styles.value}>Đan Lê</Text>
          </View>
          <View>
            <Text style={styles.label}>Người nhận việc</Text>
            <Text style={styles.value}>Đan Lê</Text>
          </View>
        </View>

        <View style={{ marginTop: 8 }}>
          <Text style={styles.label}>Người tham gia</Text>
          <Text style={styles.value}>Chưa có</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabRow}>
        {["Thông tin", "Khách hàng", "Ticket", "Tài liệu"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabBtn, selectedTab === tab && styles.activeTabBtn]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Info Section */}
      <View style={styles.infoBox}>{renderTabContent()}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: { fontSize: 16, fontWeight: "bold" },

  card: {
    padding: 16,
    margin: 16,
    borderRadius: 12,
    backgroundColor: "#f9f9ff",
    elevation: 1,
  },
  type: { fontSize: 12, color: "#888" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: { fontSize: 16, fontWeight: "600", marginVertical: 6 },
  date: { fontSize: 12, color: "#666" },
  progressRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  progressText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },

  peopleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  label: { fontSize: 13, color: "#777" },
  value: { fontSize: 14, color: "#111", marginTop: 2 },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  tabBtn: {
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  tabText: {
    fontSize: 15,
    color: "#333",
  },

  infoBox: {
    // padding: 16,
  },
  activeTabBtn: {
    borderBottomWidth: 2,
    borderColor: theme.colors.primary,
  },
  activeTabText: {
    color: theme.colors.primary,
    fontWeight: "bold",
  },
  tabContent: {
    fontSize: 14,
    color: "#333",
  },
  statusBadge: {
    flexDirection: "row",
    backgroundColor: "#000",
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignSelf: "flex-start",
    alignItems: "center",
  },
  statusText: { color: "#fff", fontSize: 12, marginRight: 4 },

  iconBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 4,
  },
});

export default ActivityDetailScreen;
