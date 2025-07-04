import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Thêm icon nếu mày dùng Expo
import { theme } from "../theme";



const QuotationScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState("Thông tin");
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);

  const toggleAddForm = () => {
    setIsAddFormVisible(!isAddFormVisible);
  };
  const TabInfo = () => <Text style={styles.tabContent}>📝 Thông tin</Text>;
  const TabCustomer = () => (
    <Text style={styles.tabContent}>👤 Khách hàng</Text>
  );
  const TabSubTasks = () => (
    <Text style={styles.tabContent}>📋 Công việc con</Text>
  );

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Tất cả":
        return <TabInfo />;
      case "Chờ duyệt":
        return <TabCustomer />;
      case "Đã xoá":
        return <TabSubTasks />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Báo giá</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddQuotationForm")} style={styles.addBtn}>
          <Ionicons name="add" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.tabRow}>
        {["Tất cả", "Chờ duyệt", "Đã xoá"].map(
          (tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabBtn,
                selectedTab === tab && styles.activeTabBtn,
              ]}
              onPress={toggleAddForm}
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
      <View style={styles.notification}>
        {/* Tabs */}

        {/* Info Section */}
        <View style={styles.infoBox}>{renderTabContent()}</View>
        <Text style={styles.message}>Chưa có báo giá</Text>
        <Text style={styles.subMessage}>
          Bạn chưa có báo giá nào cả. Hãy tạo báo giá cho khách hàng đi nhé!
        </Text>
      </View>
    </View>
  );
};

export default QuotationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 10,
  },
  tab: {
    fontSize: 14,
    color: theme.colors.primary,
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
    borderTopWidth: 1,
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
  addBtn: {
    backgroundColor: "#f1f1f1",
    borderRadius: 4,
    padding: 4
  }
});
