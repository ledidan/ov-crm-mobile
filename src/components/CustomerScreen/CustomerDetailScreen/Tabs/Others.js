import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const items = [
  { label: "Đơn hàng", icon: <Ionicons name="cart-outline" size={24} color="#0A58FF" /> },
  { label: "Sản phẩm", icon: <MaterialIcons name="inventory" size={24} color="#1C63D5" /> },
  { label: "Hợp đồng", icon: <Ionicons name="document-text-outline" size={24} color="#8847F4" /> },
  { label: "Email", icon: <Ionicons name="mail-outline" size={24} color="#FF6F00" /> },
  { label: "SMS", icon: <Ionicons name="chatbox-ellipses-outline" size={24} color="#000" /> },
  { label: "Cuộc gọi", icon: <Ionicons name="call-outline" size={24} color="#007AFF" /> },
  { label: "Tài liệu", icon: <Ionicons name="document-outline" size={24} color="#0277BD" /> },
  { label: "Báo giá", icon: <Ionicons name="pricetag-outline" size={24} color="#D32F2F" /> },
  { label: "Lịch hẹn", icon: <Ionicons name="calendar-outline" size={24} color="#303F9F" /> },
  { label: "Cơ hội", icon: <Ionicons name="key-outline" size={24} color="#E53935" /> },
  { label: "Lịch đi tuyến", icon: <Ionicons name="walk-outline" size={24} color="#283593" /> },
  { label: "Automation", icon: <Ionicons name="settings-outline" size={24} color="#212121" /> },
  { label: "Giới thiệu", icon: <Ionicons name="share-social-outline" size={24} color="#F57C00" /> },
  { label: "Ticket", icon: <Ionicons name="help-buoy-outline" size={24} color="#9C27B0" /> },
  { label: "Bảo hành", icon: <FontAwesome5 name="shield-alt" size={24} color="#26A69A" /> },
];

export default function Others() {
  const renderRows = () => {
    const rows = [];
    const numColumns = 4;

    for (let i = 0; i < items.length; i += numColumns) {
      const rowItems = items.slice(i, i + numColumns);
      rows.push(
        <View style={styles.row} key={i}>
          {rowItems.map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.card} activeOpacity={0.8}>
              <View style={styles.iconBox}>{item.icon}</View>
              <Text style={styles.label}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }

    return rows;
  };

  return <View style={styles.grid}>{renderRows()}</View>;
}

const styles = StyleSheet.create({
  grid: {
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  card: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 4,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#F9F9FF",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
  },
  iconBox: {
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "BeVietnamPro-Medium",
  },
});
