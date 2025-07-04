import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme";

const mockNotifications = {
  "Thông tin": [
    { id: 1, title: "Đã cập nhật trạng thái cơ hội", time: "2 phút trước" },
    { id: 2, title: "Giao nhiệm vụ mới cho bạn", time: "10 phút trước" },
  ],
  "Khách hàng": [
    {
      id: 3,
      title: "Khách hàng Nguyễn Văn A vừa được tạo",
      time: "1 giờ trước",
    },
    {
      id: 4,
      title: "Khách hàng Trần B vừa cập nhật email",
      time: "3 giờ trước",
    },
  ],
  "Công việc con": [
    {
      id: 5,
      title: "Công việc con 'Check hợp đồng' sắp đến hạn",
      time: "Hôm qua",
    },
  ],
  Ticket: [
    { id: 6, title: "Ticket #2345 vừa được phản hồi", time: "3 ngày trước" },
    { id: 7, title: "Ticket #1234 đã được đóng", time: "4 ngày trước" },
  ],
  "Tài liệu": [],
};
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

  // const renderTabContent = () => {
  //   switch (selectedTab) {
  //     case "Thông tin":
  //       return <TabInfo />;
  //     case "Khách hàng":
  //       return <TabCustomer />;
  //     case "Công việc con":
  //       return <TabSubTasks />;
  //     case "Ticket":
  //       return <TabTicket />;
  //     case "Tài liệu":
  //       return <TabFile />;
  //     default:
  //       return null;
  //   }
  // };
  const renderTabContent = () => {
    const items = mockNotifications[selectedTab] || [];
    if (items.length === 0) {
      return (
        <View style={styles.notification}>
          <Text style={styles.message}>Không có thông báo nào</Text>
          <Text style={styles.subMessage}>
            Không có thông báo nào trong mục này của bạn cả
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.infoBox}>
        {items.map((item) => (
          <View key={item.id} style={styles.notificationItem}>
            <Ionicons
              name="notifications-outline"
              size={18}
              color={theme.colors.primary}
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationTime}>{item.time}</Text>
            </View>
          </View>
        ))}
      </View>
    );
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
    // paddingVertical: 4,
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

  // ** Notification
  notificationItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    // marginBottom: 5,
    borderBottomWidth: 1,
    borderColor: "#eee",
    padding: 20,
    backgroundColor: "#f5f5f9"
  },
  notificationTitle: {
    fontSize: 14,
    color: "#333",
    fontWeight: "500",
  },
  notificationTime: {
    fontSize: 12,
    color: "#999",
    marginTop: 2,
  },
});

export default NotificationScreen;
