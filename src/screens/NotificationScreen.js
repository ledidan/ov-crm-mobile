import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";

const NotificationScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Thông tin");
  const TabInfo = () => <Text style={styles.tabContent}>📝 Thông tin</Text>;
  const TabCustomer = () => (
    <Text style={styles.tabContent}>👤 Khách hàng</Text>
  );
  const TabSubTasks = () => (
    <Text style={styles.tabContent}>📋 Công việc con</Text>
  );
  const TabTicket = () => <Text style={styles.tabContent}>🎫 Ticket</Text>;
  const TabFile = () => <Text style={styles.tabContent}>📎 Tài liệu</Text>;

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Thông tin":
        return <TabInfo />;
      case "Khách hàng":
        return <TabCustomer />;
      case "Công việc con":
        return <TabSubTasks />;
      case "Ticket":
        return <TabTicket />;
      case "Tài liệu":
        return <TabFile />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Thông báo</Text>
        <TouchableOpacity
          onPress={() => console.log("click")}
          title="button click"
        >
          <Ionicons name="search-outline" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.tabRow}>
        {["Thông tin", "Khách hàng", "Công việc con", "Ticket", "Tài liệu"].map(
          (tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabBtn,
                selectedTab === tab && styles.activeTabBtn,
              ]}
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
          )
        )}
      </View>
      <View style={styles.infoBox}>{renderTabContent()}</View>
      <View style={styles.notification}>
        <Text style={styles.message}>Không có thông báo nào</Text>
        <Text style={styles.subMessage}>
          Không có thông báo nào trong mục này của bạn cả
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  infoBox: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tab: {
    fontSize: 14,
    color: theme.colors.primary,
    paddingHorizontal: 10,
  },
  notification: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    fontSize: 16,
    color: theme.colors.primary,
  },
  subMessage: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 20,
  },

  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  tabBtn: {
    paddingVertical: 12,
  },
  tabText: {
    fontSize: 13,
    color: "#333",
  },

  infoBox: {
    padding: 16,
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
});

export default NotificationScreen;
