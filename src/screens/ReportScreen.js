import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ReportScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Báo cáo khách hàng</Text>
        <View style={styles.tabRow}>
          <TouchableOpacity style={styles.tab}>
            <Ionicons name="filter" size={16} color="#666" />
            <Text style={styles.tabText}>Độ tuổi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Ionicons name="calendar" size={16} color="#fff" />
            <Text style={styles.tabActiveText}>Thời gian: Tháng này</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Ionicons name="people" size={16} color="#666" />
            <Text style={styles.tabText}>Nhóm khách</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Tỷ lệ chuyển đổi</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>So sánh</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsContainer}>
          {/* Khách hàng mới */}
          <View style={[styles.statCard, { backgroundColor: "#4A90E2" }]}>
            <Ionicons name="person-add" size={28} color="#fff" />
            <Text style={styles.statTitle}>Khách hàng mới</Text>
            <Text style={styles.statNumber}>1</Text>
            <Text style={styles.statSubText}>Khách hàng</Text>
          </View>

          {/* Tương tác */}
          <View style={[styles.statCard, { backgroundColor: "#F5A623" }]}>
            <Ionicons name="chatbox-ellipses" size={28} color="#fff" />
            <Text style={styles.statTitle}>Tương tác</Text>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statSubText}>Khách hàng</Text>
          </View>

          {/* Hoạt động */}
          <View style={[styles.statCard, { backgroundColor: "#50E3C2" }]}>
            <Ionicons name="rocket" size={28} color="#fff" />
            <Text style={styles.statTitle}>Hoạt động</Text>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statSubText}>Hoạt động</Text>
          </View>

          {/* Đơn hàng */}
          <View style={[styles.statCard, { backgroundColor: "#9B59B6" }]}>
            <Ionicons name="cart" size={28} color="#fff" />
            <Text style={styles.statTitle}>Đơn hàng</Text>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statSubText}>Đơn hàng</Text>
          </View>

          {/* Doanh thu */}
          <View style={[styles.statCard, { backgroundColor: "#2ECC71" }]}>
            <Image
              source={{ uri: "https://img.icons8.com/ios-filled/50/000000/trophy.png" }} // Placeholder trophy icon
              style={styles.trophyIcon}
            />
            <Text style={styles.statTitle}>Doanh thu</Text>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statSubText}>0 đ</Text>
          </View>
        </View>

        {/* Chọn điều kiện */}
        <TouchableOpacity style={styles.conditionButton}>
          <Text style={styles.conditionText}>Chọn điều kiện khách hàng</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FB",
  },
  header: {
    padding: 16,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  tabRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  activeTab: {
    backgroundColor: "#4A90E2",
    borderColor: "#4A90E2",
  },
  tabText: {
    color: "#666",
    fontSize: 14,
    marginLeft: 6,
  },
  tabActiveText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 6,
  },
  content: {
    padding: 16,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  filterText: {
    color: "#333",
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  statCard: {
    width: "48%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statTitle: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
  },
  statNumber: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginVertical: 8,
  },
  statSubText: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
  },
  trophyIcon: {
    width: 28,
    height: 28,
    tintColor: "#fff",
  },
  conditionButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  conditionText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
  },
});